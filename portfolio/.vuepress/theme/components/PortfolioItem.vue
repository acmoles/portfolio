<template>
  <router-link
    :to="path"
    class="grid-item"
    :class="type"
    @mouseleave.native.stop="mouseLeave"
    @mousemove.native.stop="mouseMove"
    :ref="'base' + uid"
  >
    <article
      class="project-panel notification"
      :class="background"
      :ref="'article' + uid"
      @click="emitBoundingRect($event)"
    >
      <slot></slot>

      <div :ref="'caption' + uid" class="item-caption">
        <p class="small-title">{{ title }}</p>
        <h2 v-if="subtitle">{{ subtitle }}</h2>

        <p class="case" v-if="case1">{{ case1 }}</p>
        <p class="case" v-if="case2">{{ case2 }}</p>
      </div>

    </article>
  </router-link>
</template>

<script>

export default {

  props: {
    uid: Number,
    type: String,
    title: String,
    subtitle: String,
    path: String,
    case1: String,
    case2: String,
    background: String
  },

  data () {
    return {
      base: {},
      animatables: {},
      options: {
        article: {
    			rotation : {x: -5, y: 5, z: 0},
        },
        caption: {
          translation : {x: 10, y: 10, z: 0},
        },
      }
    }
  },

  computed: {
    pageLoadingStatus () {
      return this.$store.state.pageLoadingStatus
    }
  },

  mounted() {
    this.base = this.$refs['base' + this.uid].$el
    this.animatables.article = this.$refs['article' + this.uid]
    this.animatables.caption = this.$refs['caption' + this.uid]
  },

  methods: {
      emitBoundingRect(event) {
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
@import "../styles/variables.sass"
@import "../styles/mixins.sass"

.notification
  background-size: 250%
  background-blend-mode: overlay
  &.orange
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($orange, 0.42)
    background-color: $orange
    background-image: $gradient
  &.dark
    background-color: $steel
    background-image: $gradientSubtle
  &.stompy-robot
    background-color: $steel
  &.green
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($green, 0.42)
    background-color: $green
    background-image: $gradient
  &.purple
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($purple, 0.42)
    background-color: $purple
    background-image: $gradient
  &.blue
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($blue, 0.42)
    background-color: $blue
    background-image: $gradient
  &.yellow
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($yellow, 0.42)
    background-color: $darkYellow
    background-image: $gradient
  &.random
    background-color: $extraDarkSmoke
  &.pink
    &.project-panel::after
      box-shadow: 0 0 2em 0 rgba($pink, 0.42)
    background-color: $pink
    background-image: $gradient
  &.als
    background-color: $silver

.grid-item .notification::after
  @include pseudo-full
  border-radius: 3px
  opacity: 0
  transition: opacity 0.3s ease-out

.grid-item:hover .notification::after
  opacity: 1


.grid-item
  position: relative
  perspective: 1000px
  *
    transition: transform 0.2s ease-out
  .project-panel
    @include make3d
    box-shadow: $element-shadow
    color: $white-ter
  &.double-right, &.double-left
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

</style>
