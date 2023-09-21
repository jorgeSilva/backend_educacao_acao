const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const AF40hSchema = new Schema({
  nome: String,
  escolaFK: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('AF40h', AF40hSchema)