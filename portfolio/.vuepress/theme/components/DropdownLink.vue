<template>
  <div
    class="navbar-item has-dropdown is-hoverable"
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
      <!-- <span
      class="icon is-small arrow"
      :class="[open ? 'down' : 'right']"
      >
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span> -->
    </a>

    <div
      class="navbar-dropdown is-boxed"
      role="menu"
      v-show="open"
    >
        <NavLink
          @focusout="isLastItemOfArray(subItem, item.items) && setOpen(false)"
          v-for="(subItem, index) in item.items"
          :key="subItem.link || index"
          :item="subItem"
        />
    </div>
  </div>
</template>

<!-- <div class="dropdown-trigger">
  <button
    type="button"
    class="button"
    :aria-label="dropdownAriaLabel"
    aria-haspopup="true"
    aria-controls="dropdown-menu"
    @click="setOpen(!open)"
  >
    <span class="title">{{ item.text }}</span>
    <span
    class="icon is-small arrow"
    :class="[open ? 'down' : 'right']"
    >
      <i class="fas fa-angle-down" aria-hidden="true"></i>
    </span>
  </button>
</div>

<div
  class="dropdown-menu"
  role="menu"
  v-show="open"
>
  <div class="dropdown-content">
    <NavLink
      class="dropdown-item"
      @focusout="isLastItemOfArray(subItem, item.items) && setOpen(false)"
      v-for="(subItem, index) in item.items"
      :key="subItem.link || index"
      :item="subItem"
    />
  </div>
</div> -->

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
    }
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
    }
  }
}
</script>

<style lang="sass">
@import "../styles/variables.sass"

</style>
