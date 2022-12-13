import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as echarts from 'echarts';
import * as dayjs from 'dayjs'
import * as ElIcons from '@element-plus/icons-vue'
import './assets/css/global.css'

import dataV from '@jiaminghi/data-view';
//mock引入
// import './mock/index.js'


const app=createApp(App).use(store)


app.use(dataV)
app.use(router)
app.use(ElementPlus)
app.use(echarts)
app.use(ElIcons)
app.use(store)
app.config.globalProperties.dayjs=dayjs;
app.mount('#app')
