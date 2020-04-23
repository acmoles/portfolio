<template>
  <img :src="srcImage" />
</template>

<script>
export default {
  props: ['src'],
  data: () => ({ observer: null, intersected: false }),
  computed: {
    srcImage() {
      return this.intersected ? this.src : '';
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      const image = entries[0];
      if (image.isIntersecting) {
        // TODO add fade-in animation class 
        this.intersected = true;
        this.observer.disconnect();
      }
    });

    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  }
}
</script>
