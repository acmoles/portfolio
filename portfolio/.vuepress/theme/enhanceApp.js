import Vuex from 'vuex'
import VueEvents from 'vue-events'
import VueClipboard from 'vue-clipboard2'
import lazySizes from 'lazysizes'
import nprogress from 'nprogress'
import VModal from 'vue-js-modal'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.config.productionTip = false
  Vue.use(Vuex)
  Vue.use(VModal)
  Vue.use(VueEvents)
  Vue.use(VueClipboard)
  lazySizes.init()
  nprogress.configure({
    showSpinner: false,
    trickleSpeed: 100
  })

  /*
  Loading states:
  covering = set by revealer
  -- loading - set by globabl route guard
  revealing - set by loaded loadable hero component
  finished - set by revealer
  */

  // Start first load
  nprogress.start()

  const store = new Vuex.Store({
    state: {
      pageLoadingStatus: 'loading',
      revealerTitle: 'Anthony Moles',
      isSidebarOpen: false
    },
    mutations: {
      SET_LOADING_STATUS (state, status) {
        state.pageLoadingStatus = status
      },
      SET_SIDEBAR_STATUS (state, status) {
        state.isSidebarOpen = status
      },
      SET_TITLE_STATUS (state, status) {
        state.revealerTitle = status
      }
    },
    actions: {
      setLoadingPageContent (context, payload) {
        if (payload === 'loading') {
          nprogress.start()
        } else {
          nprogress.done()
        }

        if (payload === 'revealing') {
          // More pleasing to have a pause before the reveal
          setTimeout(() => {
            context.commit('SET_LOADING_STATUS', payload)
          }, 600)
        } else {
          context.commit('SET_LOADING_STATUS', payload)
        }
      },
      setSidebarStatus (context, payload) {
        context.commit('SET_SIDEBAR_STATUS', payload)
      },
      setTitleStatus (context, payload) {
        if (payload === 'Home') {
          console.log('found home');
          context.commit('SET_TITLE_STATUS', 'Anthony Moles')
        } else {
          context.commit('SET_TITLE_STATUS', payload)
        }
      }
    }
  })

  Vue.mixin({store: store})

  router.beforeResolve((to, from, next) => {
    if (to.path !== from.path) store.dispatch('setLoadingPageContent', 'loading')
    next()
  })
  router.afterEach((to, from) => {
    store.dispatch('setSidebarStatus', false)
  })


}
