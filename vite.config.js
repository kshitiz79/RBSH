import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // Import the SVG plugin

// Vite configuration
export default defineConfig({
  plugins: [react(), svgr()], // Add svgr plugin to the plugins array
  server: {
    host: '0.0.0.0', // Allows access from any IP address on your local network
    port: 5173,      // Optional: Change the port if needed
  },
});
