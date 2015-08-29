var React = require('react/addons');
var Footer = React.createClass({
	render: function(){
	  return (
	  	<footer>
	       <ul className="outer-wrapper">
             <li> 
                <div className="footer-heading"> <strong> Connect with us </strong></div>
                <ul>
                   <li> <a href="#"> Facebook </a> </li>
                   <li> <a href="#"> Twitter </a> </li>
                   <li> <a href="#"> LinkedIn </a> </li>
                </ul>
             </li>
             <li> 
                <div className="footer-heading"> <strong> More... </strong></div>
                <ul>
                   <li> <a href="#"> Photos </a> </li>
                   <li> <a href="#"> Videos</a> </li>
                   <li> <a href="#"> Blogs</a> </li> 
                </ul>
             </li>
           </ul>
	    </footer>
	  );
	}
});

module.exports = Footer;