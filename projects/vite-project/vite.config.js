import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Permite acceso desde todas las interfaces de red
    port: 3000   // Asegúrate de que el puerto coincida con el del Dockerfile
  }
});