<template>

  <div class="glass-body-actions columns is-mobile is-variable is-1">
    <div class="column">
      <div class="dropdown is-left is-active">
        <div class="dropdown-trigger">
          <button
            class="button is-rounded about-button"
            role="button"
            @click="aboutToggle"
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
            class="button is-rounded options"
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
                  <i class="icon-mail-squared full-opacity"></i>
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

    <transition name="slideleft">
      <template v-if="aboutActive">

        <MenuNav
          :menuId="'about-popup'"
          @dismiss="aboutToggle"
        />

      </template>
    </transition>

  </div>

</template>

<script>

import MenuNav from '@/components/nav-menu.vue'

export default {
  name: 'AboutActions',
  components: {
    MenuNav
  },
  data () {
    return {
      email: 'info@acmoles.design',
      copyTextMessage: 'Copy email',
      optionsDropdown: false,
      aboutActive: false,
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
    },
    aboutToggle () {
      this.$events.$emit('toggle-scroll-lock');
      this.aboutActive = !this.aboutActive;
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../sass/variables'

  .glass-body-actions
    max-width: 13em
    width: 100%
    display: inline-flex
    position: relative
    top: -1em
    padding: 0.5em 0.75em
    .button
      width: 100%
      background-color: transparent
      border-color: $extraDarkSmoke
      &:active, &:hover
        border-color: darken($extraDarkSmoke, 10%)
        color: darken($extraDarkSmoke, 10%)
      &:focus
        box-shadow: 0 0 0 0.125em rgba($extraDarkSmoke, 0.25)
    .about-button
      color: $slate
      &:active, &:hover
        color: $black
    .options
      color: $extraDarkSmoke
      padding-left: 0.75em
      padding-right: 0.75em
      .icon
        i::before
          line-height: 0
          font-size: 100%

</style>
