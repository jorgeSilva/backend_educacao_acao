const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const AlunoSchema = new Schema({
  nome: String,
  dataNasc: String,
  nomeMae: String,
  nomePai: String,
  rua: String,
  bairro: String,
  nCasa: String,
  contato: String,
  escolaFK: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('Aluno', AlunoSchema)