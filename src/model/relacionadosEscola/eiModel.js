const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const EISchema = new Schema({
  nTurmas: Number,
  parcial: Number,
  integral: Number,
  escolaFK: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('EI', EISchema)