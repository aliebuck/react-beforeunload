import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react'],
    },
    sourcemap: true,
  },
});
