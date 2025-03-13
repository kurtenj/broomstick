import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// Image optimization configuration
const imageOptimizerConfig = {
  png: {
    quality: 80,
  },
  jpg: {
    quality: 80,
  },
  jpeg: {
    quality: 80,
  },
  webp: {
    quality: 80,
  },
  avif: {
    quality: 80,
  },
  gif: {
    // GIF optimization options
  },
  svg: {
    // SVG optimization options
    multipass: true,
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer(imageOptimizerConfig),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'firebase-vendor': ['firebase/app', 'firebase/firestore', 'firebase/storage'],
          'ui-components': [
            '@radix-ui/react-checkbox',
            '@radix-ui/react-dialog',
            '@radix-ui/react-label',
            '@radix-ui/react-slot',
            'class-variance-authority',
            'clsx',
            'tailwind-merge'
          ]
        }
      }
    }
  }
})
