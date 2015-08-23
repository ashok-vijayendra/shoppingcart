var express = require('express');
var router = express.Router();
var PostController = require('../controllers/post.controller')
console.log('HELLO');
/* GET users listing. */
router.route('/').get(PostController.showAllPosts);

module.exports = router;
