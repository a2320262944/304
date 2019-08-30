import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import axios from './axios'
import store from './store/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.use(ElementUI)

new Vue({
  axios,
  store,
  router,
  render: h => h(App)
})
  .$mount('#app')
