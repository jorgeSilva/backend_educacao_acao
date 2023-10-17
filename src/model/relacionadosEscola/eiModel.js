const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const EISchema = new Schema({
  nTurmas: String,
  parcial: String,
  integral: String,
  alunos0a3: String,
  alunos4: String,
  alunos5: String,
  fkescola: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('EI', EISchema)