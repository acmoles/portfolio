<template>
  <iframe v-if="iframe" ref="loadIframe" class="lazyload" :class="{'lazyloaded': loaded}" :src="srcImage" :width="x" :height="y" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  <img v-else ref="loadImage" class="lazyload" :class="{'lazyloaded': loaded}" :src="srcImage" :alt="alt" loading="lazy" :width="x" :height="y"/>
</template>

<script>
export default {
  props: ['src', 'alt', 'iframe', 'x', 'y'],
  data: () => ({ observer: null, intersected: false, loaded: false }),
  computed: {
    srcImage() {
      return this.intersected ? this.src : '';
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      this.load(this.iframe);

      const image = entries[0];
      if (image.isIntersecting) {
        this.intersected = true;
        this.observer.disconnect();
        if (this.iframe) {
          console.log('observed iframe');
        }
      }
    });

    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
  methods: {
    load(iframe) {
      let name;
      if (iframe) {
        name = 'loadIframe';
      } else {
        name = 'loadImage';
      }
      this.$refs[name].onload = () => {
        this.loaded = true;
        console.log('loaded ', name);
      };
      this.$refs[name].onerror = (err) => {console.error(err)}
    }
  }
}
</script>
