var React = require('react/addons');
var ProductActions = require('../actions/ProductActions');
var Header = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    loadAllPosts: function(e){
        e.preventDefault();
        var self = this;
        ProductActions.loadAllProducts(function(){
        	self.context.router.transitionTo('productList');
        });
    },
  	render: function(){
  	  return (
  	  	<header className="header" onClick={this.loadAllPosts}> 
              <h1>
                <a href="http://localhost:3010"> 
                  <img src="/images/React.js_logo.png" alt="Shopping Cart" className="company-logo"/>
                </a>
              </h1>
              <nav>
                <ul>
                  <li>
                     <a href="/aboutus"> About Us</a>
                  </li>
                  <li>
                     <a href="/contactus"> Contact Us</a>
                  </li>
                  <li>
                     <a href="/careers"> Careers</a>
                  </li>
                </ul> 
              </nav>  
  	    </header>
  	  );
  	}
});

module.exports = Header;