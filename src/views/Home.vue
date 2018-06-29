<template>
  <div class="page">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <About/>
      </div>
    </section>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Full Height title 1
          </h1>
          <h2 class="subtitle">
            Full Height subtitle
          </h2>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Full Height title 1
          </h1>
          <h2 class="subtitle">
            Full Height subtitle
          </h2>
        </div>
      </div>
    </section>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Full Height title 1
          </h1>
          <h2 class="subtitle">
            Full Height subtitle
          </h2>
        </div>
      </div>
    </section>
    </div>
</template>

<script>

import About from '@/components/homepage/about.vue'

export default {
  name: 'home',
  components: {
    About,
  }
}
</script>

<style scoped lang="sass">


</style>
