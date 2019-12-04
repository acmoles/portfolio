<template>
  <div
    class="dropdown-wrapper"
    :class="{ open }"
  >
    <button
      class="dropdown-title"
      type="button"
      :aria-label="dropdownAriaLabel"
      @click="setOpen(!open)"
    >
      <span class="title">{{ item.text }}</span>
      <span
        class="arrow"
        :class="open ? 'down' : 'right'"
      ></span>
    </button>

    <ul
      class="nav-dropdown"
      v-show="open"
    >
      <li
        class="dropdown-item"
        :key="subItem.link || index"
        v-for="(subItem, index) in item.items"
      >
        <h4 v-if="subItem.type === 'links'">{{ subItem.text }}</h4>

        <ul
          class="dropdown-subitem-wrapper"
          v-if="subItem.type === 'links'"
        >
          <li
            class="dropdown-subitem"
            :key="childSubItem.link"
            v-for="childSubItem in subItem.items"
          >
            <NavLink
              @focusout="
                isLastItemOfArray(childSubItem, subItem.items) &&
                isLastItemOfArray(subItem, item.items) &&
                setOpen(false)
              "
              :item="childSubItem"/>
          </li>
        </ul>

        <NavLink
          v-else
          @focusout="isLastItemOfArray(subItem, item.items) && setOpen(false)"
          :item="subItem"
        />
      </li>
    </ul>
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
