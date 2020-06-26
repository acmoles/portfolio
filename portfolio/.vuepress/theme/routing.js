export default (router, store, siteData) => {

  // Page transition hooks
  router.beforeEach((to, from, next) => {
    // TODO used for debug since vue devtools cause issues with vuepress
    // window.vueState = store.state

    if (to.path !== from.path && store.state.revealerInitialised) {
      store.dispatch('setLoadingPageContent', 'covering')


      let toPageFrontmatter = findPageFrontmatter(siteData.pages, to.path)

      if (to.path === '/' && store.state.lastProject.hasLastProject) {
        // use special last project behaviour
        store.dispatch('useLastProject', true)

      } else if (from.path === '/' && to.path !== '/about/') {
        // homepage to project - gains special last project behaviour

        store.dispatch('setLastProject', {
          hasLastProject: true,
          background: toPageFrontmatter.background
        })

      } else {
        // regular behaviour
        store.dispatch('setLastProject', {
          hasLastProject: false,
          background: toPageFrontmatter.background
        })
      }

      // TODO still using global page title store?
      store.dispatch('setTitleStatus', {
        title: toPageFrontmatter.title,
        subtitle: toPageFrontmatter.subtitle
      })

      store.dispatch('resetFadeCount')

      // Hold up router until covering squence is finished
      // Store for later use in revealer component
      store.dispatch('setNextGuardCallback', next)
    }

    else {
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
