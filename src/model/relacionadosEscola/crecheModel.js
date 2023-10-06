const mongoose = require('mongoose')
const Schema = mongoose.Schema

const crecheSchema = new Schema({
  nTurmas: Number,
  fkescola: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('CRECHE', crecheSchema)