const mongoose = require('mongoose')
const Schema = mongoose.Schema

const preSchema = new Schema({
  nTurmas: Number,
  fkescola: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('PRE', preSchema)