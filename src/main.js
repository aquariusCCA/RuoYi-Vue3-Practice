import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Cookies from 'js-cookie'
import App from './App.vue'
import router from './router'

// 引入全局组件
import GlobalComponents from '@/components/index.js'

// svg图标
import 'virtual:svg-icons-register'

// global css
import '@/assets/styles/index.scss' 

// 使用 Element Plus 组件库
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhTw from "element-plus/es/locale/lang/zh-tw";
import 'element-plus/theme-chalk/dark/css-vars.css'


const app = createApp(App)

app.use(createPinia())
app.use(GlobalComponents)
app.use(router)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
  locale: zhTw,
  // 支持 large、default、small
  size: Cookies.get('size') || 'default'
})


app.mount('#app')
