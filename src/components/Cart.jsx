var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var CartStore = require('../stores/CartStore');
 
var Cart = React.createClass({

   contextTypes: {
        router: React.PropTypes.func
   },

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

   checkOut: function(e){
        e.preventDefault();
        this.context.router.transitionTo('/viewcart');
   },

   render: function(){
      return (
          <div className={"flux-cart"}>
            <button type="button" className="view-cart" disabled={(this.state.quantity > 0) ? "" : "disabled"} onClick={this.checkOut} > Cart ({this.state.quantity})</button>
          </div>
       );
   }

});

module.exports = Cart;