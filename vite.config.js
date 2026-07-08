import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        imprnt: resolve(__dirname, 'imprnt.html'),
        menupage: resolve(__dirname, 'menupage.html'),
        mainpage: resolve(__dirname, 'main.html'),
      },
    },
  },
})