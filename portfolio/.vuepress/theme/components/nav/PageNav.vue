<template>
  <section v-if="next" class="page-nav project-card noise-light" :class="next.frontmatter.background || 'dark'">

        <div class="container is-fullhd content" v-if="prev || next">
          <router-link :to="next.path">
            <p class="small-title">Next project</p>
            <h1>{{ next.title || next.path }}</h1>
          </router-link>
        </div>

  </section>
</template>

<script>
import isString from 'lodash/isString'
import isNil from 'lodash/isNil'
import { resolvePage } from '../../util'

// <span v-if="prev" class="prev">
//   ←
//   <router-link v-if="prev" class="prev" :to="prev.path">{{ prev.title || prev.path }}</router-link>
// </span>

export default {
  name: 'PageNav',
  computed: {
    prev () {
      return resolvePageLink(LINK_TYPES.PREV, this)
    },

    next () {
      return resolvePageLink(LINK_TYPES.NEXT, this)
    },
  }
}

const LINK_TYPES = {
  NEXT: {
    getPageLinkConfig: ({ frontmatter }) => frontmatter.next
  },
  PREV: {
    getPageLinkConfig: ({ frontmatter }) => frontmatter.prev
  }
}

function resolvePageLink (
  linkType,
  { $page, $route, $site }
) {
  const { getPageLinkConfig } = linkType

  // Get link config from current page
  const pageLinkConfig = getPageLinkConfig($page)

  // Page link config will overwrite global theme link config if defined
  const link = isNil(pageLinkConfig) ? false : pageLinkConfig

  if (link === false) {
    return
  } else {
    return resolvePage($site.pages, link, '/projects/')
  }
}
</script>

<style lang="sass">
@import "../../styles/variables.sass"
@import "../../styles/mixins.sass"

.page-nav
  height: 100vh
  display: flex
  align-items: center
  .project-card


</style>
