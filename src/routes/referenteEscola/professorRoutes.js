const express = require('express')
const professorRoute = express.Router()

const ProfessorController = require('../../controller/referenteEscola/professorController')

professorRoute.post('/professor', ProfessorController.store)

professorRoute.get('/professor/show', ProfessorController.show)

professorRoute.put('/professor/dados/:_id', ProfessorController.updateDados)
professorRoute.put('/professor/funcao/:_id', ProfessorController.updateFuncao)

module.exports = professorRoute