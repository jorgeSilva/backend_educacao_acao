const express = require('express')
const convenioRoute = express.Router()

const convenioController = require('../../controller/setores/convenioController')

convenioRoute.post('/convenio', convenioController.store)

convenioRoute.get('/convenio/show', convenioController.show)

convenioRoute.put('/convenio/transporte/:_id', convenioController.updateTransp)
convenioRoute.put('/convenio/merenda/:_id', convenioController.updateMerenda)

module.exports = convenioRoute