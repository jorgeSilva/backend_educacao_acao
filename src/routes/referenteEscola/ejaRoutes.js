const express = require('express')
const ejaRouter = express.Router()

const ejaController = require('../../controller/referenteEscola/ejaController')

ejaRouter.post('/educacao-jovem-adulto', ejaController.store)

ejaRouter.get('/educacao-jovem-adulto/show', ejaController.show)

ejaRouter.put('/educacao-jovem-adulto/update/:_id', ejaController.update)

module.exports = ejaRouter
