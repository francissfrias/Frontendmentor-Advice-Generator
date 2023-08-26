import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), svgr()],

    base: '/',
  };

  if (command !== 'serve') {
    config.base = '/Frontendmentor-Advice-Generator/';
  }

  return config;
});
