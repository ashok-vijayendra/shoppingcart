var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;

var ProductList = React.createClass({
   render: function(){
      return (
        <div className="flux-product">
          <img src={'/images/' + this.props.product.image}/>
          <div className="flux-product-detail">
            <h1 className="name">{this.props.product.name}</h1>
            <p className="description">{this.props.product.description}</p>
            <p className="price">Price: ${this.props.product.price}</p>
            <button type="button" > Add to Cart </button>
          </div>
        </div>
       );
   }
});

module.exports = ProductList;