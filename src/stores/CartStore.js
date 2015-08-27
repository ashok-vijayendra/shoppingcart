var alt = require('../alt');
var CartActions = require('../actions/CartActions');

class CartStore{

   constructor(){
     var self = this;
     this.bindListeners({
      addToCart: CartActions.ADD_TO_CART
     });  
     this.on('init',function(){
       self.cartItems = [];
       self.quantity = 0;
     })
   }

   addToCart(product){
     if(this.cartItems[product.id]) {
        this.items[product.id] = this.items[product.id] + 1;
     } else {
        this.cartItems.push(product.id);
     }
     this.quantity = this.quantity + 1;
   }

}

module.exports = alt.createStore(CartStore, 'CartStore');