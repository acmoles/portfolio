export const copyText = {

  // v-clipboard:copy="splitMailto(link)"
  // v-clipboard:success="onCopy(splitMailto(link))"
  // v-clipboard:error="onError"

  // methods: {
  //   onCopy (text, position) {
  //     console.log('mixin method');
  //     this.$store.dispatch('setSnackbarStatus', {
  //       text: text,
  //       position: position || 'top'
  //     })
  //   },
  //   onError () {
  //     console.log('mixin error');
  //     this.$store.dispatch('setSnackbarStatus', {
  //       text: 'Clipboard copy error',
  //       position: 'top'
  //     })
  //   },
  // }

  methods: {
    doCopy (copy, text, position) {

      this.$copyText(copy).then((e) => {
        // console.log('Copied: ', e)
        this.$store.dispatch('setSnackbarStatus', {
          text: text,
          position: position || 'top'
        })

      }, (e) => {

        console.log('Can not copy: ', e)
        this.$store.dispatch('setSnackbarStatus', {
          text: 'Clipboard copy error',
          position: position || 'top'
        })

      })
    }
  }

}
