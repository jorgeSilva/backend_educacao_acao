const express = require('express')
const professorRoute = express.Router()

const ProfessorController = require('../../controller/referenteEscola/professorController')

professorRoute.post('/professor', ProfessorController.store)

professorRoute.get('/Servidores/show', ProfessorController.show)
professorRoute.get('/professor/40h/show', ProfessorController.professor40h)
professorRoute.get('/professor/rea40h/show', ProfessorController.professorREA40h)
professorRoute.get('/professor/af40h/show', ProfessorController.professorAF40h)
professorRoute.get('/professor/25h/show', ProfessorController.professor25h)
professorRoute.get('/professor/rea25h/show', ProfessorController.professorREA25h)
professorRoute.get('/professor/af25h/show', ProfessorController.professorAF25h)
professorRoute.get('/professor/professorContratado/show', ProfessorController.professorProfContr)

professorRoute.put('/professores/update/:_id', ProfessorController.updateDados)

professorRoute.delete('/professores/delete/:_id', ProfessorController.deleteProfessor)

module.exports = professorRoute