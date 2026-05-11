const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Simple validation middleware
const validatePost = (req, res, next) => {
    const { title, content, author } = req.body;
    const errors = [];

    if (!title || title.length < 3) {
        errors.push('Title must be at least 3 characters');
    }

    if (!content || content.length < 10) {
        errors.push('Content must be at least 10 characters');
    }

    if (!author) {
        errors.push('Author is required');
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

// In-memory store for demo
let posts = [];
let nextId = 1;

// Apply validation to route
app.post('/api/posts', validatePost, (req, res) => {
    const { title, content, author } = req.body;

    const newPost = {
        id: nextId++,
        title,
        content,
        author,
        createdAt: new Date().toISOString()
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});

app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
