var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');
var ProductList = require('./ProductList.jsx');


var App = React.createClass({
	render: function(){
		return (
            <div className="body-container">
              <Header />
              <RouteHandler />
              <Footer />
            </div>
			);
	}
})

module.exports = App;