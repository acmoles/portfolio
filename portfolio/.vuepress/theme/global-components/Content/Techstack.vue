<template>
  <div class="box content techstack">

      <h4>Techstack</h4>

      <div class="techs-wrapper small">

        <div v-for="(t, i) in techs" class="columns is-mobile">
          <div class="column is-one-third">
            <p>{{ t.title }}</p>
          </div>
          <div class="column">
            <p>{{ t.description }}</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>


export default {

  props: {
    techs: Array,
  },


}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .box.techstack
    padding: 0
    h4
      padding: 1.1em 2em 0.9em 1em
      border-bottom: 2px solid $black
    .techs-wrapper
      padding: 1.25em
      padding-bottom: 2.5em
    .is-one-third
      color: $white-ter



</style>
