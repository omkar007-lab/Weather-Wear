import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5125/api',  // Update this to match your backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
