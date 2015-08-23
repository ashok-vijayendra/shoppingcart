var request = require('superagent');
var fs = require('fs');
   console.log('OBJECT 111');

exports.showAllPosts = function(req,res,next){
   var obj = JSON.parse(fs.readFileSync('./static/posts.json', 'utf8'));
   console.log('OBJECT');
   console.log(obj);
   res.locals.data = {
       "PostStore" : {
           "posts" : obj
       }
   }
   next();
}