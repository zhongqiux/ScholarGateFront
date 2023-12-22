/// <reference types="vitest" />
import { defineConfig,loadEnv } from 'vite'
// @ts-ignore
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import path from 'path'

// https://vitejs.dev/config/
export default({ mode }) => defineConfig({
  plugins: [vue()],
  assetsInclude: ['**/*.gltf'],
  build:{
    outDir:'docs',
    chunkSizeWarningLimit:1024,
    rollupOptions : {
      output : {
        manualChunks(id:any) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      },
      input: {
          index: path.resolve(__dirname, 'index.html'),
          404: path.resolve(__dirname, '404.html'),
      },
    }
  },
  envDir:"env",
  base:'/ScholarGateFront',
  resolve : {
    alias : {
      '@' : resolve(__dirname,"./src"),
    },
    extensions:[".js", ".ts", ".tsx", ".jsx", ".d.ts"],
  },
  server:{
    proxy: {
      '/api': { // 配置需要代理的路径 --> 这里的意思是代理http://localhost:80/api/后的所有路由
        target: 'http://120.46.148.251:8080', // 目标地址 --> 服务器地址
        changeOrigin: true, // 允许跨域
        ws: true,  // 允许websocket代理
		    // 重写路径 --> 作用与vue配置pathRewrite作用相同
        rewrite: (path) => path.replace(/^\/api/, "")
      }
     },
  },
  test:{
    
  }
})
