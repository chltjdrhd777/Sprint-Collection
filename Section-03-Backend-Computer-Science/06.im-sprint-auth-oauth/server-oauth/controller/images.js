const images = require('../resources/resources');

module.exports = (req, res) => {
  // TODO : Mypage로부터 access token을 제대로 받아온 것이 맞다면, resource server의 images를 클라이언트로 보내주세요.
  if(!req.headers.authorization){
    return res.status(403).send({
      message: 'no permission to access resources'
    })
  } else return res.status(200).send({ images });
}