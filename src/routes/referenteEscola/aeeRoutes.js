const express = require('express')
const aeeRouter = express.Router()

const aeeController = require('../../controller/referenteEscola/aeeController')

aeeRouter.post('/aee', aeeController.store)

aeeRouter.get('/aee/show', aeeController.show)

aeeRouter.put('/aee/update/:_id', aeeController.update)

aeeRouter.delete('/aee/delete/:_id', aeeController.deleteAEE)

module.exports = aeeRouter