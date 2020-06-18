<template>
  <section class="section is-large background-noise quote-section" :class="color">
    <b v-for="n in 128" class="particle"/>
    <div class="container is-fullhd content relative">
      <div class="columns">
        <div class="column is-two-thirds background-noise">
          <p class="subtitle">{{ quote }}</p>
          <p class="attribute">{{ attribute }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {

  props: {
    quote: String,
    attribute: String,
    color: String,
  },

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .quote-section
    background-color: darken($black, 3%)
    overflow: hidden
    &::after
      content: ' '
      position: absolute
      width: 100%
      height: 6em
      background-image: linear-gradient(0deg, rgba($pitch,0.00) 0%, rgba($pitch,0.42) 60%, $pitch 100%)
      top: 0
      opacity: 0.16

    .column
      background-color: darken($black, 3%)
      padding: 1em
    // .subtitle, .attribute
      // text-shadow: 0 0 0.75em $pitch, 0 0 2em $pitch

    .attribute
      color: $silver

  .particle
    position: absolute
    top: 0
    left: 0

    @for $i from 0 to 128
      $t: (1 + .01*random(100))
      $w: (1 + .01*random(100))*4px
      $h: (1 + .01*random(100))*4px

      &:nth-child(#{$i + 1})
        width: $w
        height: $h
        transform: translate(random(100)*1vw, (random(100)*0.38em - 2em)) rotateZ(random(100)*2deg)
        background: hsl(random(360), 100%, 65%)
        animation-duration: $t*2s
        animation-delay: 1.25s + (-.001*random(100)*$t)

  .green .particle
    @for $i from 0 to 128
      &:nth-child(#{$i + 1})
        background: hsl(167°, 68%, 13% + random(30))



</style>
