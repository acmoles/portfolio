export const browserDetection = {

  computed: {
    isSafari () {
      if (typeof window !== 'undefined') {
        return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
      } else {
        return false
      }
    },
    isFirefox () {
      if (typeof window !== 'undefined') {
        return navigator.userAgent.indexOf('Firefox') !== -1
      } else {
        return false
      }
    }
  }

}
