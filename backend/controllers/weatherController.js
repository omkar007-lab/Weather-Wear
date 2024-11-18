// controllers/weatherController.js
const { successResponse, errorResponse } = require('../utils/responseFormatter');
const WeatherService = require('../services/weatherService'); // hypothetical service to fetch weather data

// Example of a controller method that handles the weather data
const getWeatherData = async (req, res) => {
  try {
    const weatherData = await WeatherService.getWeather(req.query.city);  // Assuming service fetches weather
    if (weatherData) {
      return successResponse(res, weatherData);  // Send success response
    } else {
      return errorResponse(res, 'Weather data not found', 404);  // Send error response if data not found
    }
  } catch (error) {
    return errorResponse(res, 'An error occurred while fetching weather data');
  }
};

module.exports = { getWeatherData };
