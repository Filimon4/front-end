/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

const resolvePath = (p: string) => path.resolve(__dirname, p);

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd());

  const APP_PORT = `${env.VITE_PUBLIC_PORT}`

  return {
    plugins: [react()],
    server: {
      port: parseInt(APP_PORT) ?? 5173  
    },
    resolve: {
      alias: {
        '@mixins': resolvePath('src/shared/styles/mixins.module.scss'),
        '@variables': resolvePath('src/shared/styles/variables.module.scss'),
        '@icons': resolvePath('public/icons'),
        "@shared": resolvePath('src/shared'),
        "@widgets": resolvePath("src/widgets"),
        "@features": resolvePath("src/features"),
        "@entities": resolvePath("src/entities"),
        "@store": resolvePath("src/shared/store"),
        "@pages": resolvePath("src/pages"),
        "@public": resolvePath("public"),
      }
    },
  }
})

