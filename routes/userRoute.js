const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Import the userController

// Define routes
router.post('/users', userController.addUser); // Add user
router.put('/users/:id', userController.updateUser); // Update user
router.delete('/users/:id', userController.deleteUser); // Delete user

module.exports = router;