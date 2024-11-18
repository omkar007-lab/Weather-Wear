import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch weather data
  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.get(`/api/weather?city=${city}`);
      setWeather(response.data.data);  // Assuming your backend returns { data: weatherData }
    } catch (err) {
      setError('Error fetching weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>

      {/* Input for city */}
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      {/* Button to fetch weather */}
      <button onClick={fetchWeather} disabled={loading}>
        {loading ? 'Loading...' : 'Get Weather'}
      </button>

      {/* Error message */}
      {error && <p className="error">{error}</p>}

      {/* Display weather details */}
      {weather && (
        <div className="weather-info">
          <h2>{weather.location}</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Condition: {weather.description}</p>
          <img src={`https:${weather.icon}`} alt="Weather Icon" />
          <p>Humidity: {weather.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
