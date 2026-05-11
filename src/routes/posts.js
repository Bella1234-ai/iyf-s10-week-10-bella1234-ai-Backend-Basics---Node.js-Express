const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const { validatePost } = require('../middleware/validate');

// GET /api/posts - Get all posts
router.get('/', postsController.getAllPosts);

// GET /api/posts/:id - Get single post
router.get('/:id', postsController.getPostById);

// POST /api/posts - Create new post
router.post('/', validatePost, postsController.createPost);

// PUT /api/posts/:id - Update post
router.put('/:id', postsController.updatePost);

// DELETE /api/posts/:id - Delete post
router.delete('/:id', postsController.deletePost);

// PATCH /api/posts/:id/like - Like a post
router.patch('/:id/like', postsController.likePost);

module.exports = router;
