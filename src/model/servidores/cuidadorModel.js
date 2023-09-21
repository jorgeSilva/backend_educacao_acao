const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const CuidadorSchema = new Schema({
  nome: String,
  escolaFK: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('Cuidador', CuidadorSchema)