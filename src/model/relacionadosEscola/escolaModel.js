const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const EscolaSchema = new Schema({
  nome: String,
  modalidade: String,
  n1: String,
})

module.exports = mongoose.model('Escola', EscolaSchema)