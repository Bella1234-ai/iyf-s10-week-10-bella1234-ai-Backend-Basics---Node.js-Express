const express = require('express');
const app = express();
const PORT = 3000;

// /search?q=hello&limit=10
app.get('/search', (req, res) => {
    const { q, limit = 10, page = 1 } = req.query;

    res.json({
        query: q,
        limit: parseInt(limit),
        page: parseInt(page)
    });
});

// /posts?category=tech&sort=newest
app.get('/posts', (req, res) => {
    const { category, sort = 'newest' } = req.query;

    res.json({
        message: 'Getting posts',
        filters: { category, sort }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
