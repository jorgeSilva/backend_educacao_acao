const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const ConvenioSchema = new Schema({
  transporte: Number,
  merenda: Number,
})

module.exports = mongoose.model('Convenio', ConvenioSchema)