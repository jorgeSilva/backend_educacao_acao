const express = require('express')
const convenioRoute = express.Router()

const convenioController = require('../../controller/setores/convenioController')

convenioRoute.post('/convenio', convenioController.store)

convenioRoute.get('/convenio/show', convenioController.show)

convenioRoute.get('/convenio/merenda/show', convenioController.convenioMerenda)
convenioRoute.get('/convenio/transporte/show', convenioController.convenioTransporte)

convenioRoute.get('/merenda/show', convenioController.convenioMerenda)
convenioRoute.get('/transporte/show', convenioController.convenioTransporte)

convenioRoute.put('/convenio/update/:_id', convenioController.updateConvenio)

convenioRoute.delete('/convenio/delete/:_id', convenioController.deleteConvenio)

module.exports = convenioRoute