import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/styles/fonts.css'
import './assets/styles/global.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(Vant)
