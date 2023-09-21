const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const EsporteSchema = new Schema({
  nome:  String
})

module.exports = mongoose.model('Esporte', EsporteSchema)