const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const TransporteSchema = new Schema({
  placa: String,
  ano: String,
  pmiSEE: String
})

module.exports = mongoose.model('Transporte', TransporteSchema)