import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/style/reset.css'
const app = createApp(App)

import * as ElIcon from '@element-plus/icons-vue'
 
Object.keys(ElIcon).forEach((key) => {
  app.component(key, ElIcon[key])
})
const pinia = createPinia()


app.use(pinia)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
