var React = require('react/addons');
var Route = require('react-router').Route;
var App = require('./components/App.jsx');
var ProductList = require('./components/ProductList.jsx');
var CartDetail = require('./components/CartDetail.jsx');

var routes = (
	<Route name='home' path='/' handler={App}>
	   <Route name="productList" path="/" handler={ProductList}/> 
	   <Route name="checkout" path="/checkout" handler={CartDetail}/>  
	</Route>
);

module.exports = routes;