import Vuex from 'vuex'
import config from '../config.js'

/*
Loading states:
covering = set by globabl beforeEach route guard (next guard called by revealer after covering transition finishes)
loading - set by globabl beforeResolve route guard
loading-increment - set by loaded loadable hero mixin
revealing - set by loaded loadable hero mixin
finished - set by revealer
*/

export default (Vue) => {

  Vue.use(Vuex)

  return new Vuex.Store({
    state: {
      window: {width: null, height: null},
      isSidebarOpen: false,
      isModalOpen: false,
      pageLoadingStatus: 'loading',
      revealerTitle: {
        title: '',
        subtitle: ''
      },
      revealerInitialised: false,
      firstLoad: true,
      homeFadeUpMotion: true,
      nextGuardCallback : null,
      projectPosition: {
        childLeft: null,
        childTop: null,
        childWidth: null,
        childHeight: null,
        scroll: 0
      },
      lastProject: {
        hasLastProject: false,
        background: ''
      },
      useLastProject: false,
      fadeCount: 0,
      snackbar: {
        text: 'Email copied to clipboard',
        position: 'top'
      }
    },
    mutations: {
      SET_WINDOW_STATUS (state, status) {
        state.window = {
          width: status.width,
          height: status.height
        }
      },
      SET_SIDEBAR_STATUS (state, status) {
        state.isSidebarOpen = status
      },
      SET_MODAL_STATUS (state, status) {
        state.isModalOpen = status
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
      SET_FIRST_LOAD (state, status) {
        state.firstLoad = status
      },
      SET_HOME_MOTION (state, status) {
        state.homeFadeUpMotion = status
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
      INCREMENT_FADE_COUNT (state, status) {
        state.fadeCount++
      },
      RESET_FADE_COUNT (state, status) {
        state.fadeCount = 0
      },
      SET_SNACKBAR_STATUS (state, status) {
        state.snackbar = status
      }
    },
    actions: {
      setWindowStatus (context, payload) {
        context.commit('SET_WINDOW_STATUS', payload)
      },
      setSidebarStatus (context, payload) {
        context.commit('SET_SIDEBAR_STATUS', payload)
      },
      setModalStatus (context, payload) {
        context.commit('SET_MODAL_STATUS', payload)
      },
      setLoadingPageContent (context, payload) {
        context.commit('SET_LOADING_STATUS', payload)
      },
      setTitleStatus (context, payload) {
        context.commit('SET_TITLE_STATUS', payload)
      },
      setRevealerInit (context, payload) {
        context.commit('SET_REVEALER_INIT', payload)
      },
      setFirstLoad (context, payload) {
        context.commit('SET_FIRST_LOAD', payload)
      },
      setHomeMotion (context, payload) {
        context.commit('SET_HOME_MOTION', payload)
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
      incrementFadeCount (context, payload) {
        context.commit('INCREMENT_FADE_COUNT')
      },
      resetFadeCount (context, payload) {
        context.commit('RESET_FADE_COUNT')
      },
      setSnackbarStatus (context, payload) {
        context.commit('SET_SNACKBAR_STATUS', payload)
      },
    }
  })
}
