var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var CartStore = require('../stores/CartStore');
var Product = require('./Product.jsx');


var CartList = React.createClass({

   getInitialState: function(){
      return CartStore.getState();
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

   removeFromCart: function(e){
     CartStore.removeFromCart(this.props.product.id);
   },

   render: function(){
      var self = this, products = this.state.cartItems.map(function(itemId){
        return (
                <Product key={self.state.items[itemId].product.id} product={self.state.items[itemId].product} action={this.removeFromCart} actionLabel="Remove"/>           
            );
      });
      return (
            <div>
                {products}
            </div>
       );
   }

});

module.exports = CartList;