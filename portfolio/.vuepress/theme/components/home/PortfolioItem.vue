<template>
  <router-link
    :to="path"
    class="grid-item"
    :class="[type, {'in-view': visible}, {'appear-fade-up': homeFadeUpMotion}]"
    @mouseleave.native.stop="mouseLeave"
    @mousemove.native.stop="mouseMove"
    :ref="'base' + uid"
  >
    <article
      class="project-panel project-card"
      :class="[background, {'noise-light': notColorTile}]"
      :ref="'article' + uid"
      @click="emitBoundingRect($event)"
    >

      <figure
        v-if="src"
        :ref="'image' + uid"
        class="image"
        :class="imageClass"
      >
        <img :src="src"  :alt="title">
      </figure>

      <div :ref="'caption' + uid" class="item-caption">
        <p class="small-title">{{ title }}</p>
        <h2 v-if="subtitle">{{ subtitle }}</h2>

        <p class="case" v-if="case1">{{ case1 }}</p>
        <!-- <p class="case" v-if="case2">{{ case2 }}</p> -->
      </div>

    </article>
  </router-link>
</template>

<script>

import { fadeUpInLoad } from '@theme/mixins/fadeUpInLoad.js'

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
    src: String
  },

  mixins: [fadeUpInLoad],

  data () {
    return {
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
      mouseMove(event) {
        // layout on mouse move
        requestAnimationFrame(() => {
          this.layout(event)
        })
      },
      mouseLeave(event) {
        // reverse animation
        requestAnimationFrame(() => {
          for(var key in this.animatables) {
            this.animatables[key].style.WebkitTransform = this.animatables[key].style.transform = 'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1)'
  				}
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
@import "../../styles/variables.sass"
@import "../../styles/mixins.sass"

// TODO make transition delays dependent on which elements have already been seen

.project-card
  background-color: $black
  background-size: 250%
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
    background-image: $gradientMid
  &.dark
    background-color: $steel
    background-image: $gradientSubtle
    &.project-panel::after
      content: none
  &.stompy
    background-color: $steel
    &.project-panel::after
      content: none
  &.green
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($green, 0.64)
    background-color: $green
    background-image: $gradient
  &.purple
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($purple, 0.76)
    background-color: $purple
    background-image: $gradient
  &.blue
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($blue, 0.64)
    background-color: $blue
    background-image: $gradient
  &.yellow
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($yellow, 0.56)
    background-color: $darkYellow
    background-image: $gradientDark
  &.random
    background-color: $silver
    &.project-panel::after
      content: none
  &.pink
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($pink, 0.64)
    background-color: $pink
    background-image: $gradient
  &.als
    background-color: $slate
    &.project-panel::after
      content: none


.grid-item .project-card::after
  @include pseudo-full
  pointer-events: none
  border-radius: $radius
  filter: opacity(0%)
  transition: filter 0.3s ease-out

.grid-item:hover .project-card::after
  filter: opacity(100%)


.grid-item
  position: relative
  perspective: 1000px
  .item-caption, .project-card
    transition: transform 0.2s ease-out
    @include make3d
  .project-panel
    // box-shadow: $element-shadow
    color: $white-ter
  &.double-right-top, &.double-right-bottom, &.double-left-top, &.double-left-bottom
    .small-title, h2
      width: 42%


.case
  display: inline-flex
  font-size: .75em
  background: rgba($white, 0.1)
  padding: 0.5em .75em
  margin: 2em 1em 0 0
  border-radius: $radius-small

.blue
  .case
    background: rgba($white, 0.2)


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

</style>
