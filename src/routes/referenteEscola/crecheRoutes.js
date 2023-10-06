const express = require('express')
const creheRouter = express.Router()

const crecheController = require('../../controller/referenteEscola/crecheController')

creheRouter.post('/creche', crecheController.store)

creheRouter.get('/creche/show', crecheController.crecheShow)

module.exports = creheRouter