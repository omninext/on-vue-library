import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry:path.resolve(__dirname,'src/lib/main.js'),
      name:'OnVueLibrary',
      formats:['es' , 'cjs' , 'umd' , 'iife'],
      fileName:(format)=>`on-vite-library.${format}.js`
    },
    rollupOptions:{
      external:['vue','tailwind'],
      output:{
        globals:{
          vue:"Vue"
        }
      }
    }
  },
  plugins: [vue()]
})
