export default (router, store) => {

  // Page transition hooks
  router.beforeResolve((to, from, next) => {
    if (to.path !== from.path) store.dispatch('setLoadingPageContent', 'loading')
    next()
  })

  router.afterEach((to, from) => {
    store.dispatch('setSidebarStatus', false)
  })
}
