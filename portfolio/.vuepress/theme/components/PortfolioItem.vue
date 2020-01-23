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
        const data = {
          child: this.$refs['article' + this.uid],
        }
        this.$emit('project-click', data)
      }
  }
}

</script>

<style lang="sass">

</style>
