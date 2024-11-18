const { generateAccessToken, generateRefreshToken } = require('../utils/jwtUtils');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const config = require('../config/config'); // Centralized config

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const accessToken = generateAccessToken({ id: user._id, email: user.email });
    const refreshToken = generateRefreshToken({ id: user._id, email: user.email });

    // Set refresh token in a secure HTTP-only cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: config.env === 'production',
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.json({ accessToken });
  } catch (error) {
    console.error('Login error:', error.message);
    return res.status(500).json({ message: 'An error occurred while logging in.' });
  }
};

// Refresh Access Token
const refreshAccessToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token missing.' });
  }

  try {
    const decoded = jwt.verify(refreshToken, config.jwtRefreshSecret);
    const newAccessToken = generateAccessToken({ id: decoded.id, email: decoded.email });
    return res.json({ accessToken: newAccessToken });
  } catch (error) {
    console.error('Refresh token error:', error.message);
    return res.status(403).json({ message: 'Invalid refresh token.' });
  }
};

// Logout User
const logoutUser = (req, res) => {
  res.clearCookie('refreshToken'); // Clear the cookie
  res.status(200).json({ message: 'Logged out successfully.' });
};

module.exports = { loginUser, refreshAccessToken, logoutUser };

