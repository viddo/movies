import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import environment from 'vite-plugin-environment'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  plugins: [
    environment({
      MODE: process.env?.MODE ?? 'production'
    }),
    react({
      include: '**/*.{jsx,tsx}',
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
