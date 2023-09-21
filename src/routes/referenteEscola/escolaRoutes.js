const express = require('express')
const escolaRoute = express.Router()

const EscolaController = require('../../controller/referenteEscola/escolaController')

escolaRoute.post('/escola', EscolaController.store)
escolaRoute.get('/escola/show', EscolaController.show)

module.exports = escolaRoute