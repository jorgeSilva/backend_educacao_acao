const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const REA40hSchema = new Schema({
  nome: String,
  escolaFK: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('REA40h', REA40hSchema)