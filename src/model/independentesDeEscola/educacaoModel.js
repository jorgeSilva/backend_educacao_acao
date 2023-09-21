const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const EducacaoSchema = new Schema({
  nome:  String
})

module.exports = mongoose.model('Educacao', EducacaoSchema)