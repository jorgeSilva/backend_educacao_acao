const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const ConvenioSchema = new Schema({
  convenio: String,
  pmi: Number,
  see: Number,
  contraPartida: Number,
  date: String
})

module.exports = mongoose.model('Convenio', ConvenioSchema)