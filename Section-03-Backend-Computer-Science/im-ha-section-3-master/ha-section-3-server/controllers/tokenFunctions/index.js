require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    //TODO: Access token으로 sign합니다.
    //HINT: 토큰을 리턴하세요. (공식 문서의 Synchronous한 방법을 사용합니다)
    //Access token으로 sign
    const accessToken = sign(data, process.env.ACCESS_SECRET);
    //토큰을 리턴
    return accessToken 
  },

  sendAccessToken: (res, accessToken) => {
    //TODO: JWT 토큰을 쿠키로 전달합니다.
    //JWT 토큰을 쿠키로 전달
    return res.cookie("jwt", accessToken);
  },

  isAuthorized: (req) => {
    //TODO: JWT 토큰 정보를 받아서 검증합니다.
    //HINT: jsonwebtoken 라이브러리의 verify 함수를 사용하여 decode된 payload를 리턴하세요. (공식 문서의 Synchronous한 방법을 사용합니다)
    try{ //JWT 토큰 정보를 받아서 검증
      if(!req.cookies.jwt) return null; //없는 경우
      else{ //있는 경우
        const accessToken = req.cookies.jwt;
        //verify를 사용하여 decode된 payload를 리턴
        const decode = verify(accessToken, process.env.ACCESS_SECRET);
        //해독한 내용 전달
        return decode;
      }
    } catch(err){ //오류 난 경우
      return null;
    }
  }
};
