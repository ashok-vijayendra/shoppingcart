var alt = require('../alt');
var CartActions = require('../actions/CartActions');
var Cookie = require('../utils/Cookie');


class CartStore{
   constructor(){
     var self = this;
     this.bindListeners({
      addToCart: CartActions.ADD_TO_CART
     });  
     this.on('init',function(){
        self.cartItems = {};
        self.quantity = Object.keys(self.cartItems).length
     })
   }

   addToCart(product){
     if(this.cartItems[product.id]) {
        this.cartItems[product.id]+=1;
     } else {
        this.cartItems[product.id] = 1;
     }
     Cookie.createCookie('cartItems',JSON.stringify(this.cartItems));
     this.quantity+=1;
   }
}

module.exports = alt.createStore(CartStore, 'CartStore');