var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var ProductStore = require('../stores/ProductStore');
var Product = require('./Product');

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

   render: function(){
      var products = this.state.products.map(function(product){
        return (
                <Product key={product.id} product={product} />           
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