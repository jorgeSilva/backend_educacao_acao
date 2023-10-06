const express = require('express')
const setorRoute = express.Router()

const setoresController = require('../../controller/setores/setoresController')

setorRoute.post('/setor', setoresController.store)

setorRoute.get('/setor/show', setoresController.show)
setorRoute.get('/setor/esporte/show', setoresController.setorEsporte)
setorRoute.get('/setor/educacao/show', setoresController.setorEducacao)
setorRoute.get('/setor/cultura/show', setoresController.setorCultura)
setorRoute.get('/setor/cmaee/show', setoresController.setorCMAEE)
setorRoute.get('/setor/univesp/show', setoresController.setorUnivesp)
setorRoute.get('/setor/adm/show', setoresController.setorADM)
setorRoute.get('/setor/transporte/show', setoresController.setorTransporte)

setorRoute.put('/setor/dados/:_id', setoresController.updateObs)

module.exports = setorRoute