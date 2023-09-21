const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const AeeSchema = new Schema({
  nome: String,
  escolaFK: {
    type: Schema.Types.ObjectId,
    ref: 'Escola'
  }
})

module.exports = mongoose.model('AEE', AeeSchema)