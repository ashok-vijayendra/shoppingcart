var request = require('superagent');
var fs = require('fs');
var config = require('../config');

var _products = (JSON.parse(fs.readFileSync('./static/products.json', 'utf8')));

function getCartStore(req,res){
  var cookieProducts = {},cartItems = {}, cookieProducts = {}, quantity = 0;
  if(req.cookies.cartItems){
    cartItems = JSON.parse(req.cookies.cartItems);
    Object.keys(JSON.parse(req.cookies.cartItems))
         .forEach(
         	function(productId){ quantity+=cartItems[productId]; cookieProducts[productId] = _products[productId]});
  } 

  return {
       "CartStore" : {
       	   "cartItems": cartItems,
           "products" : cookieProducts,
           "quantity" : quantity
       }
  }
}

module.exports = {

	allProducts: function(req,res,next){ 
	   res.locals.data = getCartStore(req);
	   res.locals.data["ProductStore"] = { "products" :  _products }
	   next();
	},

	loadProductsViaAjax: function(req,res){
	    return res.json(_products);
	},

	checkout: function(req,res,next){
	   res.locals.data = getCartStore(req);
	   next();
	}
}

