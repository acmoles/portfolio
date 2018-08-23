import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Onboarding from './views/Onboarding.vue'
import Personalisation from './views/Personalisation.vue'
import Wesen from './views/Wesen.vue'
import Blkbrd from './views/Blkbrd.vue'
import Toucanoo from './views/Toucanoo.vue'
import Pre2016 from './views/Pre2016.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
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
    },
    {
      path: '/wesen',
      name: 'wesen',
      component: Wesen
    },
    {
      path: '/blkbrd',
      name: 'blkbrd',
      component: Blkbrd
    },
    {
      path: '/toucanoo',
      name: 'toucanoo',
      component: Toucanoo
    },
    {
      path: '/pre2016',
      name: 'pre2016',
      component: Pre2016
    }
  ],
  mode: 'history'
})
