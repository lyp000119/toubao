import Vue from 'vue';
import App from './App';
import router from './router';
import axios from './axios/index';
import store from './vuex/index';
Vue.config.productionTip = false
Vue.prototype.$http = axios
/* eslint-disable no-new */
axios.interceptors.request.use(function (config) {
  // console.log('请求前')
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
