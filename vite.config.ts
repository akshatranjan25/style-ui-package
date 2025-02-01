// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(), tailwindcss(),
    dts({
      insertTypesEntry: true,
    }),
    // postcss()
  ],
  build: {
    lib: {
      entry: 'lib/main.ts',
      name: 'react-loadscreen-ui',
      fileName: 'react-loadscreen-ui'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'reactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    }
  }
})