<template>
  <div class="page">

    <section id="scroll-area" class="hero is-fullheight">
      <div class="hero-body"></div>
    </section>

    <section id="work" class="hero is-fullheight">
      <div class="hero-body">
        <Work
          :headers="true"
        />
      </div>
      <div class="hero-foot">
        <button @click="scrollTo('about')" class="hamburger" type="button">
          <span class="icon"><i class="icon-down-open-big full-opacity nav-icons"></i></span>
        </button>
      </div>
    </section>

    <section id="about" class="hero is-fullheight">
      <div class="hero-body">
        <About/>
      </div>
      <div class="hero-foot">
        <button @click="scrollTo('work')" class="hamburger" type="button">
          <span class="icon"><i class="icon-up-open-big full-opacity nav-icons"></i></span>
        </button>
      </div>
    </section>

    <!-- <section id="contact" class="hero is-fullheight">
      <div class="hero-body">
        <Contact/>
      </div>
      <div class="hero-foot">
        <button @click="scrollTo('about')" class="hamburger" type="button">
          <span class="icon"><i class="icon-up-open-big full-opacity nav-icons"></i></span>
        </button>
      </div>
    </section> -->

  </div>
</template>

<script>

import About from '@/components/homepage/about.vue'
import Work from '@/components/homepage/work.vue'
// import Contact from '@/components/homepage/contact.vue'

export default {
  name: 'Home',
  components: {
    About,
    Work,
    // Contact
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

  .hero-foot
    display: none
    padding: 1em
    position: absolute
    width: 100%
    bottom: 0
    @media screen and (min-width: $desktop)
      display: flex
      justify-content: flex-end
    // Centre on very large screens?
    // @media screen and (min-width: $fullhd)
    //   padding: 1.5em
    //   justify-content: center

</style>
