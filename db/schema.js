const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GiftSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    gift_giver: String
})
const StoreSchema = new Schema({
    name: String,
    address: String,
    gifts: [GiftSchema]
})
const UserSchema = new Schema({
    username: String,
    text: String,
    first_name: String,
    last_name: String,
    photo_url: String,
    stores: [StoreSchema]
}) 

module.exports = {
    UserSchema,
    StoreSchema,
    GiftSchema
}