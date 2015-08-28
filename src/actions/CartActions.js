var alt = require('../alt');
var request = require('superagent');
var config = require('../../config');

class CartActions {

    addToCart(product,id){
    	product['id'] = id;
        this.dispatch(product);
    }

    removeFromCart(productid){
        this.dispatch(productid);
    }
}

module.exports = alt.createActions(CartActions);