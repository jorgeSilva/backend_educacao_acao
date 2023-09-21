const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const UNIVESPSchema = new Schema({
  nome:  String
})

module.exports = mongoose.model('Univesp', UNIVESPSchema)