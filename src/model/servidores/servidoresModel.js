const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ServidoresSchema = new Schema({
  nome: String,
  funcao: String,
  cargo: String,
  fkescola: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('Servidor', ServidoresSchema)