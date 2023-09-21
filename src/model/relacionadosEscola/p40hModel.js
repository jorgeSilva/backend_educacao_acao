const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const P25hSchema = new Schema({
  nome: String,
  escolaFK: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('Professor25h', P25hSchema)