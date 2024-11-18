const express = require('express');
const axios = require('axios');
const { successResponse, errorResponse } = require('../utils/responseFormatter');
const asyncHandler = require('../utils/apiHandler');

const router = express.Router();

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

/**
 * @route GET /api/weather?city={city}
 * @desc Fetch weather data for a city
 * @access Public
 */
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const { city } = req.query;

    // Check if city is provided
    if (!city) {
      return errorResponse(res, 'City is required', 400);
    }

    try {
      const { data } = await axios.get(BASE_URL, {
        params: { q: city, key: WEATHER_API_KEY },
      });

      // Check if data exists
      if (!data || !data.current) {
        return errorResponse(res, 'Weather data not found', 500);
      }

      const weatherData = {
        temperature: data.current.temp_c,
        humidity: data.current.humidity,
        description: data.current.condition.text,
        icon: data.current.condition.icon,
        location: data.location.name,
        region: data.location.region,
        country: data.location.country,
      };

      return successResponse(res, weatherData);
    } catch (error) {
      const apiError = error.response?.data?.error?.message || 'Weather API error';
      return errorResponse(res, apiError, error.response?.status || 500);
    }
  })
);

module.exports = router;
