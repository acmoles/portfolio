<template>
<div class="search-box-container">
  <div class="container is-fullhd">
    <div class="search-box">
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
      <i class="icon">
        <SearchIcon/>
      </i>
      <ul
        class="suggestions"
        v-if="showSuggestions"
        :class="{ 'align-right': alignRight }"
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
            <span v-if="s.header" class="header">&gt; {{ s.header.title }}</span>
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
    },

    // make suggestions align right when there are not enough items
    alignRight () {
      const navCount = (this.$site.themeConfig.nav || []).length
      const repo = this.$site.repo ? 1 : 0
      return navCount + repo <= 2
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

.search-box
  pointer-events: all
  display: flex
  position: relative
  width: 100%
  justify-content: center
  align-items: center
  input
    text-rendering: geometricPrecision
    background-color: transparent
    cursor: text
    width: 100%
    max-width: 16em
    color: $white-ter
    display: flex
    border: none
    border-bottom: 2px solid $slate
    font-size: 1.25em
    line-height: 2em
    outline: none
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
    right: 1.5em
    @include opacity-filter-transition
    &:hover
      filter: opacity(50%)
  .suggestions
    background: transparent
    width: 20rem
    list-style-type: none
    &.align-right
      right: 0
  .suggestion
    line-height: 1.4
    padding: 0.4rem 0.6rem
    border-radius: $radius-small
    cursor: pointer
    a
      white-space: normal
      color: lighten($white-ter, 35%)
      .page-title
        font-weight: 600
      .header
        font-size: 0.9em
        margin-left: 0.25em
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
