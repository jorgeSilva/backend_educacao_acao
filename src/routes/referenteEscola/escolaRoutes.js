const express = require('express')
const escolaRoute = express.Router()

const EscolaController = require('../../controller/referenteEscola/escolaController')

escolaRoute.post('/escola', EscolaController.store)
escolaRoute.get('/escola/show', EscolaController.show)
escolaRoute.get('/escola/n1c/show', EscolaController.showN1)

module.exports = escolaRoute