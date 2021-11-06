const { Users } = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  // urclass의 가이드를 참고하여 POST /login 구현에 필요한 로직을 작성하세요.
  const userInfo = await Users.findOne({ 
    where: {
      userId: req.body.userId,
      password: req.body.password
    } 
  });

  if(!userInfo){
    return res.status(400).send({ data: null, message: `not authorized` });
  } else {
    const payload = {
      id: userInfo.id,
      userId: userInfo.userId,
      email: userInfo.email,
      createdAt: userInfo.createdAt,
      updatedAt: userInfo.updatedAt
    };

    //const token = jwt.sign(토큰에_담을_값, ACCESS_SECRET, { 옵션1: 값, 옵션2: 값, ... });
    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET, {
      expiresIn: '1d'
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET, {
      expiresIn: '2d'
    });

    res.status(200).cookie('refreshToken', refreshToken, {
      sameSite: `none`,
      httpOnly: true,
      secure: true
    }).send({
      data: { accessToken: accessToken },
      message: "ok"
    })
  }
};
/*
1) 로그인 요청시 전달받은 유저 아이디 혹은 비밀번호가 잘못된 경우, 'not authorized'메세지가 응답에 포함되어야 합니다
2) 로그인 요청시 전달받은 유저아이디, 비밀번호가 데이터베이스에 저장된 정보와 완벽히 일치하는 경우, 'ok'메세지가 응답에 포함되어야 합니다
3) 로그인 요청시 전달받은 유저아이디, 비밀번호가 데이터베이스에 저장된 정보와 완벽히 일치하는 경우, 응답에 accessToekn이 포함되어야 합니다
4) 응답에 전달되는 엑세스 토큰은 유저정보가 담긴 JWT 토큰이여만 합니다.
  - 환경변수중 ACCESS_SECRET 변수를 사용하세요.
5) 로그인 성공시 전달되는 응답객체에는 refreshToken이 존재해야 합니다.
*/