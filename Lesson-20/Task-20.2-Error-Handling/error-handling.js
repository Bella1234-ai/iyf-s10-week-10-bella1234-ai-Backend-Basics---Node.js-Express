const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Custom error class
class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Route that throws error
app.get('/api/error-test', (req, res, next) => {
    try {
        throw new ApiError('Something went wrong', 500);
    } catch (error) {
        next(error);  // Pass to error handler
    }
});

// Async error wrapper
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Simulated async function
const fetchUsers = async () => {
    return [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
    ];
};

// Usage
app.get('/api/users', asyncHandler(async (req, res) => {
    const users = await fetchUsers();
    res.json(users);
}));

// Error handling middleware (must be last!)
app.use((err, req, res, next) => {
    console.error(err.stack);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        error: {
            message,
            status: statusCode
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
