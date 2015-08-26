var alt = require('../alt');
var request = require('superagent');
var config = require('../../config');

class CartActions {
    addtoCart(product){
        this.dispatch(product);
    }

    removeFromCart(productid){
        this.dispatch(productid);
    }
}

module.exports = alt.createActions(ProductActions);