const express = require('express')
const preRouter = express.Router()

const preController = require('../../controller/referenteEscola/preController')

preRouter.post('/pre', preController.store)

preRouter.get('/pre/show', preController.preShow)

module.exports = preRouter