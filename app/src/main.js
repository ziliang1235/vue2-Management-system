// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
//引入element ui 模块
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入axios模块
import axios from 'axios'
Vue.prototype.$axios = axios
//引入vuex

import store from './store/index';
//引入默认样式
import 'normalize.css/normalize.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
