const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const ServidoresSchema = new Schema({
  nome: String,
  funcao: String,
  cargo: String,
  escolaFK: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('Servidor', ServidoresSchema)