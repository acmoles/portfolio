<template>
  <div class="page-nav container is-fullhd" v-if="prev || next">
    <p class="inner">
      <span v-if="prev" class="prev">
        ←
        <router-link v-if="prev" class="prev" :to="prev.path">{{ prev.title || prev.path }}</router-link>
      </span>

      <span v-if="next" class="next">
        <router-link v-if="next" :to="next.path">{{ next.title || next.path }}</router-link>→
      </span>
    </p>
  </div>
</template>
<script>
import isString from 'lodash/isString'
import isNil from 'lodash/isNil'
import { resolvePage } from '../../util'

export default {
  name: 'PageNav',
  computed: {
    prev () {
      return resolvePageLink(LINK_TYPES.PREV, this)
    },

    next () {
      return resolvePageLink(LINK_TYPES.NEXT, this)
    }
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
  padding: 18em 2em

  .inner
    font-size: 36px
    width: 100%
    min-height: 2rem
    display: flex
    justify-content: space-between

  .next
    float: right

</style>
