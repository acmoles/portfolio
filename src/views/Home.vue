<template>
  <div class="page">

    <section id="work" class="hero is-fullheight">
      <div class="hero-body">
        <div class="columns is-desktop is-gapless">
          <div class="column is-narrow">
            <About/>
          </div>
          <div class="column project-column">
            <Work
              :headers="true"
            />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>

import About from '@/components/about.vue'
import Work from '@/components/work.vue'
// import Contact from '@/components/contact.vue'

export default {
  name: 'Home',
  components: {
    About,
    Work,
    // Contact
  },
  mounted () {
    this.$events.$emit('replace-all-background');
  },
  methods: {
    scrollTo (event) {
      this.$events.$emit('scroll-trigger', event);
    }
  }
}
</script>

<style scoped lang="sass">

  @import '../sass/variables'

  .columns.is-gapless
    width: 100%
    min-height: 100vh

  .project-column
    display: flex
    align-items: center

  // .header-extension
  //   background: linear-gradient( rgba($white, 0), rgba($white, 0), rgba($white, 0), rgba($white, 0.35) )
  //   width: 100%
  //   @media screen and (min-width: $desktop)
  //     width: 13em

</style>
