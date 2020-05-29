<template>
  <section v-if="next" class="page-nav project-card light" :class="next.frontmatter.background || 'dark'">

        <div class="container is-fullhd content" v-if="prev || next">
          <div class="columns">
            <div class="column is-one-third">
              <router-link class="page-nav-anchor" :to="next.path">
                <p class="small-title is-to-fade">{{ next.title || next.path }}</p>
                <h2 class="item-title is-to-fade">{{ next.frontmatter.subtitle }}</h2>
              </router-link>
            </div>
          </div>
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
  .item-title
    padding-right: 1.5em
  &.light
    color: $white
    .small-title
      color: $white
      filter: opacity(78%)


</style>
