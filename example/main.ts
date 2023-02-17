import { createApp } from 'vue'
import App from './app.vue'

// 全局引入
import WwwUi from 'www-ui'
import '@www-ui/theme-chalk/index.scss'

const app = createApp(App)
app.use(WwwUi)
app.mount('#app')
