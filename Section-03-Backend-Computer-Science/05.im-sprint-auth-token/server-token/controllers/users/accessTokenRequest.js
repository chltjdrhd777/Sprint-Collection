const { Users } = require('../../models');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  console.log(req.headers);
  if(!req.headers.authorization){
    res.status(400).send({ 
      data: null, 
      message: "invalid access token"
    });
  } 
  else{
    const authorization = req.headers['authorization'];
    const token = authorization.split(' ')[1];
    const data = jwt.verify(token, process.env.ACCESS_SECRET); 

    const userInfo = await Users.findOne({ where: {
      id: data.id
    }});

    if(!userInfo){
      res.status(400).send({ 
        data: null, 
        message: "access token has been tempered" 
      })
    }
    else{
      const payload = {
        id: data.id,
        userId: data.userId,
        email: data.email,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt
      }
      res.status(200).send({
        data: {
          userInfo: payload
        }, 
        message: 'ok'
      });
    }
  }
};