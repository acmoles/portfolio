import './styles/index.sass'

import VueEvents from 'vue-events'
import VueClipboard from 'vue-clipboard2'
import lazySizes from 'lazysizes'
import VModal from 'vue-js-modal'
import PortalVue from 'portal-vue'
import initStore from './store.js'
import initRouting from './routing.js'
import VueForceNextTick from 'vue-force-next-tick'

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
  Vue.use(VueForceNextTick)
  Vue.use(VModal)
  Vue.use(VueEvents)
  Vue.use(VueClipboard)
  Vue.use(PortalVue)
  lazySizes.init()

  // fixes scroll jump in modern browsers
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
}
