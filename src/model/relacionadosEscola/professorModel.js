const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const ProfessorSchema = new Schema({
  nome: String,
  funcao: String,
  escolaFK: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('Professor', ProfessorSchema)