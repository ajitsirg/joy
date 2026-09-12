import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'

const resortMediaRedirect: Plugin = {
  name: 'joyclub-local-resort-media',
  configureServer(server) {
    server.middlewares.use('/resort-media', (request, response) => {
      response.writeHead(302, {
        Location: `/media${request.url ?? '/'}`,
      })
      response.end()
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    resortMediaRedirect,
    react(),
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:18001',
        changeOrigin: true,
      },
      '/account': {
        target: 'http://127.0.0.1:18002',
        changeOrigin: true,
      },
    },
    watch: {
      ignored: ['**/public/media/**'],
    },
  },
})
