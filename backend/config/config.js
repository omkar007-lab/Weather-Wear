require('dotenv').config(); // Load environment variables from .env

const config = {
  port: process.env.PORT || 5125, // Default port for server if not set in .env
  clientURL: process.env.CLIENT_URL || 'http://localhost:5180', // Default frontend URL
  weatherAPIKey: process.env.WEATHER_API_KEY, // Weather API key
  dbURI: process.env.DB_URI || 'mongodb://localhost:27017/weatherwear', // Default MongoDB URI
  jwtSecret: process.env.JWT_SECRET || 'your_default_jwt_secret', // JWT Secret for authentication
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || 'your_default_refresh_secret', // JWT Refresh Secret
};

module.exports = config; // Export the config object
