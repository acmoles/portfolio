<template>
  <div
    class="navbar-item has-dropdown"
    :class="[open ? 'is-active' : null, ]"
    aria-label="dropdown navigation"
  >
    <a
      class="navbar-link"
      role="button"
      :aria-label="dropdownAriaLabel"
      aria-haspopup="true"
      aria-controls="dropdown-menu"
      @click="setOpen(!open)"
    >
      <span class="link-text">{{ item.text }}</span>
    </a>
    <div
      class="navbar-dropdown is-boxed"
      role="menu"
    >
        <NavLink
          @focusin="setOpen(true)"
          @focusout="isLastItemOfArray(subItem, item.items) && setOpen(false)"
          v-for="(subItem, index) in item.items"
          :key="subItem.link || index"
          :item="subItem"
        />
    </div>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import last from 'lodash/last'

export default {
  components: { NavLink },

  data () {
    return {
      open: false
    }
  },

  props: {
    item: {
      required: true
    }
  },

  computed: {
    dropdownAriaLabel () {
      return this.item.ariaLabel || this.item.text
    },
    isSidebarOpen () {
      return this.$store.state.isSidebarOpen
    },
  },

  methods: {
    setOpen (value) {
      this.open = value
    },

    isLastItemOfArray (item, array) {
      return last(array) === item
    }
  },

  watch: {
    $route () {
      this.open = false
    },
    isSidebarOpen (latest, last) {
      this.open = false
    }
  }
}
</script>

<style lang="sass">
@import "../styles/variables.sass"
@import "../styles/mixins.sass"

.navbar-item.has-dropdown
  height: fit-content
  transition: opacity 0.3s ease, transform 0.3s ease
  .link-text
    @include opacity-filter-transition
  &:hover, &:focus
    .link-text
      filter: opacity(64%)
  &.is-active
    opacity: 1

.navbar-link:not(.is-arrowless)::after
    border-width: 2px
    border-radius: 0
    width: 0.5em
    height: 0.5em
    right: 1.25em
    opacity: 0.64
    transition: opacity 0.6s ease
    transform-origin: 50% 55%

.navbar-item.has-dropdown.is-active
    .navbar-link:not(.is-arrowless)::after
      opacity: 0.16

</style>
