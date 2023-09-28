const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  nome: String,
  email: String,
  password: String
})

module.exports = mongoose.model('Usuario', UserSchema)