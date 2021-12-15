// eslint-disable-next-line spaced-comment 
/// <reference types="vite/client" /> 
// 上面代码用意：https://cn.vitejs.dev/guide/features.html#client-types

// 模块声明
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
