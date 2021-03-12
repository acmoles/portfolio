import './styles/index.sass'

import initStore from './store.js'
import initRouting from './routing.js'

import VueForceNextTick from 'vue-force-next-tick'
import VueClipboard from 'vue-clipboard2'
import PortalVue from 'portal-vue'
import lazySizes from 'lazysizes'
import debounce from 'lodash.debounce'

import Home from './components/home/Home.vue'
import FadeGlobal from './components/FadeGlobal.vue'

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
  Vue.component('Fade', FadeGlobal)

  if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    Vue.use(VueForceNextTick)
    Vue.use(VueClipboard)
    Vue.use(PortalVue)

    lazySizes.cfg.iframeLoadMode  = 1
    lazySizes.init()


    // fixes scroll jump in modern browsers
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    // global onWindowResize event
    function onWindowResize() {
      store.dispatch('setWindowStatus', {
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    onWindowResize()
    window.addEventListener( 'resize', () => {
      // debounce(onWindowResize, 150)
      onWindowResize()
    }, false )

    // global image event
    function lazy() {
      document.addEventListener('lazyloaded', function (e)  {
        checkParent(e.target, processNode)

        // if (e.target.parentNode.classList.contains('parent-loading')) {
        //   e.target.parentNode.classList.add('parent-loaded');
        //   e.target.parentNode.classList.remove('parent-loading');  
        // } else {
        //   e.target.parentNode.parentNode.classList.add('parent-loaded');
        //   e.target.parentNode.parentNode.classList.remove('parent-loading');  
        // }
      });
    }
    function checkParent(target, callback) {
      if (!target.parentNode) {
        return
      }

      if (target.parentNode.classList && target.parentNode.classList.contains('parent-loading')) {
        callback(target.parentNode)
      } else {
        checkParent(target.parentNode, callback)
      }
    }
    function processNode(node) {
      node.classList.add('parent-loaded');
      node.classList.remove('parent-loading');  
    }
    lazy();
  }

}
