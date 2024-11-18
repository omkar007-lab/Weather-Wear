import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5125', // Backend server address (Make sure this is correct)
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
