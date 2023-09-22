const express = require('express')
const servidorRoute = express.Router()

const servidorController = require('../../controller/servidores/servidorController')

servidorRoute.post('/servidor', servidorController.store)

servidorRoute.get('/servidor/show', servidorController.show)

servidorRoute.put('/servidor/cargo/:_id', servidorController.updateCargo)
servidorRoute.put('/servidor/dados/:_id', servidorController.updateDados)

module.exports = servidorRoute