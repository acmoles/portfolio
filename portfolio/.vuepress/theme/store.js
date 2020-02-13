import Vuex from 'vuex'
import nprogress from 'nprogress'
import config from './config.js'

/*
Loading states:
covering = set by globabl beforeEach route guard (next guard called by revealer after covering transition finishes)
loading - set by globabl beforeResolve route guard
revealing - set by loaded loadable hero component
finished - set by revealer
*/

export default (Vue) => {

  nprogress.configure({
    showSpinner: false,
    trickleSpeed: 100
  })

  // Start first load
  nprogress.start()

  Vue.use(Vuex)

  return new Vuex.Store({
    state: {
      isSearchboxOpen: false,
      isSidebarOpen: false,
      documentHeight: null,
      pageLoadingStatus: 'loading',
      revealerTitle: 'Anthony Moles',
      revealerInitialised: false,
      nextGuardCallback : null,
      projectPosition: {
        childOffsetLeft: null,
        childOffsetTop: null,
        childOffsetWidth: null,
        childOffsetHeight: null,
        parentOffsetWidth: null,
        scroll: 0
      },
      lastProject: {
        hasLastProject: false,
        background: ''
      },
      useLastProject: false,
      navStyle: 'blue' // blue, red, orange, white (outline)
    },
    mutations: {
      SET_SEARCHBOX_STATUS (state, status) {
        state.isSearchboxOpen = status
      },
      SET_SIDEBAR_STATUS (state, status) {
        state.isSidebarOpen = status
      },
      SET_DOC_HEIGHT (state, status) {
        state.documentHeight = status
      },
      SET_LOADING_STATUS (state, status) {
        state.pageLoadingStatus = status
      },
      SET_TITLE_STATUS (state, status) {
        state.revealerTitle = status
      },
      SET_REVEALER_INIT (state, status) {
        state.revealerInitialised = status
      },
      SET_NEXT_GUARD (state, status) {
        state.nextGuardCallback = status
      },
      SET_PROJECT_POSITION (state, status) {
        state.projectPosition = status
      },
      SET_LAST_PROJECT (state, status) {
        state.lastProject = status
      },
      USE_LAST_PROJECT (state, status) {
        state.useLastProject = status
      },
      SET_NAV_STYLE (state, status) {
        state.navStyle = status
      },
    },
    actions: {
      setSearchboxStatus (context, payload) {
        context.commit('SET_SEARCHBOX_STATUS', payload)
      },
      setSidebarStatus (context, payload) {
        context.commit('SET_SIDEBAR_STATUS', payload)
      },
      setDocumentHeight (context, payload) {
        context.commit('SET_DOC_HEIGHT', payload)
      },
      setLoadingPageContent (context, payload) {
        if (payload === 'loading') {
          nprogress.start()
        } else {
          nprogress.done()
        }

        if (payload === 'loading' || payload === 'covering') {
          document.documentElement.style.overflow = 'hidden'
          document.documentElement.style.scrollBehavior = 'auto'
        }

        else if (payload === 'revealing') {
          document.documentElement.style.overflow = 'scroll'
          document.documentElement.style.scrollBehavior = 'auto'
        }

        else {
          document.documentElement.style.overflow = 'scroll'
          document.documentElement.style.scrollBehavior = 'smooth'
        }

        if (payload === 'revealing') {
          setTimeout(() => {
            context.commit('SET_LOADING_STATUS', payload)
            // wait for nprogress to finish before actually revealing
          }, 400)
        } else {
          context.commit('SET_LOADING_STATUS', payload)
        }
      },
      setTitleStatus (context, payload) {
        context.commit('SET_TITLE_STATUS', payload)
      },
      setRevealerInit (context, payload) {
        context.commit('SET_REVEALER_INIT', payload)
      },
      setNextGuardCallback (context, payload) {
        context.commit('SET_NEXT_GUARD', payload)
      },
      setProjectPosition (context, payload) {
        context.commit('SET_PROJECT_POSITION', payload)
      },
      setLastProject (context, payload) {
        context.commit('SET_LAST_PROJECT', payload)
      },
      useLastProject (context, payload) {
        context.commit('USE_LAST_PROJECT', payload)
      },
      setNavStyle (context, payload) {
        context.commit('SET_NAV_STYLE', payload)
      },
    }
  })
}
