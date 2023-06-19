import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import sass from 'sass';
import path from 'path';
import postcss from 'postcss';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  server: {
    host: 'localhost',
    port: 3000,
  },
  plugins: [svgr(),reactRefresh()],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       implementation: sass,
  //     },
  //     postcss: {
  //       plugins: [postcss],
  //     },
  //   },
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src/app/core'),
      '@feature': path.resolve(__dirname, 'src/app/features'),
      '@shared': path.resolve(__dirname, 'src/app/shared'),
      '@stylesheet': path.resolve(__dirname, 'src/stylesheet'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
});
