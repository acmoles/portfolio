import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueEvents from 'vue-events'
import lazySizes from 'lazysizes';
// Object.assign(lazySizes.cfg, {
//     expand: 10
// });
lazySizes.init();

Vue.use(VueEvents)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
