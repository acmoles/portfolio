<template>
  <section v-if="prev || next" class="page-nav background-noise">

    <div class="container is-fullhd content">

      <div class="page-nav-column columns" :class="{'is-end': !prev || !next}">
        <router-link v-if="prev" class="column no-fade prev" :to="prev.path">
          <div class="background background-noise"></div>
          <div class="text-group">
            <p class="small-title">{{ prev.title || prev.path }}</p>
            <h2 class="item-title">{{ prev.frontmatter.subtitle }}</h2>
          </div>
        </router-link>
        <router-link  v-if="next" class="column no-fade is-one-third next" :to="next.path">
          <div class="background project-card" :class="next.frontmatter.background"></div>
          <div class="text-group">
            <p class="small-title">{{ next.title || next.path }}</p>
            <h2 class="item-title">{{ next.frontmatter.subtitle }}</h2>
          </div>
        </router-link>
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
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"

.page-nav, .page-nav .container
  height: 20em

.page-nav
  background-color: $steel
  margin-bottom: 2px
  .columns
    height: 100%
  &::before
    content: ' '
    pointer-events: none
    position: absolute
    width: 100%
    height: 2em
    background-image: linear-gradient(360deg, $pitch 0%, rgba($pitch,0.42) 40%, rgba($pitch,0.00) 100%)
    top: -2em
    opacity: 0.05

.page-nav-column.columns
  position: relative
  top: 2em
  justify-content: space-between
  &.is-end
    justify-content: flex-end
  .column
    display: flex
    align-items: center
  .text-group
    padding-right: 4em
    pointer-events: none
  .prev, .next, .action
    position: relative
    .background
      position: absolute
      top: 0
      bottom: 0
      transition: background-color 200ms ease, filter 200ms ease
  .prev, .action
    .text-group
      max-width: 50%
    .background
      left: -50vw
      width: 200vw
  .prev .background
    background-color: $steel
    &:hover, &:active
      background-color: $slate
  .action .background
    background-color: $slate
    &:hover, &:active
      background-color: lighten($slate, 3)
  .next .background
    // border-radius: $radius
    left: -4em
    width: 50vw
    border-left: 2px solid $black
    &:hover, &:active
      filter: brightness(1.1)
  .item-title
    margin-top: 1em
  .small-title
    color: $white
    filter: opacity(78%)

@media screen and (max-width: $desktop)
  .page-nav, .page-nav .container
    height: 12em
  .page-nav-column.columns
    .column.prev
      display: none
    .column.next
      .background
        width: 100%
        height: 12em
        left: 0



</style>
