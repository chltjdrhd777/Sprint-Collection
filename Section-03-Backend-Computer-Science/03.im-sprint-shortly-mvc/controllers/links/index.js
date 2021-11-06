const { getUrlTitle } = require('../../modules/utils');
const { url } = require('../../models');

module.exports = {
    get: async (req, res) => { //URL 모델의 목록
        let result = await url.findAll(); //모든 url을 가져온다.
        if(result === undefined){ //result가 undefined인 경우
            res.status(400).send(null);
        } else{ //result가 존재하는 경우
            res.status(200).json(result);
        }
    },

    redirect: async (req, res) => { //URL로 접근할 경우 visits 필드에 카운트가 1씩 증가
        //해당 id 값 바탕으로 url 모델을 찾아 리디렉션
        let result = await url.findOne({ where: { id: req.params.id } }); //요청 받은 id와 일치하는 결과
        if(result === undefined){ //result가 undefined인 경우
            res.status(400).send(null); 
        } else{ //result가 존재하는 경우
            //url 업데이트 내용: result 방문 횟수 + 1 (조건: 특정 id 일 때만)
            await url.update({visits: result.visits + 1}, {where: {id: result.id}});
            //result.url을 리디렉트 => res.redirect(결과 url)
            res.status(302).redirect(result.url);
        }
    },

    post: (req, res) => {
        if(req.body.url === undefined){ //요청받은 url이 undefined인 경우
            req.status(400).send(null);
        } else { //요청받은 url이 존재하는 경우
            getUrlTitle(req.body.url, async (err, title) => {
                if(err) return res.status(400).send(null); 
                // 데이터베이스 urls 테이블에 url, title 두 필드를 작성해서 insert
                const result = await url.create( { url: req.body.url, title } );
                res.status(201).json(result);
            });
        }
    }
};
