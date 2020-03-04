<template>
  <svg class="logo-svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path id="path" d="M12.8682431,5.5194255 L19.1450635,16.5038611 C19.4190734,16.9833785 19.2524767,17.5942332 18.7729593,17.8682431 C18.6218616,17.9545847 18.4508473,18 18.2768203,18 L5.72317968,18 C5.17089493,18 4.72317968,17.5522847 4.72317968,17 C4.72317968,16.8259731 4.768595,16.6549588 4.85493654,16.5038611 L11.1317569,5.5194255 C11.4057668,5.03990805 12.0166215,4.87331133 12.4961389,5.14732129 C12.6511702,5.2359106 12.7796538,5.36439422 12.8682431,5.5194255 Z"></path>

        <clipPath id="clip">
          <use xlink:href="#path" overflow="visible"/>
        </clipPath>

        <linearGradient x1="25%" y1="50%" x2="89.5%" y2="88%" id="linearGradientLight">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#FFFFFF" offset="24%"></stop>
            <stop stop-color="#FFFFFF" stop-opacity="0" offset="25%"></stop>
            <stop stop-color="#FFFFFF" stop-opacity="0" offset="100%"></stop>
        </linearGradient>

        <linearGradient x1="25%" y1="50%" x2="89.5%" y2="88%" id="linearGradientDark">
            <stop stop-color="#1F2D3D" offset="0%"></stop>
            <stop stop-color="#1F2D3D" offset="24%"></stop>
            <stop stop-color="#1F2D3D" stop-opacity="0" offset="25%"></stop>
            <stop stop-color="#1F2D3D" stop-opacity="0" offset="100%"></stop>
        </linearGradient>

      </defs>
      <g id="logo" clip-path="url(#clip)" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <rect id="rectangle" fill="url(#linearGradientLight)" x="0" y="0" width="24" height="24"></rect>
      </g>
      <use id="outline" xlink:href="#path" stroke="#FFFFFF" stroke-width="1.5" fill="none" fill-rule="evenodd" />
  </svg>
</template>

<script>
// TODO outline logo?
// <linearGradient x1="25%" y1="50%" x2="89.5%" y2="88%" id="linearGradient">
//     <stop stop-color="#FFFFFF" offset="0%"></stop>
//     <stop stop-color="#FFFFFF" offset="31%"></stop>
//     <stop stop-color="#FAFAFA" stop-opacity="0.5" offset="32%"></stop>
//     <stop stop-color="#FFFFFF" offset="100%"></stop>
// </linearGradient>

export default {

}

</script>

<style lang="sass">
@import "../../styles/variables.sass"

.logo-svg
  position: relative
  bottom: 1px
  transform: scale(1.08)
  transition: transform 0.3s ease
  transform-origin: 50% 54%
  #rectangle
    transition: transform 0.9s ease
    transform-origin: 50% 50%

.layout:not(.home)
  .home-link:hover, .home-link:focus
    .logo-svg
      transform: rotateZ(-90deg) translateY(-0.05em) scale(1.16)
      #rectangle
        transform: scale(3) rotate(-31deg) translate(0, 0.36em)

.dark:not(.force)
  #outline
    stroke: $black

.dark:not(.force)
  #rectangle
    fill: url(#linearGradientDark)

</style>
