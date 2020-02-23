<template>
  <router-link
    :to="path"
    class="grid-item"
    :class="type"
  >
    <article
      class="notification"
      :class="background"
      @click="emitBoundingRect($event)"
      :ref="'article' + uid"
    >
      <slot></slot>

      <p class="small-title">{{ title }}</p>
      <h2 v-if="subtitle">{{ subtitle }}</h2>

      <p class="case" v-if="case1">{{ case1 }}</p>
      <p class="case" v-if="case2">{{ case2 }}</p>
    </article>
  </router-link>
</template>

<script>

export default {

  props: {
    uid: Number,
    type: String,
    title: String,
    subtitle: String,
    path: String,
    case1: String,
    case2: String,
    background: String
  },

  data () {
    return {
      transfer: false
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    }
  },

  mounted() {
  },

  methods: {
      emitBoundingRect(event) {
        const child = this.$refs['article' + this.uid]
        const rect = child.getBoundingClientRect()
        const data = {
          childLeft: rect.x,
          childTop: child.offsetTop,
          childWidth: rect.width,
          childHeight: rect.height,
        }
        this.$emit('project-click', data)
      }
  }
}

</script>

<style lang="sass">
@import "../styles/variables.sass"

.notification
  &.orange
    background-color: $orange
  &.dark
    background-color: $steel
  &.stompy-robot
    background-color: $steel
  &.green
    background-color: $green
  &.purple
    background-color: $purple
  &.blue
    background-color: $blue
  &.yellow
    background-color: $darkYellow
  &.random
    background-color: $extraDarkSmoke
  &.pink
    background-color: $pink
  &.als
    background-color: $silver

.grid-item
  box-shadow: 0 2.67em 1.34em 0 rgba($pitch,0.16)
  .notification
    color: $white-ter
  &:hover
    .notification
      color: $grey-light
    .case
      background: rgba($white, 0.2)
  &.double-right, &.double-left
    .small-title, h2
      width: 42%

.case
  display: inline-flex
  font-size: .75em
  background: rgba($white, 0.1)
  padding: 0.5em .75em
  margin: 2em 1em 0 0
  border-radius: $radius-small

.blue
  .case
    background: rgba($white, 0.2)

</style>
