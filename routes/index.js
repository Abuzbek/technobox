const express = require('express');
const router = express.Router();
const Product = require('../model/Product')
const Help = require('../model/Help')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Product.find({},(err,product)=>{
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        title: 'Catalog',
        product
      })
    }
  }).limit(2)
  
});
router.get('/uz', function(req, res, next) {
  Product.find({},(err,product)=>{
    if (err) {
      console.log(err);
    } else {
      res.render('indexUz', {
        title: 'Catalog',
        product
      })
    }
  }).limit(2)
});
router.post('/', (req,res,next)=>{
  const proms = new Help(req.body)
  proms.save((err,data)=>{
    if (err) {
      console.log(err);
    } else {
      req.flash('info', `Qabul qilindi`)
      res.redirect('/')
    }
  })
  
})
module.exports = router;