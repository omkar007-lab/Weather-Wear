import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch('/api/weather?city=London'); // Proxy to backend
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data?.data) {
          setWeatherData(data.data);
        } else {
          throw new Error('Invalid data format from API');
        }
      } catch (err) {
        setError(`Error fetching weather data: ${err.message}`);
      } finally {
        setLoading(false); // Stop loading spinner
      }
    }
    fetchWeather();
  }, []);

  return (
    <div>
      <h1>Weather Data</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && (
        <div>
          <h2>Temperature: {weatherData.temperature}°C</h2>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Weather: {weatherData.description}</p>
        </div>
      )}
    </div>
  );
}

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);
