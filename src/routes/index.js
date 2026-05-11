const express = require('express');
const router = express.Router();

const postsRoutes = require('./posts');
const usersRoutes = require('./users');

// API routes
router.use('/posts', postsRoutes);
router.use('/users', usersRoutes);

// Health check
router.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        service: 'CommunityHub API'
    });
});

module.exports = router;
