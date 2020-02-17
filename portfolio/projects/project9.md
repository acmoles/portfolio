---
uid: 9
title: Lego
subtitle: Project 9
type: single
background: is-success
sidebar: auto
date: 2019-09-12
prev: ./project8
next: ./project10
---

::: slot top

<ProjectStage>
  <template v-slot:visual>
    <ImageHero imageKey="lego"/>
  </template>

  <template v-slot:description>
    <p>Here's a description</p>
  </template>
</ProjectStage>

:::

# Project 2

## First Title

Test paragraph

### Inner title

### Inner title

### Inner title
## Features

**Built-in Markdown extensions**

* [Table of Contents](../guide/markdown.md#table-of-contents)
* [Custom Containers](../guide/markdown.md#custom-containers)
* [Line Highlighting](../guide/markdown.md#line-highlighting-in-code-blocks)
* [Line Numbers](../guide/markdown.md#line-numbers)
* [Import Code Snippets](../guide/markdown.md#import-code-snippets)

**Using Vue in Markdown**

* [Templating](../guide/using-vue.md#templating)
* [Using Components](../guide/using-vue.md#using-components)

**Vue-powered custom theme system**

* [Metadata](../theme/writing-a-theme.md#site-and-page-metadata)
* [Content Excerpt](../theme/writing-a-theme.md#content-excerpt)

**Default theme**

* Responsive layout
* [Optional Homepage](../theme/default-theme-config.md#homepage)
* [Simple out-of-the-box header-based search](../theme/default-theme-config.md#built-in-search)
* Customizable [navbar](../theme/default-theme-config.md#navbar) and [sidebar](../theme/default-theme-config.md#sidebar)
* [Auto-generated GitHub link and page edit links](../theme/default-theme-config.md#git-repo-and-edit-links)
* [PWA: Popup UI to refresh contents](../theme/default-theme-config.md#popup-ui-to-refresh-contents)
* [Last Updated](../theme/default-theme-config.md#last-updated)
* [Multi-Language Support](../guide/i18n.md)

**Blog theme**

* [Documentation](https://vuepress-theme-blog.ulivz.com/)
* [Live Example](https://ulivz.com/)


**Plugin**

* [Powerful Plugin API](../plugin/README.md)
* [Blog Plugin](https://vuepress-plugin-blog.ulivz.com/)
* [Search Plugin](../plugin/official/plugin-search.md)
* [PWA Plugin](../plugin/official/plugin-pwa.md)
* [Google Analytics Plugin](../plugin/official/plugin-google-analytics.md)
* ...

## Why Not ...?

### Nuxt

Nuxt is capable of doing what VuePress does, but it’s designed for building applications. VuePress is focused on content-centric static sites and provides features tailored for technical documentation out of the box.

### Docsify / Docute

Both are great projects and also Vue-powered. Except they are both fully runtime-driven and therefore not SEO-friendly. If you don’t care for SEO and don’t want to mess with installing dependencies, these are still great choices.

### Hexo

Hexo has been serving the Vue docs well - in fact, we are probably still a long way to go from migrating away from it for our main site. The biggest problem is that its theming system is static and string-based - we want to take advantage of Vue for both the layout and the interactivity. Also, Hexo’s Markdown rendering isn’t the most flexible to configure.


## Second Title

### Inner title

### Inner title

## Third Title

### Inner title

### Inner title

### Inner title

### Inner title
