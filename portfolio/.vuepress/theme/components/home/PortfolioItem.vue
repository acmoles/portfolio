<template>
  <router-link
    :to="path"
    class="grid-item no-fade"
    :class="[type, {'in-view': visible}, {'appear-fade-up': homeFadeUpMotion}]"
    @mouseenter.native.stop="mouseEnter"
    @mouseleave.native.stop="mouseLeave"
    @mousemove.native.stop="mouseMove"
    :ref="'base' + uid"
  >
    <article
      class="project-panel project-card"
      :class="[background, { 'transition': !mouseOn }]"
      :ref="'article' + uid"
      @click="emitBoundingRect($event)"
    >

      <figure
        v-if="src"
        :ref="'image' + uid"
        class="image"
        :class="imageClass"
      >
        <img class="lazyload" :data-src="src"  :alt="title" :style="{ height: isFirefox ? '100%' :null }">
      </figure>

      <div :ref="'caption' + uid" class="item-caption" :class="{ 'transition': !mouseOn }">
        <p class="small-title">{{ processedTitle(title) }}</p>
        <h2 class="item-title" :class="rag" v-if="subtitle">{{ subtitle }}</h2>

        <p class="case" v-if="case1">{{ case1 }}</p>
        <!-- <p class="case" v-if="case2">{{ case2 }}</p> -->
      </div>

    </article>
  </router-link>
</template>

<script>

// TODO multi resolution card images (and high resolution for landscape format)

import { fadeUpInLoad } from '@theme/mixins/fadeUpInLoad.js'
import { browserDetection } from '@theme/mixins/browserDetection.js'
import { processedTitle } from '@theme/mixins/processedTitle.js'

export default {

  props: {
    uid: Number,
    type: String,
    title: String,
    subtitle: String,
    path: String,
    case1: String,
    case2: String,
    background: String,
    src: String,
    rag: String
  },

  mixins: [fadeUpInLoad, processedTitle, browserDetection],

  data () {
    return {
      mouseOn: false,
      transitionTimeout: null,
      base: {},
      animatables: {},
      options: {
        article: {
    			rotation : {x: -3, y: 3, z: 0},
        },
        image: {
          translation : {x: 0, y: 0, z: 1},
        },
        caption: {
          translation : {x: 10, y: 10, z: 0},
        },
      }
    }
  },

  computed: {
    homeFadeUpMotion () {
      return this.$store.state.homeFadeUpMotion
    },
    imageClass () {
      return {
        'double-comp': this.type.includes('double'),
        'is-square single-comp': this.type.includes('single')
      }
    },
    notColorTile () {
      return !(this.background === 'dark' || this.background === 'stompy' || this.background === 'als' || this.background === 'random')
    }
  },

  mounted() {
    this.base = this.$refs['base' + this.uid].$el
    this.animatables.article = this.$refs['article' + this.uid]
    // if (this.src) {
    //   this.animatables.image = this.$refs['image' + this.uid]
    // }
    this.animatables.caption = this.$refs['caption' + this.uid]

    if (this.type === 'double-left' || this.type === 'double-right') {
      this.options.article.rotation = {x: -2, y: 2, z: 0}
      this.options.caption.translation = {x: 8, y: 8, z: 0}
    }
  },

  // TODO could optimise https://codepen.io/andymerskin/pen/XNMWvQ OR https://aminerman.com/playground/vuejs-mouse-parallax/

  methods: {
      emitBoundingRect(event) {
        this.mouseLeave(event)
        const rect = this.base.getBoundingClientRect()
        const data = {
          childLeft: rect.x,
          childTop: this.base.offsetTop,
          childWidth: rect.width,
          childHeight: rect.height,
        }
        this.$emit('project-click', data)
      },
      getMousePosition(event) {
        var posx = 0, posy = 0
      		if (event.pageX || event.pageY) 	{
      			posx = event.pageX
      			posy = event.pageY
      		}
      		else if (event.clientX || event.clientY) 	{
      			posx = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
      			posy = event.clientY + document.body.scrollTop + document.documentElement.scrollTop
      		}
      		return { x : posx, y : posy }
      },
      mouseEnter(event) {
        if (this.isSafari) {
          // Immediately remove transition on mouse over in Safari to avoid stutter
          this.mouseOn = true
          return
        }

        if (!this.mouseOn) {
          this.transitionTimeout = setTimeout(() => {
            this.mouseOn = true
          }, 210)
        }
      },
      mouseMove(event) {
        // layout on mouse move
        requestAnimationFrame(() => {
          this.layout(event)
        })
      },
      mouseLeave(event) {
        // reverse animation
        clearTimeout(this.transitionTimeout)
        this.mouseOn = false

        this.$forceNextTick(() => {
          // requestAnimationFrame(() => {
            for(var key in this.animatables) {
              this.animatables[key].style.WebkitTransform = this.animatables[key].style.transform = 'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)'
            }
          // })
        })
      },
      layout(event) {
        // mouse position relative to the document
        const mousePosition = this.getMousePosition(event)
        // Document scrolls.
    		const	documentScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft, top : document.body.scrollTop + document.documentElement.scrollTop}

        const	bounds = this.base.getBoundingClientRect()

        // Mouse position relative to the main element (this.DOM.el).
    		const	relativeMousePosition = { x : mousePosition.x - bounds.left - documentScrolls.left, y : mousePosition.y - bounds.top - documentScrolls.top }

          // Movement settings for the animatable elements.
      		for(var key in this.animatables) {
      			if( this.animatables[key] == undefined || this.options[key] == undefined ) {
      				continue
      			}
      			var t = this.options[key] != undefined ? this.options[key].translation || {x:0,y:0,z:0} : {x:0,y:0,z:0}
    				var r = this.options[key] != undefined ? this.options[key].rotation || {x:0,y:0,z:0} : {x:0,y:0,z:0},
    				setRange = function (obj) {
    					for(var k in obj) {
    						if( obj[k] == undefined ) {
    							obj[k] = [0,0];
    						}
    						else if( typeof obj[k] === 'number' ) {
    							obj[k] = [-1*obj[k],obj[k]];
    						}
    					}
    				}

      			setRange(t)
      			setRange(r)

      			var transforms = {
      				translation : {
      					x: (t.x[1]-t.x[0])/bounds.width*relativeMousePosition.x + t.x[0],
      					y: (t.y[1]-t.y[0])/bounds.height*relativeMousePosition.y + t.y[0],
      					z: (t.z[1]-t.z[0])/bounds.height*relativeMousePosition.y + t.z[0],
      				},
      				rotation : {
      					x: (r.x[1]-r.x[0])/bounds.height*relativeMousePosition.y + r.x[0],
      					y: (r.y[1]-r.y[0])/bounds.width*relativeMousePosition.x + r.y[0],
      					z: (r.z[1]-r.z[0])/bounds.width*relativeMousePosition.x + r.z[0]
      				}
      			}

      			this.animatables[key].style.WebkitTransform = this.animatables[key].style.transform = 'translateX(' + transforms.translation.x + 'px) translateY(' + transforms.translation.y + 'px) translateZ(' + transforms.translation.z + 'px) rotateX(' + transforms.rotation.x + 'deg) rotateY(' + transforms.rotation.y + 'deg) rotateZ(' + transforms.rotation.z + 'deg) scale3d(1, 1, 1)'
      		}
      }
  }
}

</script>

<style lang="sass">
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"

// Card background

.project-card
  background-color: $black
  background-image: $relative-noise-url, $gradientNone
  background-size: 256px 256px, 250%
  background-blend-mode: overlay
  &.project-panel
    border-radius: $radius
    padding: 2rem 4rem 2rem 2rem
    position: relative
    box-shadow: $element-shadow
  &.orange
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($orange, 0.56)
    background-color: $orange
    background-image: $relative-noise-url, $gradientMid
    @media only screen and #{$media-queries}
      background-image: $relative-noise-url-stronger, $gradientMid
  &.dark
    background-color: $slate
    background-image: $relative-noise-url, $gradientSubtle
    &.project-panel::after
      content: none
    @media only screen and #{$media-queries}
      background-image: $relative-noise-url-stronger, $gradientSubtle
  &.stompy
    // Note special grid-item background below
    background-color: $silver
    background-image: $relative-noise-url, $gradientSubtle
    &.project-panel::after
      content: none
  &.green
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($green, 0.64)
    background-color: $green
    background-image: $relative-noise-url, $gradient
    @media only screen and #{$media-queries}
      background-image: $relative-noise-url-stronger, $gradient
  &.purple
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($purple, 0.76)
    background-color: $purple
    background-image: $relative-noise-url, $gradient
    @media only screen and #{$media-queries}
      background-image: $relative-noise-url-stronger, $gradient
  &.blue
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($blue, 0.64)
    background-color: $blue
    background-image: $relative-noise-url, $gradient
    @media only screen and #{$media-queries}
      background-image: $relative-noise-url-stronger, $gradient
  &.yellow
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($yellow, 0.56)
    background-color: $darkYellow
    background-image: $relative-noise-url, $gradientMid
    // background-blend-mode: overlay
    @media only screen and #{$media-queries}
      background-image: $relative-noise-url-stronger, $gradientMid
  &.random
    background-color: $silver
    background-image: $relative-noise-url, $gradientSubtle
    &.project-panel::after
      content: none
  &.pink
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($pink, 0.64)
    background-color: $pink
    background-image: $relative-noise-url, $gradient
    @media only screen and #{$media-queries}
      background-image: $relative-noise-url-stronger, $gradient
  &.als
    background-color: $silver
    background-image: $relative-noise-url, $gradientSubtle
    &.project-panel::after
      content: none

@media only screen and #{$media-queries}
  .project-card
    background-size: 128px 128px, 250%

// Card glow

.grid-item .project-card::after
  @include pseudo-full
  pointer-events: none
  border-radius: $radius
  filter: opacity(0)
  transition: filter 0.3s ease-out

.grid-item:hover .project-card::after
  filter: opacity(1)

// Card parallax effect

.grid-item
  position: relative
  perspective: 1000px
  .item-caption, .project-card
    @include make3d
    will-change: transform
  .item-caption.transition, .project-card.transition
    transition: transform 0.2s ease-out
  .project-panel
    // box-shadow: $element-shadow
    color: $white

// Card Typeography

@media screen and (min-width: $tablet)
  .grid-item
    &.double-right-top, &.double-right-bottom, &.double-left-top, &.double-left-bottom
      .small-title, h2
        width: 42%

.grid-item
  .stompy, .als
    background-color: $steel

.case
  display: inline-flex
  font-size: .75em
  background: rgba($white, 0.1)
  padding: 0.5em .75em
  margin: 2em 1em 0 0
  border-radius: $radius-small
  &.inline
    margin: 0
    vertical-align: middle

.blue
  .case
    background: rgba($white, 0.14)

// Card layout and image

.double-comp, .single-comp
  position: absolute
  width: 100%
  height: 100%
  right: 0
  top: 0
  border-radius: $radius
  overflow: hidden
  // z-index: -1
  img
    position: absolute
    top: 0
    right: 0
    @media screen and (max-width: $tablet)
      width: auto
      max-width: unset
      height: 100%
      right: auto
      left: -2.5em

</style>
