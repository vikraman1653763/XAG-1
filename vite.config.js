import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< HEAD
    // https: true, 
    proxy: {
      '/api': {
        // target: 'https://xagrotortek.in:8443',  
                // target: 'http://localhost:8080', 
// Target your production server
        // changeOrigin: true,
        // secure: false, 
=======
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
>>>>>>> c761e88e9f6229914a1f012bc5bffa4867e74579
      },
    },
  },
});
