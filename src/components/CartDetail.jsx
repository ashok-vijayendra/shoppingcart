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

   removeFromCart: function(product,productId){
     CartActions.removeFromCart(productId); 
   },

   render: function(){
      var self = this, grandtotal = 0, products = Object.keys(this.state.cartItems).map(function(productId){
        var product = self.state.products[productId]; grandtotal += self.state.cartItems[productId] * self.state.products[productId].price;
        return (
                <Product key={productId} product={self.state.products[productId]} id={productId} cardDetail={true} quantity={self.state.cartItems[productId]} action={self.removeFromCart} actionLabel="Remove"/>           
            );
      });
      return (
            <div> 
                <div className="cart-detail-heading"> Ordered Products <div className="total"> Total </div> </div>
                { ( products && products.length ) ? products :  <div className="product-wrapper"> Your Cart is Empty </div> }
                <div className="cart-detail-footer"> <strong> Grand Total </strong> <div className="total"> {grandtotal} </div>  </div>
            </div>
       );
   }

});

module.exports = CartList;