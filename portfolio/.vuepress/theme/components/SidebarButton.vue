<template>
  <button
    class="hamburger hamburger--spin"
    :class="{ 'is-active': isSidebarOpen }"
    type="button"
    aria-label="menu"
    aria-expanded="false"
    @click="$emit('toggle-sidebar')"
  >
    <span aria-hidden="true" class="hamburger-box">
      <span aria-hidden="true" class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script>
  export default {
    computed: {
      isSidebarOpen () {
        return this.$store.state.isSidebarOpen
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
$hamburger-active-hover-filter: $hamburger-hover-filter

.hamburger
  width: 6em
  height: 6em
  padding: 0
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer

  transition-property: opacity, filter
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

  position: absolute
  right: 0

  &:hover
    filter: $hamburger-hover-filter

  &.is-active
    &:hover
      filter: $hamburger-active-hover-filter

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

.hamburger--spin
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

</style>
