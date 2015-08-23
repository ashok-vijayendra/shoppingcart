var request = require('superagent');
var fs = require('fs');

exports.showAllPosts = function(req,res,next){
   var obj = JSON.parse(fs.readFileSync('./static/posts', 'utf8'));
   res.locals.data = {
       "PostStore" : {
           "posts" : obj
       }
   }
   next();
}