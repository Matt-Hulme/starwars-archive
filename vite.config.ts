import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [react(), viteCommonjs(), visualizer(), VitePWA()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});