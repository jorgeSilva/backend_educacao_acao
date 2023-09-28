require('dotenv').config()
const jwt = require('jsonwebtoken')
const UserModel = require('../model/UserModel')

const UserMiddleware = (req, res, next) => {
  const authUser = req.headers['authorization']
  const token = authUser && authUser.split(' ')[1]

  if(!token){
    return res.status(401).json('Acesso negado.')
  }

  try{
    const secret = process.env.SECRET
    jwt.verify(token, secret)

    next()
  }catch(error){
    res.status(400).json({error: 'Token invalido.'})
  }
}

module.exports = UserMiddleware