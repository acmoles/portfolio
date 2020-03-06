<template>
  <section
    class="sidebar-group"
    :class="[
      {
        collapsable,
        'is-sub-group': depth !== 0
      },
      `depth-${depth}`
    ]"
  >
    <h1
      class="sidebar-heading title"
      :class="{ open }"
    >
      {{ item.title }}
    </h1>

      <SidebarLinks
        class="sidebar-group-items"
        :items="item.children"
        v-if="open || !collapsable"
        :sidebarDepth="item.sidebarDepth"
        :depth="depth + 1"
      />
  </section>
</template>

<script>
import { isActive } from '../../util'

export default {
  name: 'SidebarGroup',
  props: ['item', 'open', 'collapsable', 'depth'],
  beforeCreate () {
    this.$options.components.SidebarLinks = require('./SidebarLinks.vue').default
  },
  methods: { isActive }
}
</script>

<style lang="sass">
@import "../../styles/variables.sass"
@import "../../styles/mixins.sass"

.sidebar-group-items
  overflow: hidden
  display: flex
  li
    display: block
    flex-basis: 0
    flex-grow: 1
    flex-shrink: 1
</style>
