const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Product  = Schema({
  img: String,
  name:String,
  type: String,
  square: String,
  Power: String,
  display: String,
  curtains: String,
  coverings: String,
  remote : String,
  refrigerantType: String,
  Blowing: String,
  capacityOffered: String,
  nameUz:String,
  typeUz: String,
  squareUz: String,
  PowerUz: String,
  displayUz: String,
  curtainsUz: String,
  coveringsUz: String,
  remoteUz : String,
  refrigerantTypeUz: String,
  BlowingUz: String,
  capacityOfferedUz: String,
})
module.exports = mongoose.model('product', Product)