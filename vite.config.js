import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.webp'],
})





