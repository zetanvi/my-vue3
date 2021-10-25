import 'virtual:windi.css' 
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {
  // create naive ui
  create,
  // component
  NButton,
  NConfigProvider,
  NGlobalStyle,
  NIcon
} from 'naive-ui'
import App from './App.vue'

const naive = create({
  components: [NButton,NConfigProvider,NGlobalStyle,NIcon]
})


createApp(App).use(naive).use(createPinia()).mount('#app')
