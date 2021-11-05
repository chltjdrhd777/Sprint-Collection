const { user } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  //TODO: 로그인 정보를 통해 사용자 인증 후 토큰 전달
  try{
    //유저 정보
    const { email, password } = req.body;
    //해당 이메일,비번과 일치하는 유저 뽑아오기
    const data = await user.findOne({
      where: { email: email, password: password }
    });
    //데이터가 존재하지 않는 경우
    if(!data) return res.status(404).send('invalid user');
    else{ //데이터가 존재하는 경우
      //그 데이터 가지고 토큰을 생성하기
      const accessToken = generateAccessToken(data.dataValues);
      //쿠키에 위에서 만든 토큰 담기
      sendAccessToken(res, accessToken);
      //상태코드랑 메시지 전송
      return res.status(200).json({ message: 'ok' });
    }
  } catch(err){ //오류 난 경우
    return null;
  }
};
