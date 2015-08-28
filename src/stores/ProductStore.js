var alt = require('../alt');
var ProductActions = require('../actions/ProductActions');

class ProductStore{

   constructor(){
     var self = this;
     this.bindListeners({
      updateProducts: ProductActions.UPDATE_PRODUCTS
     });  
     this.on('init',function(){
       self.products = {};
     })
   }

   updateProducts(products){
     this.products = products;
   }
}

module.exports = alt.createStore(ProductStore, 'ProductStore');