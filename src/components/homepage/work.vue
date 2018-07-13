<template>
  <div class="container">

    <div class="columns is-multiline">

      <div
        v-for="project in projects"
        :key="project.index"
        class="column is-one-third"
      >
        <router-link
          :to="{ name: project.route, params: {} }"
          class="glass"
        >
          <div class="glass-header">
            <div class="glass-color"></div>
            <div class="glass-gradient"></div>
            <span class="icon is-large">
              <i class="icon-dot-3 full-opacity"></i>
            </span>
          </div>
          <div class="glass-body content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-footer">
              <p class="client">{{ project.client }}</p>
              <p class="date">{{ project.date }}</p>
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
    prop: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      projects: [
        {
          icon: '/img/homepage/project-icons/personalised.svg',
          color: 'blue',
          title: 'Delight customers with a personalised experience',
          route: '/onboarding',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
        },
        {
          icon: '/img/homepage/project-icons/personalised.svg',
          color: 'red',
          title: 'Delight customers with a personalised experience',
          route: '/onboarding',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
        },
        {
          icon: '/img/homepage/project-icons/personalised.svg',
          color: 'yellow',
          title: 'Delight customers with a personalised experience',
          route: '/onboarding',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
        },
        {
          icon: '/img/homepage/project-icons/personalised.svg',
          color: 'black',
          title: 'Delight customers with a personalised experience',
          route: '/onboarding',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
        },
        {
          icon: '/img/homepage/project-icons/personalised.svg',
          color: 'green',
          title: 'Delight customers with a personalised experience',
          route: '/onboarding',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
        },
        {
          icon: '/img/homepage/project-icons/personalised.svg',
          color: 'white',
          title: 'Delight customers with a personalised experience',
          route: '/onboarding',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
        }
      ],
    }
  },
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
    @media screen and (min-width: $desktop)
      height: 120px
    position: relative
    color: $white
    display: flex
    justify-content: center
    align-items: center

  .glass-color, .glass-gradient
    border-radius: $radius-large $radius-large 0 0

  .glass-body
    background: rgba(255, 255, 255, 0.5)
    border-radius: 0 0 $radius-large $radius-large
    padding: 1em
    h3
      &:hover, &:focus, &:active
        color: $black
    .content
      color: $slate
      &:hover, &:focus, &:active
        color: $slate


</style>
