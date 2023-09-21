const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const AF25hSchema = new Schema({
  nome: String,
  escolaFK: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('AF25h', AF25hSchema)