import BottomNav from './BottomNav.vue'
import NoiseAdjust from './NoiseAdjust.vue'
import SearchboxContainer from './SearchboxContainer.vue'
// import StatusIndicator from './StatusIndicator.vue'
// import PageHeight from './PageHeight.js'

export default ({ Vue }) => {
  Vue.component('BottomNav', BottomNav),
  Vue.component('SearchboxContainer', SearchboxContainer),
  Vue.component('NoiseAdjust', NoiseAdjust)
  // Vue.component('StatusIndicator', StatusIndicator)
  // Vue.use(PageHeight)
}
