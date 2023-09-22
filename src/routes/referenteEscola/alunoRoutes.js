const express = require('express')
const alunoRoute = express.Router()

const AlunoController = require('../../controller/referenteEscola/alunoController')

alunoRoute.post('/aluno', AlunoController.store)

alunoRoute.get('/aluno/show', AlunoController.show)

alunoRoute.put('/aluno/update/:_id', AlunoController.update)

module.exports = alunoRoute