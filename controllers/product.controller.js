var request = require('superagent');
var fs = require('fs');
var config = require('../config');

function loadProducts(){
  return (JSON.parse(fs.readFileSync('./static/products.json', 'utf8')));
}

exports.allProducts = function(req,res,next){
   res.locals.data = {
       "ProductStore" : {
           "products" :  loadProducts()
       }
   }
   next();
}

exports.loadProductsViaAjax = function(req,res){
    return res.json(loadProducts());
}