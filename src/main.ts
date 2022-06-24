import 'virtual:windi.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import { naive } from '@/utils/registerNaive/index'

createApp(App).use(router).use(naive).use(createPinia()).mount('#app')
