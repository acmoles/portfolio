<template>
  <div class="container project-container">

    <div class="columns is-multiline is-desktop">

      <div
        v-for="project in projects"
        :key="project.index"
        :id="project.index"
        class="column is-one-third-desktop"
        :class="project.color"
      >
        <router-link
          :to="{ name: project.route, params: {} }"
          event=""
          @click.native="workNavigate(project.route)"
          class="glass"
        >
          <div class="glass-header">
            <div v-if="headers" class="color-header" :class="project.color"></div>
            <div v-if="headers" class="flat-header" :class="project.color"></div>
            <div v-if="!headers" class="dark-header"></div>

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
      projects: [
        {
          index: 'onboarding',
          icon: 'toucan',
          color: 'blue',
          title: 'Refining the value proposition',
          route: 'onboarding',
          description: 'How we clarified what we offer, added details which built confidence and worked hard to make sign up effortless',
          client: 'toucanBox',
          date: 'Q3 2017'
        },
        {
          index: 'personalisation',
          icon: '/img/homepage/project-icons/personalised.svg',
          color: 'green',
          title: 'Increasing satisfaction with a personalised experience',
          route: 'personalisation',
          description: 'When resources are tight, a dive into product strategy can identify the most promising opportunity and sketch a vision',
          client: 'toucanBox',
          date: 'Q2-3 2018'
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
          description: 'What meaning can we derive from digital messages with a location in the physical world?',
          client: 'BLKBRD',
          date: 'Q3 2017'
        },
        {
          index: 'toucanoo',
          icon: '/img/homepage/project-icons/toucanoo.svg',
          color: 'purple',
          title: 'Adding value to a physical product with digital content',
          route: 'toucanoo',
          description: 'Can we address customer concern about value for money without increasing operational cost?',
          client: 'toucanBox',
          date: 'Q1 2017 (Q1 2018)'
        },
        {
          index: 'more',
          icon: 'dots',
          color: 'yellow',
          title: 'Looking back before 2016',
          route: 'pre2016',
          description: 'Take a look at a curated selection of my less recent work.',
          client: 'Various',
          date: 'X < 2016'
        }
      ],
    }
  },
  mounted () {
    window.addEventListener('resize', this.equalHeights);
    this.$nextTick(() => {
      this.equalHeights();
    });
  },
  methods: {
    workNavigate (route) {
      // :to="{ name: project.route, params: {} }"
      if (route !== this.$router.currentRoute.name) {
        this.$events.$emit('fade-out-overlay-body');
        this.$router.push('/' + route);
      }

    },
    equalHeights () {
      if (window.innerWidth > 1088) {
        let topRow = document.getElementById('onboarding'),
        bottomRow = document.getElementById('more');

        topRow.removeAttribute('style');
        bottomRow.removeAttribute('style');

        let topHeight = window.getComputedStyle(topRow, null).getPropertyValue('height'),
        bottomHeight = window.getComputedStyle(bottomRow, null).getPropertyValue('height');

        if ( topHeight > bottomHeight + 1 ) {
          bottomRow.style.height = topHeight;
        } else {
          topRow.style.height = bottomHeight;
        }
      }
    }
  }
}
</script>

<style scoped lang="sass">

  @import '../sass/variables'

  .column
    padding: 1em
    @media screen and (min-width: $largeformat)
      padding: 1.5em

  // .project-container
  //   @media screen and (max-width: $desktop)
  //     padding: 1.5em 0.75em 3em 0.75em
  //     max-width: 20em

  .glass
    overflow: hidden
    display: flex
    flex-direction: column
    justify-content: space-between
    flex-grow: 1
    height: 100%
    color: $white

  .glass-header
    position: relative
    display: flex
    flex-direction: column
    height: 100%

  .color-header, .flat-header, .dark-header
    border-radius: $radius-large $radius-large 0 0

  .glass-body
    padding: 1.25em 2.5em 1em 1.5em
    @media screen and (min-width: $largeformat)
      padding: 2em 4em 1.6em 2.4em
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
    padding: 1em
    padding-top: 0.75em
    background: rgba($white, 0.9)
    border-radius: 0 0 $radius-large $radius-large
    color: $slate
    p
      font-size: 0.75em
      opacity: 0.5
      display: inline-flex
      justify-content: space-between
      width: 100%

  // Hover effects

  .hover-indicator
    height: 6px
    position: relative
    overflow: hidden
    span
      position: absolute
      left: 0
      right: 0
      bottom: 0
      top: 0
      background: $darkBlue
      transition: transform 0.4s ease
      transform: translateY(105%)

  .glass
    &:hover, &:active
      .hover-indicator
        span
          transform: translateY(0%)
  .router-link-exact-active
    &:hover, &:active
      .hover-indicator
        span
          transform: translateY(105%)

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
