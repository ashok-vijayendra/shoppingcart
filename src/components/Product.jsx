var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;

var Product= React.createClass({ 
   action: function(e){
     this.props.action(this.props.product,this.props.id)
   },
   render: function(){ 
      return (
        <div className={"product-wrapper "+ (this.props.cardDetail ? "cart-detail" : "product-detail")}>
          <img src={'/images/' + this.props.product.image}/>
          <div className="product-detail-content">
            <h1 className="name">{this.props.product.name}</h1>
            <p className="description">{this.props.product.description}</p>
            <p className="quantity">Qty: {this.props.quantity}</p> 
            <p className="price">Price: ${this.props.product.price}</p>
            <button type="button" onClick={this.action} > {this.props.actionLabel} </button>
          </div>
          <div className="total"> { this.props.quantity  * this.props.product.price } </div>
        </div>
       );
   }
});

module.exports = Product;