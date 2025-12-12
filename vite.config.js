import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: set BASE_PATH to '/<repo-name>/' when building.
// Example:
//   BASE_PATH=/tapias-hookah/ npm run build
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: { port: 5173, host: true },
})
