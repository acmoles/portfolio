import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueEvents from 'vue-events'

Vue.use(VueEvents)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
