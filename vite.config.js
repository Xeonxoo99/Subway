// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss()
//   ],
//   resolve: {
//     alias: {
//       '@assets': path.resolve(__dirname, 'src/assets'),
//     },
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

// __dirname 대체
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  logLevel: 'info',
});
