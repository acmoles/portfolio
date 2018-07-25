<template>
  <div class="container glass">

    <div class="glass-header"></div>

    <div class="glass-body">

      <div class="glass-ghost-body">
        <div class="glass-body-titles columns is-mobile is-gapless">
          <div class="profile ghost-profile column">
            <figure class="image">
            </figure>
          </div>
        </div>
      </div>

      <div class="glass-body">

        <div class="glass-body-titles columns is-mobile is-gapless">
          <div class="profile column">
            <figure class="image">
              <img src="/img/homepage/photo.jpg">
            </figure>
          </div>
          <div class="glass-body-details column">
            <h1 class="title">
              Anthony Moles
            </h1>
            <h2 class="subtitle">
              Product Designer
            </h2>
            <p class="location">
              <span class="icon is-small">
                <i class="icon-location"></i>
              </span>
              Berlin, Germany
            </p>
          </div>
        </div>

        <div class="glass-body-content">
          <div class="glass-body-actions columns is-mobile is-variable is-1">
            <div class="column">
              <a class="button is-primary is-rounded" @click="scrollTo('work')">Work</a>
            </div>
            <div class="column">
              <a class="button is-success is-rounded is-outlined" @click="scrollTo('contact')">Message</a>
            </div>
            <div class="column is-narrow">
              <a class="button is-rounded options">
                <span class="icon is-small">
                  <i class="icon-dot-3 full-opacity"></i>
                </span>
              </a>
            </div>
          </div>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut libero vitae dui vehicula aliquet.
              Nulla euismod tincidunt eros, sit amet cursus odio volutpat id.
            </p>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
              Nam eget tortor nisl. Ut ut libero vitae dui vehicula aliquet.
            </p>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'About',
  props: {
    prop: {
      type: Number,
      default: 1
    }
  },
  methods: {
    scrollTo (event) {
      this.$events.$emit('scroll-trigger', event);
    }
  }
}
</script>

<style scoped lang="sass">

  @import '../../sass/variables'

  .glass
    border-radius: $radius-large
    overflow: hidden
    background: rgba(255, 255, 255, 0.5)
    display: flex
    flex-direction: column

  // Translucent header

  .glass-header
    height: 80px
    flex-grow: 0
    @media screen and (min-width: $desktop)
      height: 238px

  // Body content

  .glass-body
    position: relative
    display: flex
    flex-direction: column
    @media screen and (min-width: $desktop)
      flex-direction: row

  // Profile pic and details

  .glass-ghost-body
    background: $white
    opacity: 0.75
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    flex-grow: 1
    margin-bottom: 0 !important

  .ghost-profile
    .image
      border-color: $white
      background: $white

  .columns.glass-body-titles
    width: 100%
    margin-bottom: -0.5em
    @media screen and (min-width: $desktop)
      flex-direction: column
      flex: none
      width: 33.3333%

    .profile
      position: relative
      top: -64px
      margin-bottom: -64px
      flex: none
      @media screen and (min-width: $desktop)
        top: -128px
        flex: 1
      .image
        margin: 0 0.75em
        height: 128px
        width: 128px
        border: solid 5px transparent
        border-radius: $radius-rounded
        overflow: hidden
        @media screen and (min-width: $desktop)
          margin: 0 auto
          border-width: 10px
          height: 256px
          width: 256px
        img
          mix-blend-mode: multiply

    .glass-body-details
      position: relative
      @media screen and (min-width: $desktop)
        margin-left: 0
        // top: -128px
        top: -64px
        text-align: center

    .title
      font-size: 1.5rem
      margin-top: 0.25em
      @media screen and (min-width: $tablet)
        font-size: 2rem

    .subtitle
      font-size: 1rem
      margin-bottom: 0.75em
      @media screen and (min-width: $tablet)
        font-size: 1.25rem

    .location
      font-size: 0.75rem
      opacity: 0.5

  // Content

  .glass-body-content
    padding: 0.75em
    padding-bottom: 1.75em

  .glass-body-actions
    margin-top: 0.5em
    @media screen and (min-width: $desktop)
      margin-top: 0
      max-width: 400px
    .button
      width: 100%
    .options
      background-color: transparent
      color: $extraDarkSmoke
      border-color: $extraDarkSmoke
      &:active, &:hover
        border-color: darken($extraDarkSmoke, 10%)
      padding-left: 0.75em
      padding-right: 0.75em
      .icon
        position: relative
        top: 0.1em
</style>
