const express = require('express')
const preRouter = express.Router()

const preController = require('../../controller/referenteEscola/preController')

preRouter.post('/pre', preController.store)

preRouter.get('/pre/show', preController.preShow)

preRouter.put('/pre/update/:_id', preController.updatePRE)

preRouter.delete('/pre/delete/:_id', preController.deletePRE)

module.exports = preRouter