<template>
  <div
    class="navbar-item has-dropdown"
    :class="[open ? 'is-active' : null, ]"
    aria-label="dropdown navigation"
  >
    <a
      class="navbar-link is-arrowless"
      role="button"
      :aria-label="dropdownAriaLabel"
      aria-haspopup="true"
      aria-controls="dropdown-menu"
      @click="setOpen(!open)"
    >
      <span class="link-text">{{ item.text }}</span>
    </a>
    <div
      class="navbar-dropdown is-boxed background-noise"
      role="menu"
    >
        <NavLink
          @focusin="setOpen(true)"
          @focusout="isLastItemOfArray(subItem, item.items) && setOpen(false)"
          v-for="(subItem, index) in item.items"
          :key="subItem.link || index"
          :item="subItem"
          class="dropdown-item no-fade"
        />
    </div>
  </div>
</template>

<script>
import NavLink from '@theme/components/nav/NavLink.vue'
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

      if (value && typeof value === 'boolean') {
        setTimeout(() => {
          document.getElementById('app').addEventListener('click', this.setOpen, false)
        }, 250)
      } else {
        this.open = false
        document.getElementById('app').removeEventListener('click', this.setOpen, false)
      }
    },

    unfocus (value) {
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
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"

.navbar
  .navbar-item.has-dropdown
    height: fit-content
    &.is-active
      .navbar-link, .navbar-link:hover, .navbar-link:active
        color: $white
        opacity: 1
        .icon
          opacity: 1

@media screen and (max-width: $desktop)
  .navbar-item.has-dropdown
    .navbar-dropdown
      display: none
    &.is-active
      .navbar-dropdown
        display: block
  .navbar-dropdown, .light .navbar-dropdown
    a.navbar-item
      opacity: 1
      color: $button-custom-text-color


// TODO: Not used
.navbar-link:not(.is-arrowless)::after
    border-width: 2px
    border-radius: 0
    width: 0.5em
    height: 0.5em
    right: 1.25em
    opacity: 0.64
    transition: filter 0.3s ease
    transform-origin: 50% 55%

.navbar-item.has-dropdown.is-active
    .navbar-link:not(.is-arrowless)::after
      opacity: 0

.dropdown-item
  transition: $button-transition

</style>
