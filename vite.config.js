import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    devSourcemap: true,  // Pour activer le sourcemap si tu veux quand même déboguer
  },
  resolve: {
    alias: {
      '@': '/src',  // Alias pour src
    },
  },
})
