const mongoose = require('../../config/database')
const Schema = mongoose.Schema

const CulturaSchema = new Schema({
  nome:  String
})

module.exports = mongoose.model('Cultura', CulturaSchema)