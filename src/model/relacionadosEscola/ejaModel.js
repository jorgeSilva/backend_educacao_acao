const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const EJASchema = new Schema({
  nTurmas: Number,
  escolaFK: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('EJA', EJASchema)