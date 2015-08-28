var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var ProductStore = require('../stores/ProductStore');
var Product = require('./Product.jsx');
var CartActions = require('../actions/CartActions');
var Cart = require('./Cart.jsx');

var ProductList = React.createClass({

   getInitialState: function(){
      return ProductStore.getState();
   },
   
   componentDidMount: function(){
      ProductStore.listen(this.onChange);
   },

   componentWillUnmount: function(){
      ProductStore.unlisten(this.onChange);
   },

   onChange: function(state){
      this.setState(state);
   },

   addToCart: function(product,productId){
     CartActions.addToCart(product,productId); 
   },

   eachProduct: function(productId){
        var product = this.state.products[productId];
        return (
              <Product key={productId} product={product} id={productId} action={this.addToCart} actionLabel="ADD To Cart"/> 
            );
    },

   render: function(){ 
      return (
            <div className="product-list-wrapper">
                {Object.keys(this.state.products).map(this.eachProduct)}
                <Cart />
            </div>
       );
   }

});

module.exports = ProductList;