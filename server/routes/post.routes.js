const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

//get all posts
router.route('/posts').get(PostController.getPosts);

router.route('/posts/:id').get(PostController.getSinglePost);

router.route('/posts').post(PostCOntroller.addPost);

module.exports = router;
