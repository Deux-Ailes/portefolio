import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative paths so the site works under https://deux-ailes.github.io/portefolio/
  base: './',
  plugins: [vue(), tailwindcss()],
})
