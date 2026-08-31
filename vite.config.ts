import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const copy404Plugin = (): Plugin => ({
  name: 'copy-404-plugin',
  closeBundle() {
    const distDir = path.resolve(__dirname, 'dist')
    const indexPath = path.join(distDir, 'index.html')
    const notFoundPath = path.join(distDir, '404.html')
    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, notFoundPath)
    }
  },
})

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), copy404Plugin()],
  base: command === 'build' && process.env.GITHUB_ACTIONS === 'true'
    ? '/its-minu/'
    : '/',
}))
