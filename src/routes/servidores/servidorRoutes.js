const express = require('express')
const servidorRoute = express.Router()

const servidorController = require('../../controller/servidores/servidorController')

servidorRoute.post('/servidor', servidorController.store)

servidorRoute.get('/servidor/show', servidorController.show)
servidorRoute.get('/merendeiraEfetiva/show', servidorController.merendeiraEfetiva)
servidorRoute.get('/merendeiraContratada/show', servidorController.merendeiraContratada)
servidorRoute.get('/auxLimpCont/show', servidorController.auxLimpContr)
servidorRoute.get('/auxLimpEfet/show', servidorController.auxLimpEfet)
servidorRoute.get('/motoristaEfetivo/show', servidorController.motoristaEfetivo)
servidorRoute.get('/motoristaContratado/show', servidorController.motoristaContratado)
servidorRoute.get('/cuidador/show', servidorController.Cuidador)
servidorRoute.get('/monitor/show', servidorController.Monitor)

servidorRoute.put('/servidores/update/:_id', servidorController.updateDados)

servidorRoute.delete('/servidores/delete/:_id', servidorController.deleteServidor)

module.exports = servidorRoute