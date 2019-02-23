import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import axios from "axios"

// 将Axios挂载到Vue的原型中
Vue.prototype.$http = axios;
// 全局配置baseURL
axios.defaults.baseURL = 'http://litc.pro:9999/v1';
// 解决跨域问题设置请求头(这里用不上,后台设计好了)
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

import "./styles/common.css"
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
