var React = require('react/addons');
var Route = require('react-router').Route;
var App = require('./components/App.jsx');
var ProductList = require('./components/ProductList.jsx');
var Cart = require('./components/Cart.jsx');
//var CheckoutView = require('./components/CheckoutView.jsx');
//<Route name="checkoutView" path="/checkout" handler={CheckoutView}/>
var routes = (
	<Route name='home' path='/' handler={App}>
	   <Route name="productList" path="/" handler={ProductList}/> 
	   <Route name="checkout" path="/checkout" handler={Cart}/> 
	</Route>
);

module.exports = routes;