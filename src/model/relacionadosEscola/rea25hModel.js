const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const REA25hSchema = new Schema({
  nome: String,
  escolaFK: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('REA25h', REA25hSchema)