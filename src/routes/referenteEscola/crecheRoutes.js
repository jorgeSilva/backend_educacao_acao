const express = require('express')
const creheRouter = express.Router()

const crecheController = require('../../controller/referenteEscola/crecheController')

creheRouter.post('/creche', crecheController.store)

creheRouter.get('/creche/show', crecheController.crecheShow)

creheRouter.put('/creche/update/:_id', crecheController.updateCRECHE)

creheRouter.delete('/creche/delete/:_id', crecheController.deleteCreche)

module.exports = creheRouter