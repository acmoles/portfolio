<template>
  <transition
     name="fade"
     :mode="mode"
   >
     <slot></slot>
   </transition>
</template>

<script>
// Used by vue-portal
export default {

  name: 'FadeGlobal',

  props: {
    mode: String,
  },

}
</script>
