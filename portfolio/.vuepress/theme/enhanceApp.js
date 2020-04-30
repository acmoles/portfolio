import './styles/index.sass'

import initStore from './store.js'
import initRouting from './routing.js'

import VueForceNextTick from 'vue-force-next-tick'
import VueClipboard from 'vue-clipboard2'
import lazySizes from 'lazysizes'

import Home from './components/home/Home.vue'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.config.productionTip = false
  const store = initStore(Vue)
  Vue.mixin({store: store})
  initRouting(router, store, siteData)

  // Regster the home component separately for clearer directory structure
  Vue.component('Home', Home)

  if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    Vue.use(VueForceNextTick)
    Vue.use(VueClipboard)

    lazySizes.init();

    // fixes scroll jump in modern browsers
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }

}
