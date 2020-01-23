import Vuex from 'vuex'
import nprogress from 'nprogress'
import config from './config.js'

/*
Loading states:
covering = set by revealer
-- loading - set by globabl route guard
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
      pageLoadingStatus: 'loading',
      revealerTitle: 'Anthony Moles',
      isSidebarOpen: false,
      projectPosition: {child: {}, parent: {}, scroll: 0},
      lastProject: {hasLastProject: false, background: ''},
      navStyle: 'blue' // blue, red, orange, white (outline)
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
      },
      SET_PROJECT_POSITION (state, status) {
        state.projectPosition = status
      },
      SET_LAST_PROJECT (state, status) {
        state.lastProject = status
      },
      SET_NAV_STYLE (state, status) {
        state.navStyle = status
      },
    },
    actions: {
      setLoadingPageContent (context, payload) {
        if (payload === 'loading') {
          nprogress.start()
        } else {
          nprogress.done()
        }

        if (payload === 'revealing') {
          setTimeout(() => {
            context.commit('SET_LOADING_STATUS', payload)
          }, config.fadeTransitionTime / 2) // More pleasing to have a pause before the reveal
        } else {
          context.commit('SET_LOADING_STATUS', payload)
        }

        if (payload === 'loading' || payload === 'covering' || payload === 'revealing') {
          document.documentElement.style.overflow = 'hidden'
        } else {
          document.documentElement.style.overflow = 'scroll'
        }
      },
      setSidebarStatus (context, payload) {
        context.commit('SET_SIDEBAR_STATUS', payload)
      },
      setTitleStatus (context, payload) {
        context.commit('SET_TITLE_STATUS', payload)
      },
      setProjectPosition (context, payload) {
        context.commit('SET_PROJECT_POSITION', payload)
      },
      setLastProject (context, payload) {
        context.commit('SET_LAST_PROJECT', payload)
      },
      setNavStyle (context, payload) {
        context.commit('SET_NAV_STYLE', payload)
      },
    }
  })
}
