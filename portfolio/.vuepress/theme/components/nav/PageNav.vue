<template>
  <section v-if="prev || next" class="page-nav background-noise">

    <div class="container is-fullhd content">

      <div class="page-nav-column columns" :class="{'is-end': !prev || !next}">
        <router-link v-if="prev" class="column no-fade prev" :to="prev.path">
          <div class="background background-noise"></div>
          <div class="text-group">
            <p class="small-title">{{ processedTitle(prev.frontmatter.title) }}</p>
            <h2 class="item-title">{{ prev.frontmatter.subtitle }}</h2>
            <p class="case" v-if="prev.frontmatter.case1">{{ prev.frontmatter.case1 }}</p>
          </div>
        </router-link>
        <router-link  v-if="next" class="column no-fade is-one-third next" :to="next.path">
          <div class="background project-card" :class="next.frontmatter.background">
             <div class="ticker-content">
              <div class="img-ticker" v-for="n in 8">
                <div class="ticker-inner">
                  <img class="lazyload chevron" :class="chevronClass" data-src="/svg-icons/chevron.svg" alt="chevron"></img>
                </div>
              </div>
            </div>
          </div>
          <div class="text-group">
            <p class="small-title">{{ processedTitle(next.frontmatter.title) }}</p>
            <h2 class="item-title">{{ next.frontmatter.subtitle }}</h2>
            <p class="case" v-if="next.frontmatter.case1">{{ next.frontmatter.case1 }}</p>
          </div>
        </router-link>
      </div>

    </div>

  </section>
</template>

<script>
import isString from 'lodash/isString'
import isNil from 'lodash/isNil'
import { resolvePage } from '@theme/util'
import { processedTitle } from '@theme/mixins/processedTitle.js'


// <span v-if="prev" class="prev">
//   ←
//   <router-link v-if="prev" class="prev" :to="prev.path">{{ prev.title || prev.path }}</router-link>
// </span>

export default {
  name: 'PageNav',
  mixins: [processedTitle],
  computed: {
    prev () {
      return resolvePageLink(LINK_TYPES.PREV, this)
    },

    next () {
      return resolvePageLink(LINK_TYPES.NEXT, this)
    },

    chevronClass() {
      let uid = this.next.frontmatter.uid
      // 4, 7, 9
      let uidsToSet = [2, 4, 5, 8, 10]
      let uidsToSetDouble = [1]
      if (uidsToSet.includes(uid)) {
        return 'chevron-dimmed'
      } else if (uidsToSetDouble.includes(uid)) {
        return 'chevron-dimmed-double'
      } else {
        return null
      }
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
  .case
    color: rgba($white, 0.8)
    margin-top: 0.5em

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
    position: relative
  .prev, .next, .action
    position: relative
    .background
      position: absolute
      top: 0
      bottom: 0
      transition: background-color 200ms ease, filter 200ms ease
  .prev
    .text-group
      @media screen and (min-width: $desktop)
        max-width: 80%
      @media screen and (min-width: $widescreen)
        max-width: 50%
  .prev, .action
    .background
      left: -50vw
      width: 200vw
  .prev .background
    background-color: $steel
    &:hover, &:active
      background-color: darken($slate, 1.5)
  .action .background
    background-color: $slate
    &:hover, &:active
      background-color: lighten($slate, 1.5)
  .next .background
    // border-radius: $radius
    left: -2em
    width: 50vw
    border-left: 2px solid $black
    overflow: hidden
    &:hover, &:active
      filter: brightness(1.1)
  .item-title
    margin-top: 0
  .small-title
    color: $extraDarkSmoke
    opacity: 1
  .next .small-title
    color: $white
    opacity: 0.78

@media screen and (max-width: $tablet - 1px)
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
    .prev, .action
      .text-group
        max-width: unset
        padding-right: 2.75em

@keyframes ticker-kf 
  0%
    transform: translate3d(-100%, 0, 0)
  
  // 217px native
  100%
    transform: translate3d(0, 0, 0)
  
.ticker-content
  width: 100000px

.img-ticker
  float: left
  animation: ticker-kf 3s linear infinite
  height: 20em
  width: 10em
  .ticker-inner
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0
    display: flex
    align-items: center
    .chevron
      transform: scale(1.2)
      &.chevron-dimmed
        opacity: 0.5
      &.chevron-dimmed-double
        opacity: 0.25

  


</style>
