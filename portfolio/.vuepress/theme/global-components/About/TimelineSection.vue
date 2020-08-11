<template>
  <section class="section" :class="padding">
      <div class="container is-fullhd content">
        <h2 class="timeline-title">Timeline</h2>
        <transition :name="transitionName" mode="out-in">
          <div
            v-for="n in numberOfPages"
            class="columns timeline-columns"
            :key="`page-${n}`"
            :ref="`page-${n}`"
            v-if="currentPage === n"
            :style="{ height: maxHeight + 'px' }"
          >

            <div
              v-for="i in 3"
              class="column"
            >
              <h4 class="timeline-year">{{ slotName( n, i ) === '2009' ? '< ' + slotName( n, i ) : slotName( n, i ) }}</h4>
              <slot :name="slotName( n, i )"></slot>
            </div>

          </div>
        </transition>

        <div class="columns">
          <div class="slider-controls-container column is-one-third">
            <div class="columns is-gapless">
              <div class="column is-one-quarter">
                <button class="button section-toggle back" :class="{'is-active': currentPage === 1}" type="button" @click="changePage('prev')">
                  <i class="icon" aria-hidden="true"><img src="/svg-icons/icon_right.svg" alt="right icon"></i> Back
                </button>
              </div>
              <div class="column">
                <button class="button section-toggle" :class="{'is-active': currentPage === numberOfPages}" type="button" @click="changePage('next')">
                  Forward <i class="icon" aria-hidden="true"><img src="/svg-icons/icon_right.svg" alt="right icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
</template>

<script>

export default {

  props: {
    padding: String
  },

  data () {
    return {
      currentPage: null,
      transitionName: 'next',
      maxHeight: null
    }
  },

  mounted () {
    this.$forceNextTick( () => {
      this.currentPage = this.numberOfPages
    })
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
    numberOfColumns () {
      return Object.keys(this.$slots).length
    },
    numberOfPages () {
      const moduloColumns = this.numberOfColumns % 3
      const multipleOfThree = this.numberOfColumns - moduloColumns
      return moduloColumns === 0 ? multipleOfThree / 3 : ( multipleOfThree / 3 ) + 1
    }
  },

  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === 'finished') {
        this.maxHeight = this.$refs['page-4'][0].offsetHeight
      }
    }
  },

  methods: {
    changePage (dir) {
      this.currentPage = dir === 'next' ? this.currentPage + 1 : this.currentPage - 1
      this.currentPage >= this.numberOfPages ? this.currentPage = this.numberOfPages : this.currentPage = this.currentPage
      this.currentPage <= 1 ? this.currentPage = 1 : this.currentPage = this.currentPage
      this.transitionName = dir
      // console.log('goto page ', this.currentPage)
    },
    slotName (page, index) {

      const base = 9
      const delta = ( (page - 1) * 3 ) + ( index - 1 )
      let year = base + delta < 10 ? '0' + (base + delta) : base + delta
      // Page 1 - 20, 19, 18 - delta(0, 1, 2)
      // Page 2 - 17, 16, 15 - delta(3, 4, 5)
      // Page 3 - 14, 13, 12 - delta(6, 7, 8)


      // index 1 - 3

      // Page 1 - 09, 10, 11 - delta(11, 10, 9)
      // Page 2 - 12, 13, 14 - delta(8, 7, 6)
      // Page 3 - 15, 16, 17 - delta(5, 4, 3)
      // Page 4 - 18, 19, 20 - delta(2, 1, 0)


      return `20${ year }`
    }
  }

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  h4.timeline-year
    margin-bottom: 3em

  h2.timeline-title
    display: none
    margin-bottom: 2em

  .section.is-timeline
    padding: 3rem 0 12rem 0

  @media screen and (max-width: $tablet - 1px)
    .timeline-columns
      flex-direction: column-reverse
      display: flex
    h2.timeline-title
      display: block
    .section.is-timeline
      padding: 0 0 12rem 0

  .slider-controls-container
    display: flex
    margin-top: 3em
    .columns
      width: 100%
    .section-toggle
      transition: color 0.3s ease
      padding: 0
      margin-right: 0
      text-align: left
      .icon
        transition: opacity 0.3s ease
        @media screen and (max-width: $tablet - 1px)
          visibility: hidden
      &.is-active
        cursor: default
        color: $slate
        .icon
          opacity: 0.24
          transform: rotate(0)
      &.back
        position: relative
        left: -1.5em
        .icon
          transform: rotate(180deg)
</style>
