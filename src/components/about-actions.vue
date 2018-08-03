<template>

  <div class="glass-body-actions columns is-mobile is-variable is-1">
    <div class="column">
      <div class="dropdown is-left is-active">
        <div class="dropdown-trigger">
          <button
            class="button is-primary is-rounded"
            role="button"
          >
            About
          </button>
        </div>
      </div>
    </div>
    <div class="column is-narrow">
      <div class="dropdown is-left is-active">
        <div class="dropdown-trigger">
          <button
            class="button is-rounded is-outlined options"
            @click="toggleOptions"
            role="button"
            aria-haspopup="true"
          >
            <span class="icon is-small">
              <i class="icon-dot-3 full-opacity"></i>
            </span>
          </button>
        </div>
        <transition name="fade">
          <div v-if="optionsDropdown" class="dropdown-menu options-dropdown" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-ghost">
                <div class="dropdown-arrow"></div>
              </div>
              <a
                class="dropdown-item"
                v-clipboard:copy="email"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <span class="icon is-small">
                  <i class="icon-mail full-opacity"></i>
                </span> {{ copyTextMessage }}
              </a>
              <a href="" target="_blank" class="dropdown-item">
                <span class="icon is-small">
                  <i class="icon-linkedin-squared full-opacity"></i>
                </span> Linkedin
              </a>
              <a href="" target="_blank" class="dropdown-item">
                <span class="icon is-small">
                  <i class="icon-github-squared full-opacity"></i>
                </span> Github
              </a>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'AboutActions',
  data () {
    return {
      email: 'info@acmoles.design',
      copyTextMessage: 'Copy email',
      optionsDropdown: false,
      emailDropdown: false,
    }
  },
  methods: {
    onCopy () {
      this.copyTextMessage = 'Email copied';
      setTimeout(() => {
        this.copyTextMessage = 'Copy email';
      }, 1500);
    },
    onError () {
      this.copyTextMessage = 'Error';
      this.emailDropdown = true;
      setTimeout(() => {
        this.emailDropdown = false;
      }, 1500);
    },
    toggleOptions () {
      this.optionsDropdown = !this.optionsDropdown;
      if (this.optionsDropdown) {
        setTimeout(() => {
          this.optionsDropdown = false;
        }, 4000)
      }
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../sass/variables'

  .glass-body-actions
    max-width: 16em
    width: 100%
    display: inline-flex
    position: relative
    top: -1em
    margin: 0.5em 0.75em
    .button
      width: 100%
    .options
      background-color: transparent
      color: $extraDarkSmoke
      border-color: $extraDarkSmoke
      &:active, &:hover
        border-color: darken($extraDarkSmoke, 10%)
        color: darken($extraDarkSmoke, 10%)
      &:focus
        box-shadow: 0 0 0 0.125em rgba($extraDarkSmoke, 0.25)
      padding-left: 0.75em
      padding-right: 0.75em
      .icon
        i::before
          line-height: 0
          font-size: 100%

</style>
