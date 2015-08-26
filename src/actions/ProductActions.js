var alt = require('../alt');
var request = require('superagent');
var config = require('../../config'); 

class ProductActions {
    loadAllProducts(cb){
        var self = this;
        NProgress.start();
        request.get(config.baseUrl+'/ajax/products',function(err,response){
            self.actions.updateProducts(response.body);
            setTimeout(function(){
                NProgress.done();
            },500);
            if(cb){
                cb();
            }
        });
    }

    updateProducts(products){
        this.dispatch(products);
    }
}

module.exports = alt.createActions(ProductActions);