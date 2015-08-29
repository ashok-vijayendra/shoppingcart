var express = require('express');
var router = express.Router();
var PostController = require('../controllers/product.controller')

//Define routes
router.route('/').get(PostController.allProducts);
router.route('/ajax/products').get(PostController.loadProductsViaAjax);
router.route('/checkout').get(PostController.checkout);

module.exports = router;
