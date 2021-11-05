const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  //TODO: 로그인 여부를 판단하고, Access token payload를 이용하여 응답을 제공하세요.
  try{
    //액세스 토큰 데이터 뽑아오기
    const accessTokenData = isAuthorized(req);
    // 그 데이터가 존재하지 않는 경우
    if(!accessTokenData){
      return res.status(401).send({ data: null, message: 'not authorized' });
    } else { //데이터가 존재하는 경우
      //이메일이랑 일치하는 사용자 정보 뽑아오기
      const userInfo = await user.findOne({ 
        where: { email: accessTokenData.email } 
      });
      //응답을 보내주기
      return res.status(200).cookie("jwt", req.cookies.jwt).json({
        data: { userInfo }
      })
    }
  } catch(err){ //오류 난 경우
    return null;
  }
};
