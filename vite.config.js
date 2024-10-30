import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/',
    plugins: [react()],

    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },

})
// GsapScroll3DGrid/