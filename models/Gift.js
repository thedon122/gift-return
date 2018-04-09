const mongoose = require('mongoose')
const Schema = require('../db/schema')

const Gift = mongoose.model('Gift', Schema.GiftSchema)

module.exports = Gift