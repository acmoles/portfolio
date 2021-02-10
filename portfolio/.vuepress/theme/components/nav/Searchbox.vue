<template>
  <div
    class="navbar-item has-dropdown search-dropdown umami--click--nav-search"
    :class="[open ? 'is-active' : null, ]"
    aria-label="dropdown navigation"
  >
    <div
      class="navbar-link is-arrowless"
      @click="setOpen(!open)"
      aria-label="Search dropdown"
      role="button"
      aria-haspopup="true"
      aria-controls="dropdown-menu"
    >
      <span class="label">Search</span>
      <i class="icon" aria-hidden="true">
        <MediumSearchIcon/>
      </i>
    </div>

    <div
      class="navbar-dropdown is-boxed search-box background-noise"
      role="combobox"
      @mouseleave="unfocus"
    >
      <input
        @input="query = $event.target.value"
        aria-label="Search"
        :value="query"
        :class="{ 'focused': focused }"
        placeholder="Search headings"
        autocomplete="off"
        spellcheck="false"
        @focus="focused = true"
        @blur="focused = false"
        @keyup.enter="go(focusIndex)"
        @keyup.up="onUp"
        @keyup.down="onDown"
        ref="input"
      >
      <ul
        class="suggestions"
        v-if="showSuggestions"
      >
        <li
          class="suggestion dropdown-item"
          v-for="(s, i) in suggestions"
          :class="{ focused: i === focusIndex }"
          @mousedown="go(i)"
          @mouseenter="focus(i)"
        >
          <a :href="s.path" @click.prevent class="search-result no-fade">
            <span class="page-title">{{ s.title || s.path }}</span>
            <span v-if="s.header" class="header">{{ s.header.title }}</span>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import MediumSearchIcon from '@theme/components/icons/MediumSearchIcon.vue'

export default {

  components: { MediumSearchIcon },

  data () {
    return {
      open: false,
      query: '',
      focused: false,
      focusIndex: 0,
      searchMaxSuggestions: 10,
      searchPaths: null,
      searchHotkeys: ['s', '/'],
    }
  },

  mounted () {
    this.placeholder = this.$site.themeConfig.searchPlaceholder || ''
    document.addEventListener('keydown', this.onHotkey)
  },

  beforeDestroy () {
    document.removeEventListener('keydown', this.onHotkey)
  },

  computed: {

    showSuggestions () {
      // return true
      // return (
      //   this.focused
      //   && this.suggestions
      //   && this.suggestions.length
      // )
      return (
        this.suggestions
        && this.suggestions.length
      )
    },

    suggestions () {
      const query = this.query.trim().toLowerCase()
      if (!query) {
        return
      }

      const { pages } = this.$site
      const max = this.searchMaxSuggestions
      const localePath = this.$localePath
      const matches = item => (
        item
        && item.title
        && item.title.toLowerCase().indexOf(query) > -1
      )
      const res = []
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break
        const p = pages[i]
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue
        }

        // filter out results that do not match searchable paths
        if (!this.isSearchable(p)) {
          continue
        }

        if (matches(p)) {
          res.push(p)
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break
            const h = p.headers[j]
            if (matches(h)) {
              res.push(Object.assign({}, p, {
                path: p.path + '#' + h.slug,
                header: h
              }))
            }
          }
        }
      }
      return res
    }
  },

  methods: {

    setOpen (value) {
      this.open = value

      if (value && typeof value === 'boolean') {
        this.$refs.input.focus()
        setTimeout(() => {
          document.getElementById('app').addEventListener('click', this.handleDismiss, false)
        }, 250)
      } else {
        this.open = false
        document.getElementById('app').removeEventListener('click', this.handleDismiss, false)
      }
    },

    handleDismiss () {
      if (!this.focused) {
        this.setOpen()
      }
    },

    getPageLocalePath (page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath
        }
      }
      return '/'
    },

    isSearchable (page) {
      let searchPaths = this.searchPaths

      // all paths searchables
      if (searchPaths === null) { return true }

      searchPaths = Array.isArray(searchPaths) ? searchPaths : new Array(searchPaths)

      return searchPaths.filter(path => {
        return page.path.match(path)
      }).length > 0
    },

    onHotkey (event) {
      if (event.srcElement === document.body && this.searchHotkeys.includes(event.key)) {
        this.$refs.input.focus()
        event.preventDefault()
      }
    },

    onUp () {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.suggestions.length - 1
        }
      }
    },

    onDown () {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++
        } else {
          this.focusIndex = 0
        }
      }
    },

    go (i) {
      if (!this.showSuggestions) {
        return
      }
      this.$router.push(this.suggestions[i].path)
      this.query = ''
      this.focusIndex = 0
      this.setOpen()
    },

    focus (i) {
      this.focusIndex = i
    },

    unfocus () {
      this.focusIndex = -1
    }
  }
}
</script>

<style lang="sass">
@import "@theme/styles/variables.sass"
@import "@theme/styles/mixins.sass"

.search-dropdown
  .navbar-link
    @include opacity-filter-transition
  .icon
    opacity: 0.64
  .label
    display: none

.search-box
  width: 20em
  left: auto
  padding: 0
  right: 0
  input
    color: $button-custom-text-color
    text-rendering: geometricPrecision
    background-color: transparent
    cursor: text
    border: none
    height: 3.25em
    display: flex
    align-items: center
    padding: 0.375rem 1rem
    width: 100%
    font-size: 1em
    &::placeholder
      color: $silver
    &:focus
      cursor: auto

.suggestions
  list-style-type: none
  padding: 0.5rem 0
  border-top: 1px solid $black
.suggestion
  cursor: pointer
  padding: 0.375rem 1rem
  a
    white-space: normal
    transition: $button-transition
    color: $grey-light
    .header
      transition: color 200ms ease
      color: $button-custom-text-color
      margin-left: 0.5em
  &.focused
    background-color: $button-custom-hover-color
    a
      color: $white
      .header
        color: $grey-light

@media screen and (max-width: $tablet - 1px)
  .search-dropdown
    // TODO hiding searchbox mobile for now
    display: none
    .icon
      display: none
    .label
      display: block
    .search-box input
      text-align: right
      padding-right: 1.5rem
    .suggestion.dropdown-item
      padding-right: 1.5rem


// @media (max-width: $tablet)
//   .search-box
//     cursor: pointer
//     width: 0
//     border-color: transparent
//     position: relative
//     &:focus
//       cursor: text
//       left: 0
//       width: 10rem

</style>
