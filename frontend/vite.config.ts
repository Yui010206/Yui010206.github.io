import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        blog: 'blog/index.html',
        blogZh: 'blog/zh/index.html',
      },
    },
  },
})
