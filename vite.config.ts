// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    react(), tailwindcss(),
    dts({
      insertTypesEntry: true,
    }),
    tsconfigPaths(),
    
    // postcss()
  ],
  build: {
    lib: {
      entry: 'lib/main.ts',
      name: 'style-ui-package',
      fileName: 'style-ui-package'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/tsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'reactDOM',
          'react/tsx-runtime': 'react/tsx-runtime'
        }
      }
    }
  }
})