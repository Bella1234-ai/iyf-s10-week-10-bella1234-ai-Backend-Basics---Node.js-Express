const express = require('express');
const app = express();
const PORT = 3000;

// Dynamic route with parameter
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Getting user ${userId}` });
});

// Multiple parameters
app.get('/posts/:postId/comments/:commentId', (req, res) => {
    const { postId, commentId } = req.params;
    res.json({ postId, commentId });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
