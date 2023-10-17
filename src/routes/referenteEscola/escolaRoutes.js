const express = require('express')
const escolaRoute = express.Router()

const EscolaController = require('../../controller/referenteEscola/escolaController')

escolaRoute.post('/escola', EscolaController.store)

escolaRoute.get('/escola/show', EscolaController.show)
escolaRoute.get('/escola/n1c/show', EscolaController.showN1)
escolaRoute.get('/favo/show', EscolaController.referenteFavo)
escolaRoute.get('/emei/show', EscolaController.referenteEMEI)
escolaRoute.get('/vila/show', EscolaController.referenteVILA)
escolaRoute.get('/agro/show', EscolaController.referenteAgro)
escolaRoute.get('/toriba/show', EscolaController.referenteToriba)
escolaRoute.get('/jardim/show', EscolaController.referenteJSI)

escolaRoute.put('/escolaN1C/update/:_id', EscolaController.updateN1C)

module.exports = escolaRoute