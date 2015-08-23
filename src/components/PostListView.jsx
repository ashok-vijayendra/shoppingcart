var React = require('react/addons');
var RouteHandler = require('react-router').RouteHandler;
var PostStore = require('../stores/PostStore');

var PostListView = React.createClass({
   
   contextTypes: {
      router: React.PropTypes.func
   },

   getInitialState: function(){
      return PostStore.getState();
   },

   componentDidMount: function(){
      PostStore.listen(this.onChange);
   },

   componentWillUnmount: function(){
      PostStore.unlisten(this.onChange);
   },

   onChange: function(state){
      this.setState(state);
   },

   render: function(){
      var posts = this.state.posts.map(function(post){
        return (
                <a key={post.id} href="#" className="single-post">
                    <div className="post-title">{post.title}</div>
                    <div className="author-details"><img src={post.author.photo} className="author-photo"/><span className="author-name">{post.author.name}</span></div>
                </a>            
            );
      });
      return (
            <div>
                {posts}
            </div>
       );
   }

});

module.exports = PostListView;