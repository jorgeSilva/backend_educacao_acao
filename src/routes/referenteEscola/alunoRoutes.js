const express = require('express')
const alunoRoute = express.Router()

const AlunoController = require('../../controller/referenteEscola/alunoController')

alunoRoute.post('/aluno', AlunoController.store)

alunoRoute.get('/aluno/show', AlunoController.show)
alunoRoute.get('/parcial/show', AlunoController.alunoPeriodoParcial)
alunoRoute.get('/integral/show', AlunoController.alunoPeriodoIntegral)

alunoRoute.put('/aluno/update/:_id', AlunoController.update)

module.exports = alunoRoute