<template>
  <div
    class="navbar-item has-dropdown search-dropdown"
    :class="[focused ? 'hide-icon' : null, showSuggestions ? 'is-active' : null]"
    aria-label="dropdown navigation"
  >
    <div class="navbar-link is-arrowless search-box">
      <input
        @input="query = $event.target.value"
        aria-label="Search"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
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
      <i
        class="icon"
        @mousedown="go(focusIndex)"
      >
        <SmallSearchIcon/>
      </i>
    </div>

    <div
      class="navbar-dropdown is-boxed search-results"
      role="combobox"
      @mouseleave="unfocus"
    >
      <ul
        class="suggestions"
      >
        <li
          class="suggestion dropdown-item"
          v-for="(s, i) in suggestions"
          :class="{ focused: i === focusIndex }"
          @mousedown="go(i)"
          @mouseenter="focus(i)"
        >
          <a :href="s.path" @click.prevent class="search-result">
            <span class="page-title">{{ s.title || s.path }}</span>
            <span v-if="s.header" class="header">{{ s.header.title }}</span>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import SmallSearchIcon from '@theme/components/icons/SmallSearchIcon.vue'

// Use vue transition rather than Bulma dropdown
// :class="[showSuggestions ? 'is-active' : null, ]"

export default {

  components: { SmallSearchIcon },

  data () {
    return {
      open: false,
      query: '',
      focused: false,
      focusIndex: 0,
      searchMaxSuggestions: 5,
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
      return true
      // return (
      //   this.focused
      //   && this.suggestions
      //   && this.suggestions.length
      // )
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
@import "../../styles/variables.sass"
@import "../../styles/mixins.sass"

.navbar-start
  padding-left: 1.25em

.search-dropdown.hide-icon .icon
  filter: opacity(0%)

.search-box
  width: 20em
  input
    color: $button-custom-text-color
    text-rendering: geometricPrecision
    background-color: transparent
    cursor: text
    border: none
    margin-left: 0.25em
    width: 100%
    font-size: 1em
    padding: 0px
    &::placeholder
      color: $button-custom-text-color
      @include opacity-filter-transition
    &:focus
      cursor: auto
    &:focus::placeholder
      filter: opacity(25%)
  .icon
    position: absolute
    left: -0.75em
    filter: opacity(64%)
    @include opacity-filter-transition
.suggestions
  list-style-type: none
.suggestion
  a
    white-space: normal
    .page-title
      color: $white
    .header
      color: $button-custom-text-color
      margin-left: 0.5em
  &.focused
    background-color: $button-custom-hover-color
    a
      color: $blue

@media (max-width: $tablet)
  .search-box
    input
      cursor: pointer
      width: 0
      border-color: transparent
      position: relative
      &:focus
        cursor: text
        left: 0
        width: 10rem

  // Redo Bulma dropdown transition
  .bulma-dropdown-enter-active, .bulma-dropdown-leave-active
    transition-property: opacity, transform
    transition-duration: 400ms


  .bulma-dropdown-enter, .bulma-dropdown-leave-to
    opacity: 0
    transform: translateY(-5px)
</style>
