<template>
  <div class="page">

    <section id="about" class="hero is-fullheight">
      <div class="hero-body first-section">
        <About/>
      </div>
      <div class="hero-foot">
        <button @click="scrollTo('work')" class="hamburger" type="button">
          <span class="icon"><i class="icon-down-open-big full-opacity nav-icons"></i></span>
        </button>
      </div>
    </section>

    <section id="work" class="hero is-fullheight">
      <div class="hero-body">
        <Work/>
      </div>
      <div class="hero-foot">
        <button @click="scrollTo('contact')" class="hamburger" type="button">
          <span class="icon"><i class="icon-down-open-big full-opacity nav-icons"></i></span>
        </button>
      </div>
    </section>

    <section id="contact" class="hero is-fullheight">
      <div class="hero-body last-section">
        <Contact/>
      </div>
      <div class="hero-foot">
        <button @click="scrollTo('about')" class="hamburger" type="button">
          <span class="icon"><i class="icon-up-open-big full-opacity nav-icons"></i></span>
        </button>
      </div>

      <FooterNav
        :back="false"
        :color="'is-dark'"
      />
    </section>

  </div>
</template>

<script>

import About from '@/components/homepage/about.vue'
import Work from '@/components/homepage/work.vue'
import Contact from '@/components/homepage/contact.vue'
import FooterNav from '@/components/footer-nav.vue'

export default {
  name: 'Home',
  components: {
    About,
    Work,
    Contact,
    FooterNav
  },
  methods: {
    scrollTo (event) {
      let path = 'path';
      this.$events.$emit('scroll', path);
    }
  }
}
</script>

<style scoped lang="sass">


</style>
