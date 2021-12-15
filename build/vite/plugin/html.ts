import type { Plugin } from 'vite'
import html from 'vite-plugin-html'

export function configHtmlPlugin(env:ViteEnv, is_build:boolean) {
  const { VITE_GLOB_APP_TITLE } = env
  const htmlPlugin:Plugin[] = html({
    minify: is_build, // 打包的话进行压缩index.html
    inject: {
      data: {
        title: VITE_GLOB_APP_TITLE // 设置index.html中的title
      }
    }
  })
  return htmlPlugin
}
