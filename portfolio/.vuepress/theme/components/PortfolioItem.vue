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

      <p class="title">{{ title }}</p>
      <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>

      <p v-if="case1">{{ case1 }}</p>
      <p v-if="case2">{{ case2 }}</p>
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
        let child = this.$refs['article' + this.uid]
        const data = {
          childOffsetLeft: child.offsetLeft,
          childOffsetTop: child.offsetTop,
          childOffsetWidth: child.offsetWidth,
          childOffsetHeight: child.offsetHeight,
        }
        this.$emit('project-click', data)
      }
  }
}

</script>

<style lang="sass">

</style>
