var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var ProductStore = require('../stores/ProductStore');
var Product = require('./Product.jsx');
var CartActions = require('../actions/CartActions');

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

   addToCart: function(product){
     CartActions.addToCart(product); 
   },

   eachProduct: function(product,i){
        return (
              <Product key={product.id} product={product} action={this.addToCart} actionLabel="ADD To Cart"/> 
            );
    },

   render: function(){ 
      return (
            <div>
                {this.state.products.map(this.eachProduct)}
            </div>
       );
   }

});

module.exports = ProductList;