export default (router, store, siteData) => {

  // Page transition hooks
  router.beforeEach((to, from, next) => {

    if (to.path !== from.path && store.state.revealerInitialised) {
      store.dispatch('setLoadingPageContent', 'covering')

      let toPageFrontmatter = findPageFrontmatter(siteData.pages, to.path)

      if (to.path === '/' && store.state.lastProject.hasLastProject) {
        console.log('ROUTER: special back to homepage')
        // use special last project behaviour
        // this.backgroundClass = store.lastProject.background

      } else if (from.path === '/') {
        console.log('ROUTER: homepage to project, gains special back')
        // gains special last project behaviour

      } else {
        console.log('ROUTER: regular route, loses any special back')
        // regular behaviour
        // this.backgroundClass = toPageFrontmatter.background
      }

      // Could be combined into current/upcoming page data
      store.dispatch('setNavStyle', toPageFrontmatter.navStyle)
      store.dispatch('setTitleStatus', toPageFrontmatter.title)

      // Hold up router until covering squence is finished
      // Store for later use in revealer component
      store.dispatch('setNextGuardCallback', next)
    } else {
      console.log('to path same as from path?');
      next()
    }

  })

  router.beforeResolve((to, from, next) => {
    if (to.path !== from.path) store.dispatch('setLoadingPageContent', 'loading')
    next()
  })

  router.afterEach((to, from) => {
    store.dispatch('setSidebarStatus', false)
  })
}

function findPageFrontmatter(pages, path) {
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].path === path) {
      return pages[i].frontmatter
    }
  }
}
