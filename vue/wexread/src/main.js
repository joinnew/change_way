import Vue from 'vue'
import App from './App'
import store from './store'
import './utils/fly.js'
import '@/assets/stylus/reset.styl'
import '@/assets/stylus/base.styl'
import '@/assets/stylus/iconfont.css'


Vue.config.productionTip = false
Vue.prototype.$store=store;
App.mpType = 'app'

const app = new Vue(App)

app.$mount()
