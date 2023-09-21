const express = require('express')
const eiRoute = express.Router()

const eiController = require('../../controller/referenteEscola/eiController')

eiRoute.post('/educacao-infantil', eiController.store)

eiRoute.get('/educacao-infantil/show', eiController.show)

eiRoute.put('/educacao-infantil/edit/todas/:_id', eiController.updateTTurmas)
eiRoute.put('/educacao-infantil/edit/integral/:_id', eiController.updateIntegral)
eiRoute.put('/educacao-infantil/edit/parcial/:_id', eiController.updateParcial)


module.exports = eiRoute