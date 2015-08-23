var React = require('react/addons');
var Route = require('react-router').Route;

//var PostListView = require('./components/SinglePostView.jsx');
var App = require('./components/App.jsx');
var PostListView = require('./components/PostListView.jsx');

var routes = (
	<Route name='home' path='/' handler={App}>
	   <Route name="postListView" path="/" handler={PostListView}/>
	</Route>
	);

module.exports = routes;