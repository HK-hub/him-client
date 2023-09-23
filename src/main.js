import {createApp} from 'vue'
import '@/style.css'

// 引入自定义全局样式
import '@/styles/index.scss'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
