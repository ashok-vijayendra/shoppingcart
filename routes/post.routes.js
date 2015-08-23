var express = require('express');
var router = express.Router();
var PostController = require('../controllers/post.controller')

/* GET users listing. */
router.get('/', PostController.showAllPosts);

module.exports = router;
