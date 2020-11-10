const express = require('express');
const router = express.Router();
const Product = require('../model/Product')
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

  res.render('indexUz', {
    title: 'Catalog'
  })
});
router.get('/uz/catalog', function(req, res, next) {
  res.render('catalogUz', {
    title: 'Catalog'
  })
});

module.exports = router;