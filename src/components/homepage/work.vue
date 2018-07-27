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
            <div class="project-logo">
              <span
                v-if="project.icon == 'dots'"
                class="icon is-large">
                <i class="icon-dot-3 full-opacity"></i>
              </span>
              <span
                v-else
                class="icon is-large">
                <img :src="project.icon" alt="project icon">
              </span>
            </div>
          </div>
          <div
            class="glass-body content"
            :class="{'all-rounded': !headers }"
          >
            <h4>{{ project.title }}</h4>
            <p>{{ project.description }}</p>
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
          icon: '/img/homepage/project-icons/personalised.svg',
          color: 'blue',
          title: 'Delight customers with a personalised experience',
          route: 'onboarding',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
        },
        {
          index: 'personalisation',
          icon: '/img/homepage/project-icons/personalised.svg',
          color: 'green',
          title: 'Delight customers with a personalised experience',
          route: 'personalisation',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
        },
        {
          index: 'wesen',
          icon: '/img/homepage/project-icons/personalised.svg',
          color: 'red',
          title: 'Delight customers with a personalised experience',
          route: 'personalisation',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
        },
        {
          index: 'blkbrd',
          icon: '/img/homepage/project-icons/personalised.svg',
          color: 'black',
          title: 'Delight customers with a personalised experience',
          route: 'onboarding',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
        },
        {
          index: 'toucanoo',
          icon: '/img/homepage/project-icons/personalised.svg',
          color: 'purple',
          title: 'Delight customers with a personalised experience',
          route: 'onboarding',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
        },
        {
          index: 'more',
          icon: 'dots',
          color: 'yellow',
          title: 'Delight customers with a personalised experience',
          route: 'onboarding',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
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

  .glass-header
    height: 80px
    // @media screen and (min-width: $desktop)
    //   height: 120px
    position: relative
    color: $white
    display: flex
    justify-content: center
    align-items: center

  .project-logo
    position: relative

  .color-header, .flat-header
    border-radius: $radius-large $radius-large 0 0

  .glass-body
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
