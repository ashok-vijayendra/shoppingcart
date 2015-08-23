var alt = require('../alt');
var request = require('superagent');

class PostActions {
   updatePosts(posts){
     this.dispatch(posts);
   }

   updateCurrentPost(post){
     this.dispatch(post);
   }
}

module.exports = alt.createActions(PostActions);