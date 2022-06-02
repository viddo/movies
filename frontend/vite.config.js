import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import environment from 'vite-plugin-environment'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
  },
  assetsInclude: ['src/assets/**/*'],
  plugins: [
    environment({
      MODE: 'dev'
    }),
    react({
      include: '**/*.{jsx,tsx}',
    }),
  ],
  server: {
    port: 80,
    strictPort: true,
    hmr: {
      clientPort: 443
    },
    host: '0.0.0.0',
    proxy: {
      '/rent': 'http://rentals:8080/rent',
      '/rentals': 'http://rentals:8080/rentals',
      '/catalog': 'http://catalog:8080'
    },
  }
});
