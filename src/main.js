import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import './styling/styles.scss'

Vue.config.productionTip = false

var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
