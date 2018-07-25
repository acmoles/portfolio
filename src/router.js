import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Onboarding from './views/Onboarding.vue'
import Personalisation from './views/Personalisation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: Onboarding
    },
    {
      path: '/personalisation',
      name: 'personalisation',
      component: Personalisation
    }
  ],
  mode: 'history'
})
