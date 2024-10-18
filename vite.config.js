import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    // https: true, 
    proxy: {
      '/api': {
        // target: 'https://xagrotortek.in:8443',  
                // target: 'http://localhost:8080', 
// Target your production server
        // changeOrigin: true,
        // secure: false, 
      },
    },
  },
});
