<template>
  <button
    class="sidebar-button"
    :class="{ 'hamburger hamburger--spin': purpose === 'menu', 'disabled': disabled }"
    type="button"
    :aria-label="purpose"
    :disabled="disabled"
    aria-expanded="false"
    @click="$emit('sidebar-button-event')"
  >

    <span
      v-if="purpose === 'menu'"
      aria-hidden="true"
      class="hamburger-box"
      :class="{ 'is-active': isSidebarOpen }"
    >
      <span aria-hidden="true" class="hamburger-inner"></span>
    </span>

    <i
      v-else-if="purpose === 'search'"
      aria-hidden="true"
      class="button-box icon"
      :class="{ 'is-active': isSearchboxOpen }"
    >
      <SearchIcon aria-hidden="true" class="button-inner search-inner"/>
      <ListIcon aria-hidden="true" class="button-inner list-inner"/>
    </i>

    <i
      v-else-if="purpose === 'goto-top'"
      aria-hidden="true"
      class="icon"
    >
      <TopIcon/>
    </i>
  </button>
</template>

<script>
  import ListIcon from '@theme/components/icons/ListIcon.vue'
  import SearchIcon from '@theme/components/icons/SearchIcon.vue'
  import TopIcon from '@theme/components/icons/TopIcon.vue'

  export default {
    components: { ListIcon, SearchIcon, TopIcon },

    props: {
      purpose: {
        required: true
      },
      disabled: false
    },
    computed: {
      isSidebarOpen () {
        return this.$store.state.isSidebarOpen
      },
      isSearchboxOpen () {
        return this.$store.state.isSearchboxOpen
      }
    }
  }
</script>

<style lang="sass">
@import "../../styles/variables.sass"
@import "../../styles/mixins.sass"

$hamburger-layer-width         : 1.25em
$hamburger-layer-height        : 2px
$hamburger-layer-spacing       : 3px
$hamburger-layer-color         : $white-ter
$hamburger-layer-border-radius : 0px


.sidebar-button
  width: 6em
  height: 6em
  padding: 0
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer

  @include opacity-filter-transition

  @include button-override

  &.disabled
    cursor: not-allowed
    filter: $hover-filter

.hamburger
    .hamburger-inner::before,
    .hamburger-inner::after
      background-color: $hamburger-layer-color

.dark:not(.force)
  .hamburger
      .hamburger-inner::before,
      .hamburger-inner::after
        background-color: $black

.hamburger-box
  width: $hamburger-layer-width
  height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2
  display: inline-block
  position: relative


.hamburger-inner
  display: block
  top: 50%
  margin-top: $hamburger-layer-height / -2

  &,
  &::before,
  &::after
    width: $hamburger-layer-width
    height: $hamburger-layer-height
    border-radius: $hamburger-layer-border-radius
    position: absolute
    transition-property: transform
    transition-duration: 0.15s
    transition-timing-function: ease

  &
    background-color: transparent

  &::before,
  &::after
    content: " "
    display: block

  &::before
    top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1

  &::after
    bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1

.hamburger-box
    .hamburger-inner
      transition-duration: 0.22s
      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)

      &::before
        transition: top 0.1s 0.11s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)

      &::after
        transition: bottom 0.1s 0.11s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)

    &.is-active
      .hamburger-inner
        transform: rotate(225deg)
        transition-delay: 0.1s
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)

        &::before
          top: 0
          transition: top 0.1s ease-out
          background-color: $hamburger-layer-color

        &::after
          bottom: 0
          transform: rotate(-90deg)
          transition: bottom 0.1s ease-out, transform 0.22s 0.1s cubic-bezier(0.215, 0.61, 0.355, 1)
          background-color: $hamburger-layer-color

.button-box
  position: relative
  transition-duration: 0.22s
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)
  .search-inner, .list-inner
    transition: filter 0.22s ease
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0
  .search-inner
    filter: opacity(100%)
  .list-inner
    filter: opacity(0%)
    transform: rotate(-180deg)

  &.is-active
    transform: rotate(180deg)
    transition-timing-function: ease-out
    .search-inner
      filter: opacity(0%)
    .list-inner
      filter: opacity(100%)


</style>
