import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/usgs-earthquake-visual/',
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
  envPrefix: 'REACT_APP_',
})
