import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/css/theme.sass'

Vue.config.productionTip = false

const eventbus = new Vue()
Object.defineProperty(Vue.prototype, '$eventbus', {
  get () { return eventbus }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
