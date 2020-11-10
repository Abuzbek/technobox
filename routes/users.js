const express = require('express');
const router = express.Router();
const Product = require('../model/Product')
/* GET users listing. */
router.get('/', function(req, res, next) {
  Product.find({},(err,product)=>{
    if (err) {
      console.log(err);
    } else {
      res.render('catalog', {
        title: 'Catalog',
        product
      })
    }
  })
});
router.get('/uz', function(req, res, next) {
  Product.find({},(err,product)=>{
    if (err) {
      console.log(err);
    } else {
      res.render('catalogUz', {
        title: 'Catalog',
        product
      })
    }
  })
});

module.exports = router;
