import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    wasm(),
    topLevelAwait()
  ],
  worker: {
    // Not needed with vite-plugin-top-level-await >= 1.3.0
    // format: "es",
    plugins: () => [
      wasm(),
      topLevelAwait()
    ]
  },
  resolve: {
    alias: [
      {
        find: '@workers',
        replacement: path.resolve(__dirname, './src/workers')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components')
      },
      {
        find: '@wasm',
        replacement: path.resolve(__dirname, './src/wasm')
      },
      {
        find: '@app',
        replacement: path.resolve(__dirname, './src/app')
      }
    ]
  }
})
