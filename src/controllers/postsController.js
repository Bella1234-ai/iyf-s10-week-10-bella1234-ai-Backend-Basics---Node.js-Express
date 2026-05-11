const store = require('../data/store');

// GET all posts (with optional filtering and sorting)
const getAllPosts = (req, res) => {
    const { author, sort } = req.query;

    let result = [...store.posts];

    // Filter by author
    if (author) {
        result = result.filter(post =>
            post.author.toLowerCase().includes(author.toLowerCase())
        );
    }

    // Sort
    if (sort === 'newest') {
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sort === 'popular') {
        result.sort((a, b) => b.likes - a.likes);
    }

    res.json({
        success: true,
        count: result.length,
        data: result
    });
};

// GET single post by ID
const getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    const post = store.posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            success: false,
            error: 'Post not found'
        });
    }

    res.json({
        success: true,
        data: post
    });
};

// POST create new post
const createPost = (req, res) => {
    const { title, content, author } = req.body;

    const newPost = {
        id: store.nextPostId++,
        title,
        content,
        author,
        createdAt: new Date().toISOString(),
        updatedAt: null,
        likes: 0
    };

    store.posts.push(newPost);

    res.status(201).json({
        success: true,
        message: 'Post created successfully',
        data: newPost
    });
};

// PUT update post
const updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = store.posts.findIndex(p => p.id === id);

    if (postIndex === -1) {
        return res.status(404).json({
            success: false,
            error: 'Post not found'
        });
    }

    const { title, content } = req.body;

    store.posts[postIndex] = {
        ...store.posts[postIndex],
        title: title || store.posts[postIndex].title,
        content: content || store.posts[postIndex].content,
        updatedAt: new Date().toISOString()
    };

    res.json({
        success: true,
        message: 'Post updated successfully',
        data: store.posts[postIndex]
    });
};

// DELETE post
const deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    const postIndex = store.posts.findIndex(p => p.id === id);

    if (postIndex === -1) {
        return res.status(404).json({
            success: false,
            error: 'Post not found'
        });
    }

    const deletedPost = store.posts.splice(postIndex, 1)[0];

    res.json({
        success: true,
        message: 'Post deleted successfully',
        data: deletedPost
    });
};

// PATCH like a post
const likePost = (req, res) => {
    const id = parseInt(req.params.id);
    const post = store.posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            success: false,
            error: 'Post not found'
        });
    }

    post.likes++;

    res.json({
        success: true,
        message: 'Post liked successfully',
        data: post
    });
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    likePost
};
