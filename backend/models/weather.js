import React, { useState } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const getWeather = async () => {
    if (!city) {
      setError('Please enter a city');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5423/api/weather?city=${city}`);
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
        setError('');
      } else {
        setError(data.error || 'Unable to fetch weather data');
      }
    } catch (error) {
      setError('Error connecting to the server');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {error && <p>{error}</p>}

      {weather && (
        <div>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Description: {weather.description}</p>
          {weather.icon && <img src={`http:${weather.icon}`} alt="weather icon" />}
        </div>
      )}
    </div>
  );
};

export default Weather;
