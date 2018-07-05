<template>
  <div class="page">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <About/>
      </div>
      <div class="hero-foot">
        <button @click="scrollTo" class="hamburger" type="button">
          <span class="icon"><i class="icon-down-open-big full-opacity nav-icons"></i></span>
        </button>
      </div>
    </section>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <Work/>
      </div>
    </section>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <Contact/>
      </div>
    </section>
  </div>
</template>

<script>

import About from '@/components/homepage/about.vue'
import Work from '@/components/homepage/work.vue'
import Contact from '@/components/homepage/contact.vue'

export default {
  name: 'Home',
  components: {
    About,
    Work,
    Contact
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
