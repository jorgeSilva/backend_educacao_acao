const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const ProfSchema = new Schema({
  nome: String,
  escolaFK: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('ProfessorContratado', ProfSchema)