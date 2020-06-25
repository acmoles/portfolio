<template>
  <section class="section" :class="padding">
    <div class="container is-fullhd content project-section">

      <div v-if="hasContent" class="columns">
        <div class="column is-two-thirds content" :class="rag">
          <slot name="content"></slot>
          <br>
        </div>
      </div>

      <div class="columns is-multiline">
        <div
        v-for="(p, i) in points"
        class="column is-one-third point"
        >

          <i class="icon is-large point-icon"><img :src="p.src" :alt="p.alt"/></i>
          <slot v-if="p.slot" :name="p.slot"></slot>
          <template v-else>
            <h4 class="point-title">{{ p.title }}</h4>
            <p>{{ p.description }}</p>
          </template>
        </div>
      </div>

    </div>
  </section>
</template>

<script>

export default {

  props: {
    points: Array,
    padding: String,
    rag: String
  },

  computed: {
    hasContent () {
      return !!this.$slots['content']
    },
  }


}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .point-icon
    border: 1.5px solid $silver
    border-radius: 50%
    margin-bottom: 2em

  .content .point-title
    line-height: 1.5
</style>
