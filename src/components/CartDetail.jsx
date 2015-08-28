var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var CartStore = require('../stores/CartStore');
var Product = require('./Product.jsx');
var CartActions = require('../actions/CartActions');


var CartList = React.createClass({

   getInitialState: function(){
      return CartStore.getState()
   },

   componentDidMount: function(){
      CartStore.listen(this.onCartChange); 
   },

   componentWillUnmount: function(){
      CartStore.unlisten(this.onCartChange);
   },

   onCartChange: function(state){
      this.setState(state);
   },

   removeFromCart: function(product){
     CartActions.removeFromCart(product.id); 
   },

   render: function(){
      var self = this, products = Object.keys(this.state.cartItems).map(function(productId){
        var product = self.state.products[productId];
        return (
                <Product key={productId} product={self.state.products[productId]} id={productId} cardDetail={true} action={self.removeFromCart} actionLabel="Remove"/>           
            );
      });
      return (
            <div>
                { ( products && products.length ) ? products : "Your Cart is Empty"}
            </div>
       );
   }

});

module.exports = CartList;