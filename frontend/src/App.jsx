import React, { useState } from 'react';
import WeatherApp from './WeatherApp';
import Login from './Login';
import Register from './Register';
import './index.css'; // Global styles

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Weather Wear App</h1>
        {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <div>
            <button onClick={() => setIsLoginMode(true)}>Login</button>
            <button onClick={() => setIsLoginMode(false)}>Register</button>
          </div>
        )}
      </header>

      <main>
        {loading ? (
          <p>Loading...</p>
        ) : isAuthenticated ? (
          <WeatherApp />
        ) : isLoginMode ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Register onRegister={handleRegister} />
        )}
      </main>

      <footer>
        <p>&copy; 2024 Weather Wear App</p>
      </footer>
    </div>
  );
};

export default App;
