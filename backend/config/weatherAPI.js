const axios = require('axios'); // Axios is used to make HTTP requests
require('dotenv').config(); // To load environment variables like API keys

// Base URL for WeatherAPI (or your chosen weather service)
const WEATHER_API_URL = 'https://api.weatherapi.com/v1/current.json'; // WeatherAPI endpoint

// Function to get weather data from WeatherAPI
const getWeatherData = async (city) => {
  try {
    // Check if city parameter is provided
    if (!city) {
      throw new Error('City name is required');
    }

    // Retrieve your WeatherAPI API Key from .env file
    const apiKey = process.env.WEATHERAPI_KEY;
    if (!apiKey) {
      throw new Error('WeatherAPI key is missing in .env file');
    }

    // Make a GET request to the WeatherAPI with the city name and API key
    const response = await axios.get(WEATHER_API_URL, {
      params: {
        key: apiKey, // API Key for authentication
        q: city, // City name
        aqi: 'no', // Disable air quality data (optional, depending on your needs)
      },
    });

    // Return the weather data from API response
    return response.data;
  } catch (error) {
    // Handle error (e.g., network issues, invalid city, API limit exceeded)
    console.error('Error fetching weather data:', error.message);
    throw new Error('Failed to fetch weather data');
  }
};

// Example: Function to get weather data for a specific city
const getWeatherByCity = async (req, res) => {
  try {
    const { city } = req.query; // Assuming city is passed as a query parameter
    if (!city) {
      return res.status(400).json({ message: 'City is required' });
    }

    const weatherData = await getWeatherData(city);
    return res.status(200).json(weatherData); // Send the weather data back to the client
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getWeatherData, getWeatherByCity };
