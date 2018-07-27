<template>
  <div class="container">

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
          @click.native="exitScrollLock"
          class="glass"
        >
          <div
            v-if="headers"
            class="glass-header"
          >
            <div class="color-header" :class="project.color"></div>
            <div class="flat-header" :class="project.color"></div>
            <div class="project-logo" :class="{ 'unlimited': project.icon === 'dots' || project.icon === 'toucan' }">
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
            :class="{'all-rounded': !headers }"
          >
            <div class="project-description">
              <h4>{{ project.title }}</h4>
              <p>{{ project.description }}</p>
            </div>
            <div class="project-footer">
              <p class="client">{{ project.client }} | {{ project.date }}</p>
            </div>
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
          title: 'Adding value to a physical product with digital content',
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
          route: 'earlier',
          description: 'A selection for projects prior to 2016',
          client: 'Various',
          date: '< 2016'
        }
      ],
    }
  },
  methods: {
    exitScrollLock () {
      this.$events.$emit('exit-scroll-lock', event);
    }
  }
}
</script>

<style scoped lang="sass">

  @import '../../sass/variables'

  .glass
    overflow: hidden
    display: flex
    flex-direction: column
    flex-grow: 1
    height: 100%

  .glass-header
    height: 80px
    flex-shrink: 0
    // @media screen and (min-width: $desktop)
    //   height: 120px
    position: relative
    color: $white
    display: flex
    justify-content: center
    align-items: center

  .project-logo
    position: relative
    height: 36px
    &.unlimited
      height: auto

  .color-header, .flat-header
    border-radius: $radius-large $radius-large 0 0

  .glass-body
    height: 100%
    display: flex
    flex-direction: column
    justify-content: space-between
    background: rgba(255, 255, 255, 0.9)
    border-radius: 0 0 $radius-large $radius-large
    &.all-rounded
      border-radius: $radius-large
    padding: 0.75em
    color: $slate
    &:hover, &:focus, &:active
      color: $slate
    h4
      transition: color 0.4s ease
      margin-bottom: 0.5em
      &:hover, &:focus, &:active
        color: $black
    p
      margin-bottom: 1.5em
      &.client
        margin-bottom: 0

  .project-footer
    p
      font-size: 0.75em
      opacity: 0.5

  // Color dependent hover effects

  .blue
    a:hover, a:active, a:active
      h4
        color: $darkBlue

  .red
    a:hover, a:active, a:active
      h4
        color: $red

  .yellow
    a:hover, a:active, a:active
      h4
        color: $darkYellow

  .orange
    a:hover, a:active, a:active
      h4
        color: $darkOrange

  .black
    a:hover, a:active, a:active
      h4
        color: $slate

  .green
    a:hover, a:active, a:active
      h4
        color: $darkGreen

  .grey
    a:hover, a:active, a:active
      h4
        color: $silver

  .purple
    a:hover, a:active, a:active
      h4
        color: $darkPurple

  // In menus specific styles

  .router-link-exact-active
    cursor: not-allowed
    .glass-body
      h4, p
        opacity: 0.5

  .router-link-exact-active
    h4
      color: $slate !important


</style>
