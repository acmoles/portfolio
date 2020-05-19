<template>
  <section class="section" :class="padding">
    <div class="container is-fullhd content project-section">

      <div v-if="content" class="columns">
        <div class="column is-two-thirds content">
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
            <h4>{{ p.title }}</h4>
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
    content: Boolean
  },


}

</script>

<style lang="sass">
  @import "../../styles/variables.sass"
  @import "../../styles/mixins.sass"

  .point-icon
    border: 1.5px solid $silver
    border-radius: 50%
    margin-bottom: 2em

</style>
