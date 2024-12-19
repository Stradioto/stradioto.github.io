import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  plugins: [preact()],
  base: './', // This ensures assets are loaded correctly
  build: {
    outDir: 'dist', // Specify the build output directory
    assetsDir: 'assets', // Where to place assets
    sourcemap: false, // Disable sourcemaps in production
  },
  css: {
    postcss: './postcss.config.js',
  },
})

