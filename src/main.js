import {createApp} from 'vue'
// 引入自定义全局样式
import '@/styles/index.scss'
import App from './App.vue'
import router from '@/router'
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
import {createPinia} from 'pinia'
import {createPersistedState} from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia();
pinia.use(createPersistedState({
	auto: true,
}))

app.use(pinia)
app.use(router)
app.use(Layui)
app.mount('#app')
