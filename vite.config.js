import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Meu-Portf-lio/', // Isso é essencial para o GitHub Pages
  plugins: [react()],
})

