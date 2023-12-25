import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({ include: [/\.vue$/, /\.md$/] }), Markdown()],
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./packages/styles/theme/theme.less";',
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      packages: path.resolve(__dirname, "./packages"),
    },
  },
  build:{
    outDir:"es",
    minify:false,
    rollupOptions:{
      external:['vue'],
      output:{
        globals:{vue:"Vue"}
      },
      dir:"dist"
    },
  },
  lib:{
    entry:"./src/main.ts",
    name:'luluUI',
    filename:"luluUI",
    formats:["es","umd","cjs"]
  }
});
