var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var ProductStore = require('../stores/ProductStore');
var Product = require('./Product.jsx');


var CartList = React.createClass({

   getInitialState: function(){
      return {cart: CartStore.getState(),products: ProductStore.getState().map(function(product){ {product.id: product}})};
   },

   componentDidMount: function(){
      CartStore.listen(this.onCartChange);
      ProductStore.listen(this.onCartChange);
   },

   componentWillUnmount: function(){
      CartStore.unlisten(this.onCartChange);
      ProductStore.unlisten(this.onProductChange);
   },

   onCartChange: function(state){
      var currentState = this.state;
      currentState.cart = state;
      this.setState(currentState);
   },

   onproductChange: function(state){
      var currentState = this.state;
      currentState.products = state.map(function(product){ });
      this.setState(currentState);      
   },

   removeFromCart: function(e){
     CartStore.removeFromCart(this.props.product.id);
   },

   render: function(){
      var products = this.state.cartItems.map(function(productId){
        return (
                <Product key={product.id} product={product} action={this.removeFromCart} actionLabel="Remove"/>           
            );
      });
      return (
            <div>
                {products}
            </div>
       );
   }

});

module.exports = ProductList;