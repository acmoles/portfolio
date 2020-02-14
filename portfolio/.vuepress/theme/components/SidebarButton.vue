<template>
  <button
    class="sidebar-button"
    :class="{ 'hamburger hamburger--spin': purpose === 'menu' }"
    type="button"
    :aria-label="purpose"
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

    <span
      v-else-if="purpose === 'search'"
      aria-hidden="true"
      class="button-box icon is-medium"
      :class="{ 'is-active': isSearchboxOpen }"
    >
      <span aria-hidden="true" class="button-inner search-inner">Search</span>
      <span aria-hidden="true" class="button-inner list-inner">List</span>
    </span>

    <span
      v-else-if="purpose === 'goto-top'"
      aria-hidden="true"
      class="icon is-medium"
    >
      Gototop
    </span>
  </button>
</template>

<script>
  export default {
    props: {
      purpose: {
        required: true
      }
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
@import "../styles/variables.sass"

$hamburger-layer-width         : 1.5em
$hamburger-layer-height        : 2px
$hamburger-layer-spacing       : 4px
$hamburger-layer-color         : $white-ter
$hamburger-layer-border-radius : 0px
$hamburger-active-layer-color: $white-ter

$hamburger-hover-use-filter   : true
$hamburger-hover-filter       : opacity(50%)

.sidebar-button
  width: 6em
  height: 6em
  padding: 0
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer

  transition-property: filter
  transition-duration: 0.15s
  transition-timing-function: linear

  // Normalize (<button>)
  font: inherit
  color: inherit
  text-transform: none
  background-color: transparent
  border: 0
  margin: 0
  overflow: visible

  &:hover
    filter: $hamburger-hover-filter

.hamburger
    // .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after
      background-color: $hamburger-active-layer-color

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
    background-color: $hamburger-layer-color
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


        &::after
          bottom: 0
          transform: rotate(-90deg)
          transition: bottom 0.1s ease-out, transform 0.22s 0.1s cubic-bezier(0.215, 0.61, 0.355, 1)

.button-box
  transition-duration: 0.22s
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)
  .search-inner, .list-inner
    transition: filter 0.22s ease
    position: absolute
  .search-inner
    filter: opacity(100%)
  .list-inner
    filter: opacity(0%)
    transform: rotate(-180deg)

  &.is-active
    transform: rotate(180deg)
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
    .search-inner
      filter: opacity(0%)
    .list-inner
      filter: opacity(100%)


</style>
