var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var CartStore = require('../stores/CartStore');
 
var Cart = React.createClass({

   getInitialState: function(){
      return CartStore.getState();
   },
   
   componentDidMount: function(){
      CartStore.listen(this.onChange);
   },

   componentWillUnmount: function(){
      CartStore.unlisten(this.onChange);
   },

   onChange: function(state){
      this.setState(state);
   },

   render: function(){
      return (
          <div className={"flux-cart"}>
            <button type="button" className="view-cart" disabled={this.state.items.length > 0 ? "" : "disabled"}>View Cart ({this.state.quantity})</button>
          </div>
       );
   }

});

module.exports = Cart;