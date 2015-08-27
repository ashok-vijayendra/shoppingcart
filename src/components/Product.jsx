var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var CartActions = require('../actions/CartActions');
var Product= React.createClass({ 
   action: function(e){
     this.props.action(this.props.product)
   },
   render: function(){ 
      var desc = ( this.props.cardDetail ) ? 
                 <p className="short-description">{this.props.product.shortdescription}</p> :
                 <p className="description">{this.props.product.description}</p> ;
      return (
        <div className="flux-product">
          <img src={'/images/' + this.props.product.image}/>
          <div className="flux-product-detail">
            <h1 className="name">{this.props.product.name}</h1>
            {desc}
            <p className="description">{this.props.product.description}</p>
            <p className="price">Price: ${this.props.product.price}</p>
            <button type="button" onClick={this.action} > {this.props.actionLabel} </button>
          </div>
        </div>
       );
   }
});

module.exports = Product;