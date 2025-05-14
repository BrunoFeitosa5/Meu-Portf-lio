import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // Caso queira usar '/' para Vercel, ou '/Meu-Portf-lio/' para GitHub Pages
  plugins: [react()],
});
