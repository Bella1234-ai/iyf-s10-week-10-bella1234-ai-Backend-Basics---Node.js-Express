const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { validateUser } = require('../middleware/validate');

// GET /api/users - Get all users
router.get('/', usersController.getAllUsers);

// GET /api/users/:id - Get single user
router.get('/:id', usersController.getUserById);

// POST /api/users - Create new user
router.post('/', validateUser, usersController.createUser);

// PUT /api/users/:id - Update user
router.put('/:id', usersController.updateUser);

// DELETE /api/users/:id - Delete user
router.delete('/:id', usersController.deleteUser);

module.exports = router;
