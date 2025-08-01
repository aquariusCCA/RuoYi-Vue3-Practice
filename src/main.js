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

// 引入假資料
import { worker } from "./mocks/browser";
import { setSeeds } from "@/mocks/seeds";

// 開發環境可使用API假資料
if (import.meta.env.DEV) {
  console.log("這是開發環境，將使用假資料API");
  // 注入假資料
  setSeeds();

  // 啟動 MSW 假資料服務
  await worker.start({
    onUnhandledRequest: "bypass", // 不顯示任何警告，直接放行
  });
}


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
