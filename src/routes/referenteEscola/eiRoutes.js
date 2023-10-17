const express = require('express')
const eiRoute = express.Router()

const eiController = require('../../controller/referenteEscola/eiController')

eiRoute.post('/educacao-infantil', eiController.store)

eiRoute.get('/educacao-infantil/show', eiController.show)

eiRoute.put('/0a3anos/update/:_id', eiController.updateAluno0a3)
eiRoute.put('/alunos4/update/:_id', eiController.updateAluno4)
eiRoute.put('/alunos5/update/:_id', eiController.updateAluno5)

module.exports = eiRoute