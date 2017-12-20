import Vue from 'vue';
import App from './App';
import router from './router';
import axios from './axios/index';
import store from './vuex/index';
Vue.config.productionTip = false
/* eslint-disable no-new */
axios.create({
  headers: {'X-Custom-Header': 'foobar'},
  transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
          if(typeof data[it] == 'object'){
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(JSON.stringify(data[it])) + '&'
          }else{
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
      }
      console.log(ret);
      return ret
    }]
})
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
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
