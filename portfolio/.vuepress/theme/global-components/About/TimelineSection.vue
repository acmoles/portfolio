<template>
  <section class="section" :class="padding">
      <div class="container is-fullhd content">
        <transition :name="transitionName" mode="out-in">
          <div
            v-for="n in numberOfPages"
            class="columns"
            :key="`page-${n}`"
            :ref="`page-${n}`"
            v-if="currentPage === n"
            :style="{ height: maxHeight + 'px' }"
          >

            <div
              v-for="i in 3"
              class="column"
            >
              <h4 class="timeline-year">{{ slotName( n, i ) === '2009' ? slotName( n, i ) + ' >' : slotName( n, i ) }}</h4>
              <slot :name="slotName( n, i )"></slot>
            </div>

          </div>
        </transition>

        <div class="slider-controls-container">
          <button class="button section-toggle back" :class="{'is-active': currentPage === 1}" type="button" @click="changePage('prev')">
            <i class="icon" aria-hidden="true"><img src="/svg-icons/icon_right.svg" alt="right icon"></i> Back
          </button>
          <button class="button section-toggle" :class="{'is-active': currentPage === numberOfPages}" type="button" @click="changePage('next')">
            Next <i class="icon" aria-hidden="true"><img src="/svg-icons/icon_right.svg" alt="right icon"></i>
          </button>
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
      currentPage: 1,
      transitionName: 'next',
      maxHeight: null
    }
  },

  // mounted () {
  //   this.$forceNextTick( () => {
  //     setTimeout( () => {
  //
  //     }, 1)
  //   })
  // },

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
        this.maxHeight = this.$refs['page-1'][0].offsetHeight
      }
    }
  },

  methods: {
    changePage (dir) {
      this.currentPage = dir === 'next' ? this.currentPage + 1 : this.currentPage - 1
      this.currentPage >= this.numberOfPages ? this.currentPage = this.numberOfPages : this.currentPage = this.currentPage
      this.currentPage <= 1 ? this.currentPage = 1 : this.currentPage = this.currentPage
      this.transitionName = dir
      console.log('goto page ', this.currentPage)
    },
    slotName (page, index) {
      const base = 20
      const delta = ( (page - 1) * 3 ) + ( index - 1 )
      let year = base - delta < 10 ? '0' + (base - delta) : base - delta
      // Page 1 - 20, 19, 18 - delta(0, 1, 2)
      // Page 2 - 17, 16, 15 - delta(3, 4, 5)
      // Page 3 - 14, 13, 12 - delta(6, 7, 8)
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

  .section.is-timeline
    padding: 3rem 0 18rem 0
    @media screen and (max-width: $desktop)
      padding: 3rem 0 12rem 0



  .slider-controls-container
    display: flex
    margin-top: 3em
    justify-content: flex-end
    .section-toggle
      transition: color 0.3s ease
      padding: 0
      margin-left: 1.5em
      margin-right: 0
      .icon
        transition: opacity 0.3s ease
      &.is-active
        cursor: default
        color: $slate
        .icon
          opacity: 0.24
          transform: rotate(0)
      &.back .icon
        transform: rotate(180deg)
</style>
