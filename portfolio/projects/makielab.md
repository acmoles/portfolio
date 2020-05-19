---
uid: 6
title: Makielab
subtitle: Pioneering customisable childrens toys
type: single
navStyle:
  style: light
  tint: yellow-tint
  progress: light
background: yellow
sidebar: false
date: 2019-09-12
prev: ./toucanbox
next: ./random-international
---

::: slot top

<Stage-ProjectVisual :fadeless="true">
  <template v-slot:visual-background>
    <Heros-BeadsHero :noise="true"/>
  </template>
</Stage-ProjectVisual>

<Stage-ProjectStage ctaLabel="www.ecosia.org" ctaUrl="https://www.ecosia.org"
description="Wesen is an experiment in turning customers into creators and building a digital product end-to-end. It enables anyone to customise a pendant necklace, which can be bespoke manufactured by a blend of traditional and modern techniques." :fadeUpHero="false">

<template v-slot:visual-grid>
  <!-- <figure class="image">
    <ImageHero name="toucanbox" src="/images/toucanbox/combined_onboarding.png" alt="toucanBox"/>
  </figure> -->
</template>

</Stage-ProjectStage>

:::



<Content-ContextSection :box="true">

<template v-slot:main>

## Context

The rise of affordable 3D printers popularised the notion of mass customisation → . However, relatively high prices and lacklustre product creation experiences left its promises largely unrealised.

At that time I was working on customisable children’s toys at Makielab → . We enjoyed modest success, catching the attention of Disney who eventually bought the company. In this project I resolved to draw on some lessons learnt there.

Foremost, I wanted to explore the possibility of an unrestricted creation experience, able to generate infinite variations while being intuitive and fun to use. I also intended to fully automate and outsource the fulfillment process.

</template>

<template v-slot:side>

**Reading time**
12 minutes

**Team composition**
CTO, product designer, two full-stack developers

</template>

</Content-ContextSection>




<Content-TextSection>

# Project 2

## First Title

### Second title

#### Third title

##### Fourth title

###### Fifth title

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

# FAQ

## Why can’t `palette.styl` and `index.styl` merge into one API?

The `palette.styl` is responsible for global color settings. During compilation, theme color constants should be resolved by the preprocessor first and then be applied to the global context.

But for `index.styl`, its job is to override the default styles of application. According to the priority principle of CSS, the later style has a higher priority, so it should be generated at the end of the CSS file.

A simple diagram describing the Stylus compiler’s compilation order as follows:

@flowstart
stage1=>operation: palette.styl
stage2=>operation: default app styles
stage3=>operation: index.styl

stage1->stage2->stage3
@flowend

<br>

## What’s the differences between the `clientDynamicModules` and `enhanceAppFiles`?

Let’s take a look back first, both `clientDynamicModules` and `enhanceAppFiles` can generate modules with dynamic JavaScript code during compile time.

The difference is that the files generated by `enhanceAppFiles` will be loaded and applied automatically when the application is initialized on the client-side, while the files generated by `clientDynamicModules` need to be imported as `@dynamic/xxx` by the users themselves.

```js
module.exports = (options, ctx) => ({
  // Import by entry file automatically.
  enhanceAppFiles: {
    name: 'constans-a',
    content: `...`
  },

  // Need to use via: import '@dynamic/constans-b'
  clientDynamicModules() {
    return {
      name: 'constans-b',
      content: `...`
    }
  }
})
```

## When do I need to use `enhanceAppFiles`?

1. I want to execute some code on the client-side automatically.
2. I don’t need to reuse this module.

**Example:**

- [@vuepress/plugin-register-components](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components/index.js#L24): Automatically registering components on the client-side.
- [@vuepress/plugin-google-analytics](https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/plugin-google-analytics/enhanceAppFile.js): Automatically set up Google Analytics.

## When do I need to use `clientDynamicModules`?

1. I want to generate a dynamic module that needs to be invoked at a specific time.
2. I want to use this module in different modules.

**Example:**

- [@vuepress/plugin-blog](https://github.com/vuepressjs/vuepress-plugin-blog/blob/master/src/node/index.ts#L208): Using compile-time metadata to generate some dynamic blog-related modules and initialize them on the client-side by using `enhanceAppFiles`.

### Inner title

### Inner title

</Content-TextSection>
