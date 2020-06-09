---
uid: 2
title: temp
subtitle: temp page
navStyle:
  style: light
  tint: blue-tint
  progress: light
background: blue
sidebar: auto
date: 2019-09-12
---

::: slot top

<Stage-ProjectStage :noise="true" ctaLabel="none" ctaUrl="https://www.ecosia.org"
description="Wesen is an experiment in turning customers into creators and building a digital product end-to-end. It enables anyone to customise a pendant necklace, which can be bespoke manufactured by a blend of traditional and modern techniques.">

  <template v-slot:visual-background>
    <figure class="full-screen">
      <Heros-ImageHero src="/images/als/moscow.jpg" alt="Ecosia mobile devices"/>
    </figure>
  </template>

</Stage-ProjectStage>

:::

<Content-ContextSection :box="true">

<template v-slot:main>

## Context

toucanBox is an award winning startup subscription service that provides arts and crafts activities for children aged 3 to 8 years old. Each box has the child’s name on the front and a personalised message printed inside. It has illustrated instructions, an activity magazine and all the required materials to make a craft project. It’s also delivered straight through the letterbox.

2017 was a significant year for toucanBox. Having secured funding in the previous year, we were ready to expand the Company and transition into a growth phase.

As we offer a product customers usually haven’t seen before, we knew that our communication and first impression must be flawless.

New customers register through the website. They choose a box type for their child (or children) and create an account, providing relevant details (including email, delivery address and billing information). The first box is a free trial if they are acquired through paid marketing channels. [Wesen anchor](projects/wesen/#going-forward)


</template>

<template v-slot:side>

**Product**
Responsive landing page and signup web application

**Sector**
Subscription e-commerce

**Timeframe**
2017

**Team composition**
CTO, product designer*, two full-stack developers, stakeholders in Marketing and Creative

_I have omitted confidential information in this case study. All information and images are my own unless stated otherwise._


</template>

</Content-ContextSection>





<Content-ImageFrames-SquareImagesRow :content="true" :images="[
{ url:'/images/ecosia/Android.jpg', alt:'Ecosia Android app', caption:'Square image caption 1', slot:'slot1', iframe:false, zoomable:true },
{ url:'/images/ecosia/iOS.jpg', alt:'Ecosia iOS app', caption:'Square image caption 2', slot:'slot2', iframe:false, zoomable:true },
{ url:'/images/ecosia/MacApp.jpg', alt:'Ecosia Safari Extension', caption:'Square image caption 3', slot:'slot3', iframe:false, zoomable:true },
]">

<template slot="content">

## Initiatives

<p class="subtitle">
  Cras cursus est sodales, consectetur felis eget, auctor metus. Duis egestas commodo eros in efficitur. Nullam eu consequat leo. Maecenas sit amet arcu ut mauris accumsan semper.
</p>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum mauris in odio tempor, vitae tempus ante condimentum. Maecenas id nibh libero. Vivamus tristique elit eu dui mollis elementum. Vivamus sit amet semper felis. Maecenas non eros non turpis consectetur accumsan ac eget quam. Nam a sapien diam. Mauris blandit. Search results page redesign. <Content-ModalLink label="10th Birthday Doodle">
<template v-slot:modal>

<Content-FreeSection padding="is-small">

<figure class="image is-16by9">
<iframe style="background: white;" class="lazyload" data-src="https://ecosia-10-years.netlify.app" frameborder="0"></iframe>
</figure>

</Content-FreeSection>

</template>
</Content-ModalLink>
Desktop extension install button on the search results page (design and code). Green search annotation - leaf/coal blacklist, climate action tracker for countries. Cross promotion mobile - desktop. Press page.
<Content-ModalLink label="50 Million Doodle">
<template v-slot:modal>

<Content-FreeSection padding="is-small">

<figure class="image is-16by9">
<iframe style="background: white;" class="lazyload" data-src="https://ecosia-50-million.netlify.app" frameborder="0"></iframe>
</figure>

</Content-FreeSection>

</template>
</Content-ModalLink>
</p>

<br>
<br>

### As product manager

</template>

<template slot="slot1">

#### Android app

Praesent fermentum mauris in odio tempor, vitae tempus ante condimentum. Maecenas id nibh libero. Vivamus tristique elit eu dui mollis elementum.

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

<template slot="slot2">

#### iOS app

Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

<template slot="slot3">

#### Mac app

Maecenas sed nibh eleifend, congue felis et, malesuada eros. Nullam a metus quis eros pretium hendrerit ut a turpis.

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

</Content-ImageFrames-SquareImagesRow>




<Content-ImageFrames-SquareImagesRow padding="is-medium" :content="true" :images="[
{ url:'/images/ecosia/EcosiaMaps.jpg', alt:'Ecosia maps', caption:'Square image caption 1', slot:'slot1', iframe:false, action: {
  type: 'link',
  label: 'Wireframe prototype',
  url: 'https://acmoles.github.io/maps-ui/'
  } },
{ url:'/images/ecosia/Login.jpg', alt:'Ecosia accounts login', caption:'Square image caption 2', slot:'slot2', iframe:false, zoomable:true },
{ url:'/images/ecosia/SearchMap.jpg', alt:'Searches map visualisation', caption:'Square image caption 3', slot:'slot3', iframe:false, action: {
  type: 'link',
  label: 'Live visualisation',
  url: 'https://realtime.staging.ecosia.org/'
  } },
]">

<template slot="content">

### As product designer

</template>

<template slot="slot1">

#### Ecosia maps

Praesent fermentum mauris in odio tempor, vitae tempus ante condimentum. Maecenas id nibh libero. Vivamus tristique elit eu dui mollis elementum.

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

<template slot="slot2">

#### User accounts MVP

Fusce ac nunc posuere, tristique nibh at, lacinia nunc. Duis eget fringilla enim. Sed elementum elementum tincidunt.

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

<template slot="slot3">

#### Global searches data-vis

Maecenas sed nibh eleifend, congue felis et, malesuada eros. Nullam a metus quis eros pretium hendrerit ut a turpis. Suspendisse posuere purus ut lectus commodo, ac pulvinar neque blandit. Mauris a volutpat neque. Ut iaculis ipsum a elementum sodales.

<!-- [Live](https://realtime.staging.ecosia.org/) -->

- This prototype excited children the least{ .check }
- The interruption in the story broke the children's attention{ .cross }
{ .check-list }

</template>

</Content-ImageFrames-SquareImagesRow>






<Content-TextSection>

# Project 3

## First Title

Test paragraph

### Inner title

### Inner title

### Inner title

## Second Title

### Inner title

### Inner title

## Third Title
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

</Content-TextSection>


<Content-ImageFrames-SquareImagesRow :images="[
{ url:'https://bulma.io/images/placeholders/256x256.png', alt:'square test 1', caption:'Square image caption 1', slot:'slot1' },
{ url:'https://bulma.io/images/placeholders/256x256.png', alt:'square test 2', caption:'Square image caption 2', slot:'slot2' },
{ url:'https://bulma.io/images/placeholders/256x256.png', alt:'square test 3', caption:'Square image caption 3', slot:'slot3' },
]">

<template slot="slot1">

**Reading time**
12 minutes

</template>

<template slot="slot2">

**Team composition**
CTO, product designer, two full-stack developers

</template>

<template slot="slot3">

**My role**
Designer

</template>

</Content-ImageFrames-SquareImagesRow>





<Content-TextSection>

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


### Inner title

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


</Content-TextSection>



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
