<template>
  <div class="container">

    <div class="columns is-multiline">

      <div
        v-for="project in projects"
        :key="project.index"
        :id="project.index"
        class="column is-one-third"
      >
        <router-link
          :to="{ name: project.route, params: {} }"
          class="glass"
        >
          <div class="glass-header">
            <div class="color-header" :class="project.color"></div>
            <div class="flat-header" :class="project.color"></div>
            <div class="project-logo">
              <span
                v-if="project.icon == 'dots'"
                class="icon is-large dot-grey">
                <i class="icon-dot-3 full-opacity"></i>
              </span>
              <span
                v-else
                class="icon is-large">
                <img :src="project.icon" alt="project icon">
              </span>
            </div>
          </div>
          <div class="glass-body content">
            <h4>{{ project.title }}</h4>
            <p>{{ project.description }}</p>
            <!-- <div class="project-footer columns is-mobile">
              <p class="client column">{{ project.client }}</p>
              <p class="date column">
                <span class="icon">
                  <i class="icon-calendar"></i>
                </span> {{ project.date }}
              </p>
            </div> -->
            <div class="project-footer">
              <p class="client">
              </span> {{ project.client }} | {{ project.date }}</p>
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
          color: 'red',
          title: 'Delight customers with a personalised experience',
          route: 'onboarding',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
        },
        {
          index: 'wesen',
          icon: '/img/homepage/project-icons/personalised.svg',
          color: 'yellow',
          title: 'Delight customers with a personalised experience',
          route: 'onboarding',
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
          color: 'green',
          title: 'Delight customers with a personalised experience',
          route: 'onboarding',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
        },
        {
          index: 'more',
          icon: 'dots',
          color: 'grey',
          title: 'Delight customers with a personalised experience',
          route: 'onboarding',
          description: 'A signup flow that increased conversion and contributed to record customer acquisition',
          client: 'toucanBox',
          date: 'Q3 2017'
        }
      ],
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

  .dot-grey
    color: $steel

  .color-header, .flat-header
    border-radius: $radius-large $radius-large 0 0

  .glass-body
    background: rgba(255, 255, 255, 0.9)
    border-radius: 0 0 $radius-large $radius-large
    padding: 0.75em
    color: $slate
    &:hover, &:focus, &:active
      color: $slate
    h4
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

</style>
