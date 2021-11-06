const { Users } = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if(!refreshToken){
    return res.status(400).send({ 
      data: null, 
      message: "refresh token not provided" 
    })
  } else {
    if(refreshToken === 'invalidtoken'){
      return res.status(400).send({ 
        data: null, 
        message: "invalid refresh token, please log in again" 
      })
    } else{
      const data = jwt.verify(refreshToken, process.env.REFRESH_SECRET); 
      const userInfo = await Users.findOne({ where: { id: data.id } });

      if(!userInfo){
        return res.status(400).send({ 
          data: null, 
          message: "refresh token has been tempered" 
        })
      } else{
        const payload = {
          id: data.id,
          userId: data.userId,
          email: data.email,
          createdAt: data.createdAt,
          updatedAt: data.updatedAt
        }
        return res.status(200).send({
          data: { 
            accessToken: refreshToken,
            userInfo: payload 
          },
          message: "ok"
        })
      }
    }
  }
};