var alt = require('../alt');
var CartActions = require('../actions/CartActions');
var Cookie = require('../utils/Cookie');
var assign = require('object-assign');

class CartStore{
   constructor(){
     var self = this;
     this.bindListeners({
      addToCart: CartActions.ADD_TO_CART
     });  
     this.on('init',function(){
        self.cartItems = {};
        self.products = {}
        self.quantity = Object.keys(self.cartItems).length
     })
   }

   addToCart(product){
     if(this.cartItems[product.id]) {
        this.cartItems[product.id]+=1;

     } else {
        this.cartItems[product.id] = 1;
     }
     this.products[product.id] = assign({},product)
     this.quantity+=1;
     Cookie.createCookie('cartItems',JSON.stringify(this.cartItems));
   }

}

module.exports = alt.createStore(CartStore, 'CartStore');