const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const AdmSchema = new Schema({
  nome:  String
})

module.exports = mongoose.model('Adm', AdmSchema)