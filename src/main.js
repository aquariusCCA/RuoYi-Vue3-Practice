import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入全局组件
import GlobalComponents from '@/components/index.js'

// svg图标
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(createPinia())
app.use(GlobalComponents)
app.use(router)

app.mount('#app')
