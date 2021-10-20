import 'virtual:windi.css' 
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {
  // create naive ui
  create,
  // component
  NButton
} from 'naive-ui'
import App from './App.vue'

const naive = create({
  components: [NButton]
})


createApp(App).use(naive).use(createPinia()).mount('#app')
