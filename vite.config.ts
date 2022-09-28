import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import progress from 'vite-plugin-progress'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    progress(),
    viteCompression(),
  ],
  envDir: './env',
  css: {
    postcss: 'postcss.config.cjs',
  },
  build: {
    commonjsOptions: {
      ignoreTryCatch: false,
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
})
