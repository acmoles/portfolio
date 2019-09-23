<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />

    <PageNav/>

    <slot name="bottom" />
  </main>
</template>

<script>
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageNav },
  mounted () {
  },

}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl';

.page {
  padding-bottom: 2rem;
  display: block;
}
</style>
