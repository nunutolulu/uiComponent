import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ include: [/\.vue$/, /\.md$/] }),Markdown()],
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./packages/styles/theme/theme.less";',
      },
    },
  },

})
