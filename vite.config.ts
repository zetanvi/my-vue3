import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import { wrapperEnv } from './build/uilt'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { configHtmlPlugin } from './build/vite/plugin/html'
import { resolve } from 'path'

export default ({ command, mode }:ConfigEnv): UserConfig => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  const viteEnv = wrapperEnv(env)

  const isBuild = command === 'build'
  
  return {
    plugins: [vue(), WindiCSS(), configHtmlPlugin(viteEnv, isBuild)],
    resolve: {
      alias: {
        '@': resolve('src'),
        '@cp': resolve('src/components'),
        '@view': resolve('src/view'),
      }
    }
  }
}

