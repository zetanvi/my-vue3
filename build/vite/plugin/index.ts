import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { configHtmlPlugin } from './html'

export function createVitePlugin(env:ViteEnv, is_build:boolean) {
  const vite_plugins:(Plugin|Plugin[])[] = [vue()]
  // windicss 插件
  vite_plugins.push(WindiCSS())
  // html 插件
  vite_plugins.push(configHtmlPlugin(env, is_build))
}
