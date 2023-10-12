/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  assetsInclude: ['**/*.gltf'],
  build:{
    chunkSizeWarningLimit:1024,
    rollupOptions : {
      output : {
        manualChunks(id:any) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  base:'./',
  resolve : {
    alias : {
      '@' : resolve(__dirname,"./src"),
    },
    extensions:[".js", ".ts", ".tsx", ".jsx", ".d.ts"],
  },
  envDir:"env",
  test:{
    
  }
})
