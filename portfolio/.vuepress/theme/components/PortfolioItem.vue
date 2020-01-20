<template>
  <router-link
    :to="{ name: src, params: {animate: true} }"
    class="grid-item"
    :class="type"
  >
    <article
      class="notification"
      :class="background"
      @click="emitBoundingRect($event)"
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
    type: String,
    title: String,
    subtitle: String,
    src: String,
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
  },

  mounted() {
  },

  methods: {
      emitBoundingRect(event) {
        const data = {
          rect: event.target.getBoundingClientRect(),
          color: this.background
        }
        this.$emit('project-click', data)
      }
  }
}

</script>

<style lang="sass">

</style>
