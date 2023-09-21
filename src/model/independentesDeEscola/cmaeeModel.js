const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const CMAEESchema = new Schema({
  nome:  String
})

module.exports = mongoose.model('CMAEE', CMAEESchema)