<template>
  <section class="section" :class="padding">
      <div class="container is-fullhd">

        <div v-if="hasContent" class="columns">
          <div class="column is-two-thirds content" :class="rag">
            <slot name="content"></slot>

            <template v-if="hasSecondPageSlot">
              <button class="button section-toggle" :class="{'is-active': currentPage === 1}" type="button" @click="changePage('prev')">
                {{ page1Label }} <i class="icon" aria-hidden="true"><img src="/svg-icons/icon_right.svg" alt="right icon"></i>
              </button>
              <button class="button section-toggle" :class="{'is-active': currentPage === 2}" type="button" @click="changePage('next')">
                {{ page2Label }} <i class="icon" aria-hidden="true"><img src="/svg-icons/icon_right.svg" alt="right icon"></i>
              </button>
            </template>

            <br v-else>
          </div>
        </div>

        <div class="columns">

          <div class="column is-two-thirds">
            <template v-if="hasSecondPageSlot">
              <transition :name="transitionName" mode="out-in">
                <div ref="page-1" key="page-1" v-if="currentPage === 1">
                  <slot></slot>
                </div>
                <div ref="page-2" key="page-2" v-else :style="{ height: maxHeight + 'px' }">
                  <slot name="page2"></slot>
                </div>
              </transition>
            </template>

            <template v-else>
              <slot></slot>
            </template>
          </div>

          <div v-if="aside" class="column" :class="columnOffset">
            <slot name="aside"></slot>
          </div>

        </div>

      </div>
    </section>
</template>

<script>

export default {

  props: {
    aside: Boolean,
    padding: String,
    columnOffset: String,
    page1Label: String,
    page2Label: String,
    rag: String,
  },

  watch: {
    pageLoadingStatus (latest, last) {
      if (latest === 'finished' && this.$refs['page-1']) {
        this.maxHeight = this.$refs['page-1'].offsetHeight
      }
    }
  },

  data () {
    return {
      currentPage: 1,
      transitionName: 'next',
      maxHeight: null
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    },
    hasSecondPageSlot () {
      return !!this.$slots['page2']
    },
    hasContent () {
      return !!this.$slots['content']
    },
  },

  methods: {
    changePage (dir) {
      this.currentPage = dir === 'next' ? this.currentPage + 1 : this.currentPage - 1
      this.currentPage >= 2 ? this.currentPage = 2 : this.currentPage = this.currentPage
      this.currentPage <= 1 ? this.currentPage = 1 : this.currentPage = this.currentPage
      this.transitionName = dir
      console.log('goto page ', this.currentPage)
    }
  }

}

</script>

<style lang="sass">
  @import "@theme/styles/variables.sass"
  @import "@theme/styles/mixins.sass"

  .section-toggle
    padding: 0
    margin-right: 1.5em
    transition: color 0.3s ease
    .icon
      transition: transform 0.3s ease
    &.is-active
      cursor: default
      .icon
        transform: rotate(90deg)
</style>
