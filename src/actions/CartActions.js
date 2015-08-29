var alt = require('../alt');

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