const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Help = new Schema({
    name:String,
    img:String
})
module.exports = mongoose.model('carousel' , Help)