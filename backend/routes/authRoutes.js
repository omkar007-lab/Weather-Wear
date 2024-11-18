const express = require('express');
const { loginUser, refreshAccessToken, logoutUser } = require('../controllers/authController');
const { verifyAccessToken, verifyRefreshToken } = require('../middleware/authMiddleware'); // Import auth middleware
const router = express.Router();

// Login Route - No authentication needed
router.post('/login', loginUser);

// Refresh Access Token - Protected by refresh token verification
router.post('/refresh', verifyRefreshToken, refreshAccessToken); // Ensure the refresh token is valid before proceeding

// Logout Route - No authentication needed but clears cookies
router.post('/logout', logoutUser);

// Example of a protected route using access token (for demonstration)
router.get('/protected', verifyAccessToken, (req, res) => {
  res.status(200).json({ message: 'You are authorized and have access!', user: req.user });
});

module.exports = router;
