import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Sakura'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      'sakura': path.resolve(__dirname, './packages'),
      'sakura-style': path.resolve(__dirname, './packages/theme-chalk/src'),
      'ele': path.resolve(__dirname, '../element/packages'),
      'ele-style': path.resolve(__dirname, '../element/packages/theme-chalk/src'),
    }
  },
  plugins: [vue()],
})
