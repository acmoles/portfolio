<template>
  <div class="container project-container">

    <div class="columns is-multiline">

      <div
        v-for="project in projects"
        :key="project.index"
        :id="project.index"
        class="column is-one-third"
        :class="project.color"
      >
        <router-link
          :to="{ name: project.route, params: {} }"
          @click.native="workNavigate"
          class="glass"
        >
          <div class="glass-header">
            <div v-if="headers" class="color-header" :class="project.color"></div>
            <div v-if="headers" class="flat-header" :class="project.color"></div>
            <div v-if="!headers" class="dark-header"></div>

            <div v-if="logoIcons" class="logo-container">
              <div class="project-logo" :class="{ 'larger': project.icon === 'dots' || project.icon === 'toucan' }">
                <span
                  v-if="project.icon === 'dots'"
                  class="icon is-large">
                  <i class="icon-dot-3 full-opacity"></i>
                </span>
                <span
                  v-else-if="project.icon === 'toucan'"
                  class="icon is-large">
                  <img src="/img/homepage/project-icons/toucan.svg" alt="project icon">
                </span>
                <span
                  v-else
                  class="icon is-medium">
                  <img :src="project.icon" alt="project icon">
                </span>
              </div>
            </div>


            <div
              class="glass-body content"
            >
              <div class="project-description">
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>
              </div>
            </div>

            <div class="hover-indicator">
              <span></span>
            </div>

          </div>

          <div :class="{ 'dark-footer' : !headers }" class="project-footer content">
            <p class="client">{{ project.client }}
              <span class="date">
                {{ project.date }}
              </span>
            </p>
          </div>

        </router-link>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Work',
  props: {
    headers: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      logoIcons: false,
      projects: [
        {
          index: 'onboarding',
          icon: 'toucan',
          color: 'blue',
          title: 'Optimising customer onboarding',
          route: 'onboarding',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
        },
        {
          index: 'personalisation',
          icon: '/img/homepage/project-icons/personalised.svg',
          color: 'green',
          title: 'Personalisation',
          route: 'personalisation',
          description: 'Personalisation',
          client: 'toucanBox',
          date: 'Q2 2018'
        },
        {
          index: 'wesen',
          icon: '/img/homepage/project-icons/wesen.svg',
          color: 'red',
          title: 'Building a jewellery brand with user generated products',
          route: 'wesen',
          description: 'Will a compelling product creation experience be rewarded with a purchase decision?',
          client: 'Wesen',
          date: 'Q1 2018'
        },
        {
          index: 'blkbrd',
          icon: '/img/homepage/project-icons/blkbrd.svg',
          color: 'black',
          title: 'Exploring a new dimension for messaging',
          route: 'blkbrd',
          description: 'Digital messages with a location in the physical world',
          client: 'BLKBRD',
          date: 'Q3 2017'
        },
        {
          index: 'toucanoo',
          icon: '/img/homepage/project-icons/toucanoo.svg',
          color: 'purple',
          title: 'Adding value to a physical product with digital content <br>',
          route: 'toucanoo',
          description: 'Can we address customer concern regarding value for money without increasing operational cost?',
          client: 'toucanBox',
          date: 'Q3 2017'
        },
        {
          index: 'more',
          icon: 'dots',
          color: 'yellow',
          title: 'Before 2016',
          route: 'pre2016',
          description: 'A selection for projects prior to 2016',
          client: 'Various',
          date: '< 2016'
        }
      ],
    }
  },
  methods: {
    workNavigate () {
      this.$events.$emit('fade-out-nav-menu');
      this.$events.$emit('exit-scroll-lock');
    }
  }
}
</script>

<style scoped lang="sass">

  @import '../sass/variables'

  .project-container
    @media screen and (max-width: $desktop)
      padding: 1.5em 0.75em 3em 0.75em
      max-width: 20em

  .glass
    overflow: hidden
    display: flex
    flex-direction: column
    justify-content: space-between
    flex-grow: 1
    height: 100%
    color: $white
    transition: transform 0.4s ease

  .glass-header
    position: relative
    display: flex
    flex-direction: column
    height: 100%

  .logo-container
    height: 4.5em
    display: flex
    justify-content: center
    align-items: center

  .project-logo
    position: relative
    height: 2em
    &.larger
      height: 3em
    .icon.is-medium
      width: 2em
      height: 2em
    .icon.is-large
      width: 3em
      height: 3em

  .color-header, .flat-header, .dark-header
    border-radius: $radius-large $radius-large 0 0

  .glass-body
    padding: 1em 0.75em
    position: relative
    height: 100%
    margin-bottom: 0 !important
    h3
      color: $white
      opacity: 0.95
      font-size: 1.2em
      transition: color 0.4s ease
      margin-bottom: 0.5em
    p
      opacity: 0.9

  .project-footer
    padding: 0.75em
    padding-top: 0.5em
    background: rgba($white, 0.9)
    border-radius: 0 0 $radius-large $radius-large
    color: $slate
    p
      font-size: 0.75em
      opacity: 0.5
      display: inline-flex
      justify-content: space-between
      width: 100%
    .icon-calendar::before
      font-size: 100%

  // Hover effects

  .hover-indicator
    height: 0.25em
    position: relative
    span
      position: absolute
      left: 0
      right: 0
      bottom: 0
      top: 0
      background: $darkBlue
      transition: transform 0.4s ease
      transform: translateX(-105%)

  .glass
    &:hover, &:active
      .hover-indicator
        span
          transform: translateX(0%)
  .router-link-exact-active
    &:hover, &:active
      .hover-indicator
        span
          transform: translateX(-105%)

  .blue
    .hover-indicator
      span
        background: $darkBlue

  .red
    .hover-indicator
      span
        background: darken($red, 25%)

  .yellow
    .hover-indicator
      span
        background: darken($darkYellow, 5%)

  .black
    .hover-indicator
      span
        background: darken($black, 10%)

  .green
    .hover-indicator
      span
        background: $darkGreen

  .purple
    .hover-indicator
      span
        background: $darkPurple

  // In menus specific styles

  .router-link-exact-active
    cursor: not-allowed
    .glass-body
      h3, p
        opacity: 0.5
  .dark-footer
    background-color: lighten($steel, 1.5%)
    p
      color: $silver
      opacity: 1

</style>
