const express = require('express')
const setorRoute = express.Router()

const setoresController = require('../../controller/setores/setoresController')

setorRoute.post('/setor', setoresController.store)

setorRoute.get('/setor/show', setoresController.show)

setorRoute.put('/setor/dados/:_id', setoresController.updateObs)

module.exports = setorRoute