import Vue from 'vue'
import axios from "axios"
import config from "./config"
import router from '../router'
// 将Axios挂载到Vue的原型中
Vue.prototype.$http = axios;
// 全局配置baseURL
// axios.defaults.baseURL = 'http://www.litc.pro:9999/v1';
// 解决跨域问题设置请求头(这里用不上,后台设计好了)
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//解决验证码无法跨域携带的问题,携带cookie跨域
// axios.defaults.withCredentials = true

//自动化挂载配置
for (const key in config) {
     axios.defaults[key] = config[key];
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.dir(config);
  let token = localStorage.getItem('token') || ''
  config.headers.Authorization = token
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // console.dir(response);
  response = response.data
  
  return response;
}, function (error) {
  // 对响应错误做点什么
  Vue.prototype.$message({
    showClose: true,
    message: err.response.data.errMsg,
    type: "error"
  })
  if (err.response.data.status==401) {
      //如果是无效的token,则跳转到登录页
      localStorage.removeItem('token')
      localStorage.removeItem('userinfo')
      router.push('/')
  }
  return Promise.reject(error);
})

export default axios