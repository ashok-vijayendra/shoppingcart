var React = require('react/addons');
var Footer = React.createClass({
	render: function(){
	  return (
	  	<footer>
	       <ul className="outer-wrapper">
             <li> 
                Connect with us
                <ul>
                   <li> Facebook </li>
                   <li> Twitter </li>
                   <li> LinkedIn </li>
                </ul>
             </li>
             <li> 
                More
                <ul>
                   <li> Photos </li>
                   <li> Videos </li>
                   <li> Blogs </li>
                </ul>
             </li>
           </ul>
	    </footer>
	  );
	}
});

module.exports = Footer;