import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  publicDir: './src/public',
  plugins: [
    react({
      include: '**/*.{jsx,tsx}'
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 80,
    strictPort: true,
    hmr: {
      clientPort: 443
    },
    proxy: {
      '/rent': 'http://rentals:8080/rent',
      '/rentals': 'http://rentals:8080/rentals',
      '/catalog': 'http://catalog:8080'
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 80,
  }
});
