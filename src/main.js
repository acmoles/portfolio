import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueEvents from 'vue-events'
import VeeValidate from 'vee-validate'
import VueClipboard from 'vue-clipboard2'
import lazySizes from 'lazysizes'
// Object.assign(lazySizes.cfg, {
//     expand: 10
// });
lazySizes.init();

Vue.use(VeeValidate, {
  events: 'change'
});
Vue.use(VueEvents)
Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
