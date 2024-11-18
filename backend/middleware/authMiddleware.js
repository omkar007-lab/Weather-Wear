const jwt = require('jsonwebtoken');
const config = require('../config/config'); // Centralized config

// Middleware to verify the access token
const verifyAccessToken = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // Get the token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Access token is missing.' });
  }

  try {
    // Verify token using the secret
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded; // Attach decoded user info to the request object
    next(); // Move to the next middleware or route handler
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired access token.' });
  }
};

// Middleware to verify the refresh token
const verifyRefreshToken = (req, res, next) => {
  const refreshToken = req.cookies.refreshToken; // Get the refresh token from cookies

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token is missing.' });
  }

  try {
    const decoded = jwt.verify(refreshToken, config.jwtRefreshSecret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired refresh token.' });
  }
};

module.exports = { verifyAccessToken, verifyRefreshToken };
