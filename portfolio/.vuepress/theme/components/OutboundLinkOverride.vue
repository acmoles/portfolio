<template functional>
  <svg
   class="icon outbound"
   xmlns="http://www.w3.org/2000/svg"
   aria-hidden="true"
   x="0px"
   y="0px"
   viewBox="0 0 100 100"
   width="15"
   height="15"
 >
   <path
     fill="currentColor"
     d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
   />
 </svg>
</template>

<script>
  // TODO override node-modules component @vuepress/core/lib/client/components/OutboundLink.vue
  // Fixed with CSS - for now. See index.js for component/plugin replacement method - had node module issues before.
</script>

<style>
.icon.outbound {
  color: #aaa;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  top: -1px;
}
</style>
