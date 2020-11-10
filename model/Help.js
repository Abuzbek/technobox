const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Help = new Schema({
    name:String,
    number:String,
    help:String
})
module.exports = mongoose.model('help' , Help)