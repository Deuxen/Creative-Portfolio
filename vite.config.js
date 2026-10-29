import { resolve } from 'path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        software: resolve(__dirname, 'software.html'),
        audio: resolve(__dirname, 'audio.html'),
        video: resolve(__dirname, 'video.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
});