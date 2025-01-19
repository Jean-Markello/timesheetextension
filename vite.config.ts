import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './electron/main.js',
        preload: './electron/preload.js',
        renderer: './index.html',
      },
    },
  },
});
