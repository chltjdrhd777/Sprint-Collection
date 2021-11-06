// 해당 모델의 인스턴스를 models/index.js에서 가져옵니다.
const { Users } = require('../../models');

module.exports = {
  post: async (req, res) => {
    // userInfo는 유저정보가 데이터베이스에 존재하고, 완벽히 일치하는 경우에만 데이터가 존재합니다.
    // 만약 userInfo가 NULL 혹은 빈 객체라면 전달받은 유저정보가 데이터베이스에 존재하는지 확인해 보세요
    const userInfo = await Users.findOne({
      where: { userId: req.body.userId, password: req.body.password },
    });
    /*
    console.log(req.session);

    Session {
    cookie: {
    path: '/',
    _expires: 2021-10-21T05:02:05.467Z,
    originalMaxAge: 86400000,
    httpOnly: true,
    domain: 'localhost',
    sameSite: 'none',
    secure: true
    }
    }
    */
    // TODO: userInfo 결과 존재 여부에 따라 응답을 구현하세요.
    // 결과가 존재하는 경우 세션 객체에 userId가 저장되어야 합니다.
    if (!userInfo) {
      // your code here
      return res.status(400).send({ data: null, message: `not authorized` });
    } else {
      // HINT: req.session을 사용하세요.
      // 세션에 userId를 저장합니다.
      req.session.save(function() {
        // session saved
        req.session.userId = userInfo.userId;
        res.status(200).send({ data: userInfo, message: 'ok' });
        //console.log(req.session);
        /*
        Session {
          cookie: {
          path: '/',
          _expires: 2021-10-21T05:06:57.780Z,
          originalMaxAge: 86400000,
          httpOnly: true,
          domain: 'localhost',
          sameSite: 'none',
          secure: true
          },
          userId: 'kimcoding'
        }
        */
      })      
    }
  }
}