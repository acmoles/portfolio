<template>
<div class="search-box-container">
  <div class="container is-fullhd columns">
    <div class="search-box column">
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
      <i
        class="icon"
        @mousedown="go(focusIndex)"
      >
        <SearchIcon/>
      </i>
    </div>
    <div class="column is-two-thirds">
      <ul
        class="suggestions"
        v-if="showSuggestions"
        @mouseleave="unfocus"
      >
        <li
          class="suggestion"
          v-for="(s, i) in suggestions"
          :class="{ focused: i === focusIndex }"
          @mousedown="go(i)"
          @mouseenter="focus(i)"
        >
          <a :href="s.path" @click.prevent>
            <span class="page-title">{{ s.title || s.path }}</span>
            <span v-if="s.header" class="header">{{ s.header.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import SearchIcon from '@theme/components/icons/SearchIcon.vue'

export default {

  components: { SearchIcon },

  data () {
    return {
      query: '',
      focused: true,
      focusIndex: 0,
      searchMaxSuggestions: 9,
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
      return (
        this.focused
        && this.suggestions
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
@import "../styles/variables.sass"
@import "../styles/mixins.sass"

.search-box-container
  @include cover-screen
  display: flex
  align-items: center
  justify-content: center
  pointer-events: none
  *
    text-rendering: geometricPrecision
  .container.columns
    height: 100%
    align-items: center

.search-box
  pointer-events: all
  position: relative
  display: flex
  align-items: center
  input
    background-color: transparent
    cursor: text
    color: $white-ter
    display: inline-flex
    border: none
    border-bottom: 2px solid $slate
    font-size: 1.25em
    line-height: 2em
    margin-right: 2em
    width: 100%
    &::placeholder
      color: lighten($silver, 10%)
      @include opacity-filter-transition
    &:focus
      cursor: auto
    &:focus::placeholder
      filter: opacity(10%)
  .icon
    cursor: pointer
    position: relative
    right: 4em
    @include opacity-filter-transition
.suggestions
  pointer-events: all
  background: transparent
  list-style-type: none
.suggestion
  line-height: 1.4
  padding: 0.4rem 0.6rem
  border-radius: $radius-small
  cursor: pointer
  a
    white-space: normal
    .page-title
      color: $white
    .header
      color: $silver
      margin-left: 0.5em
  &.focused
    background-color: $slate
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
</style>
