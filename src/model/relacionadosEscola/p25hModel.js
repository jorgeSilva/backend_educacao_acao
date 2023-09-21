const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const P40hSchema = new Schema({
  nome: String,
  escolaFK: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('Professor40h', P40hSchema)