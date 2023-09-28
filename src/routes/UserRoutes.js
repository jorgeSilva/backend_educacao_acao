const express = require('express')
const userRoute = express.Router()

const UserController = require('../controller/UserController')
const UserMiddleware = require('../middleware/UserValidation')

userRoute.post('/user', UserController.store)
userRoute.post('/user/login', UserController.login)

userRoute.get('/user/index', UserMiddleware, UserController.index)


module.exports = userRoute