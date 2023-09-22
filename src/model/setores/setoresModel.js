const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const SetoresSchema = new Schema({
  nome: String,
  setor: String,
  obs: String
})

module.exports = mongoose.model('Setor', SetoresSchema)