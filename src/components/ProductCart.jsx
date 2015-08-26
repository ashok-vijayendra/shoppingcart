var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var ProductList = require('./ProductList.jsx');
var Cart = require('./Cart.jsx');

var ProductCart = React.createClass({
   render: function(){
      return (
           <ProductList />
           <Cart />
       );
   }
});

module.exports = ProductCart;