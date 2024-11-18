import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';  // Optional CSS file for styling

const root = createRoot(document.getElementById('root'));  // Get root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
