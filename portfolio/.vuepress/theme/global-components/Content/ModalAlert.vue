<template>

  <div class="alert-modal">
    <div class="box with-action background-noise">
      <slot/>

      <div class="action-group">
        <a :href="url1" class="action-button background-noise no-fade" target="blank" rel="noopener noreferrer">
          <span>{{ label1 }}</span>
        </a>
        <a :href="url2" class="action-button background-noise no-fade" target="blank" rel="noopener noreferrer">
          <span>{{ label2 }}</span>
        </a>
      </div>

    </div>
  </div>

</template>

<script>

export default {

  props: {
    label1: String,
    label2: String,
    url1: String,
    url2: String,
  },

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .alert-modal
    max-width: 32em
    margin: 10em auto
    strong
      display: block
      font-size: 1.5em
      margin-bottom: 0.5em

  .action-group
    display: flex
    margin-top: 1em

  .box .action-group .action-button
    border-radius: 0 0 0 $radius-small
    box-shadow: none
    span
      justify-content: center
      padding: 0.75em
    &:nth-child(2)
      border-radius: 0 0 $radius-small 0
      border-left: solid 2px $black
      margin-left: 0
      margin-right: -1.5em



</style>
