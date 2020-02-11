import BackToTop from './BackToTop.vue'
import StatusIndicator from './StatusIndicator.vue'
import NoiseAdjust from './NoiseAdjust.vue'
// import PageHeight from './PageHeight.js'

export default ({ Vue }) => {
  Vue.component('BackToTop', BackToTop),
  Vue.component('StatusIndicator', StatusIndicator)
  Vue.component('NoiseAdjust', NoiseAdjust)
  // Vue.use(PageHeight)
}
