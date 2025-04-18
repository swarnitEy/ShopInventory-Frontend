import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
        port: 3000, // Force Vite back to 3000
        proxy: {
          '/api': {
            target: 'http://localhost:5000',
            changeOrigin: true,
          }
        }
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  };
});