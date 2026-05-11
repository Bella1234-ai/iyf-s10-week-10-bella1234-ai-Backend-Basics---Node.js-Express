const store = require('../data/store');

// GET all users
const getAllUsers = (req, res) => {
    res.json({
        success: true,
        count: store.users.length,
        data: store.users
    });
};

// GET single user by ID
const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = store.users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            success: false,
            error: 'User not found'
        });
    }

    res.json({
        success: true,
        data: user
    });
};

// POST create new user
const createUser = (req, res) => {
    const { name, email, username } = req.body;

    // Check if email already exists
    const existingUser = store.users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({
            success: false,
            error: 'Email already in use'
        });
    }

    const newUser = {
        id: store.nextUserId++,
        name,
        email,
        username,
        createdAt: new Date().toISOString()
    };

    store.users.push(newUser);

    res.status(201).json({
        success: true,
        message: 'User created successfully',
        data: newUser
    });
};

// PUT update user
const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = store.users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({
            success: false,
            error: 'User not found'
        });
    }

    const { name, email, username } = req.body;

    store.users[userIndex] = {
        ...store.users[userIndex],
        name: name || store.users[userIndex].name,
        email: email || store.users[userIndex].email,
        username: username || store.users[userIndex].username
    };

    res.json({
        success: true,
        message: 'User updated successfully',
        data: store.users[userIndex]
    });
};

// DELETE user
const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = store.users.findIndex(u => u.id === id);

    if (userIndex === -1) {
        return res.status(404).json({
            success: false,
            error: 'User not found'
        });
    }

    const deletedUser = store.users.splice(userIndex, 1)[0];

    res.json({
        success: true,
        message: 'User deleted successfully',
        data: deletedUser
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
