// backend/routes/userRoutes.js

const express = require('express');
const { registerUser } = require('../controllers/userController');
const router = express.Router();

// POST route for user registration
router.post('/register', registerUser);

module.exports = router;
