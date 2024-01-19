/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/images.js":
/*!*******************************!*\
  !*** ./src/scripts/images.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_logo_dark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/logo-dark.svg */ "./src/assets/images/logo-dark.svg");
/* harmony import */ var _assets_images_logo_light_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/logo-light.svg */ "./src/assets/images/logo-light.svg");
/* harmony import */ var _assets_images_icon_animation_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/icon-animation.svg */ "./src/assets/images/icon-animation.svg");
/* harmony import */ var _assets_images_icon_business_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/icon-business.svg */ "./src/assets/images/icon-business.svg");
/* harmony import */ var _assets_images_icon_crypto_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/icon-crypto.svg */ "./src/assets/images/icon-crypto.svg");
/* harmony import */ var _assets_images_icon_design_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/icon-design.svg */ "./src/assets/images/icon-design.svg");
/* harmony import */ var _assets_images_icon_photography_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/icon-photography.svg */ "./src/assets/images/icon-photography.svg");
/* harmony import */ var _assets_images_image_hero_desktop_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/image-hero-desktop.png */ "./src/assets/images/image-hero-desktop.png");
/* harmony import */ var _assets_images_image_hero_desktop_2x_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/image-hero-desktop@2x.png */ "./src/assets/images/image-hero-desktop@2x.png");
/* harmony import */ var _assets_images_image_hero_desktop_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/image-hero-desktop.webp */ "./src/assets/images/image-hero-desktop.webp");
/* harmony import */ var _assets_images_image_hero_desktop_2x_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/image-hero-desktop@2x.webp */ "./src/assets/images/image-hero-desktop@2x.webp");
/* harmony import */ var _assets_images_image_hero_tablet_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/images/image-hero-tablet.png */ "./src/assets/images/image-hero-tablet.png");
/* harmony import */ var _assets_images_image_hero_tablet_2x_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/images/image-hero-tablet@2x.png */ "./src/assets/images/image-hero-tablet@2x.png");
/* harmony import */ var _assets_images_image_hero_tablet_webp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/images/image-hero-tablet.webp */ "./src/assets/images/image-hero-tablet.webp");
/* harmony import */ var _assets_images_image_hero_tablet_2x_webp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/images/image-hero-tablet@2x.webp */ "./src/assets/images/image-hero-tablet@2x.webp");
/* harmony import */ var _assets_images_image_hero_mobile_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/images/image-hero-mobile.png */ "./src/assets/images/image-hero-mobile.png");
/* harmony import */ var _assets_images_image_hero_mobile_2x_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/images/image-hero-mobile@2x.png */ "./src/assets/images/image-hero-mobile@2x.png");
/* harmony import */ var _assets_images_image_hero_mobile_webp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/images/image-hero-mobile.webp */ "./src/assets/images/image-hero-mobile.webp");
/* harmony import */ var _assets_images_image_hero_mobile_2x_webp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/images/image-hero-mobile@2x.webp */ "./src/assets/images/image-hero-mobile@2x.webp");
'use-strict';





















// Logo
document.getElementById('header-logo').src = _assets_images_logo_dark_svg__WEBPACK_IMPORTED_MODULE_0__;
document.getElementById('footer-logo').src = _assets_images_logo_light_svg__WEBPACK_IMPORTED_MODULE_1__;

// Icons
document.getElementById('icon-animation').src = _assets_images_icon_animation_svg__WEBPACK_IMPORTED_MODULE_2__;
document.getElementById('icon-business').src = _assets_images_icon_business_svg__WEBPACK_IMPORTED_MODULE_3__;
document.getElementById('icon-crypto').src = _assets_images_icon_crypto_svg__WEBPACK_IMPORTED_MODULE_4__;
document.getElementById('icon-design').src = _assets_images_icon_design_svg__WEBPACK_IMPORTED_MODULE_5__;
document.getElementById('icon-photography').src = _assets_images_icon_photography_svg__WEBPACK_IMPORTED_MODULE_6__;

// Hero
const picture = document.getElementById('hero-img');
const srcDesk = document.createElement("source");
const srcTablet = document.createElement("source");
const srcMobile = document.createElement("source");
const img = document.createElement("img");
srcDesk.media = "(min-width: 1200px)";
srcDesk.srcset = `${_assets_images_image_hero_desktop_webp__WEBPACK_IMPORTED_MODULE_9__} 1x, ${_assets_images_image_hero_desktop_png__WEBPACK_IMPORTED_MODULE_7__} 1x, ${_assets_images_image_hero_desktop_2x_webp__WEBPACK_IMPORTED_MODULE_10__} 2x, ${_assets_images_image_hero_desktop_2x_png__WEBPACK_IMPORTED_MODULE_8__} 2x`;
srcTablet.media = "(min-width: 768px)";
srcTablet.srcset = `${_assets_images_image_hero_tablet_webp__WEBPACK_IMPORTED_MODULE_13__} 1x, ${_assets_images_image_hero_tablet_png__WEBPACK_IMPORTED_MODULE_11__} 1x, ${_assets_images_image_hero_tablet_2x_webp__WEBPACK_IMPORTED_MODULE_14__} 2x, ${_assets_images_image_hero_tablet_2x_png__WEBPACK_IMPORTED_MODULE_12__} 2x`;
srcMobile.srcset = `${_assets_images_image_hero_mobile_webp__WEBPACK_IMPORTED_MODULE_17__} 1x, ${_assets_images_image_hero_mobile_png__WEBPACK_IMPORTED_MODULE_15__} 1x, ${_assets_images_image_hero_mobile_2x_webp__WEBPACK_IMPORTED_MODULE_18__} 2x, ${_assets_images_image_hero_mobile_2x_png__WEBPACK_IMPORTED_MODULE_16__} 2x`;
img.src = _assets_images_image_hero_mobile_png__WEBPACK_IMPORTED_MODULE_15__;
img.classList.add('hero-img');
picture.appendChild(srcDesk);
picture.appendChild(srcTablet);
picture.appendChild(srcMobile);
picture.appendChild(img);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf */ "./src/assets/fonts/PlusJakartaSans-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* =======================================
                  RESET
========================================== */
/*https://andy-bell.co.uk/a-modern-css-reset/*/
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin-block-end: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role=list],
ol[role=list] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* custom */
li {
  list-style: none;
}

@font-face {
  font-family: "PlusJakartaSans";
  font-display: swap;
  font-weight: 100 900;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}
:root {
  --clr-primary: #13183F;
  --clr-primary-light: #666CA3;
  --clr-secondary: #83869A;
  --clr-accent: #F74780;
  --clr-accent-light: #FFA7C3;
  --clr-white: #FFFFFF;
  --grad-pink: linear-gradient(#FF6F48, #F02AA6);
  --grad-purple: linear-gradient(#4851FF, #F02AA6);
  --grad-pink-light: linear-gradient(rgba(255, 112, 72, 0.5), rgba(240, 42, 167, 0.5));
  --grad-purple-light: linear-gradient(rgba(72, 81, 255, 0.5), rgba(240, 42, 167, 0.5));
  --grad-blue-light: linear-gradient(#FFFFFF, #F0F1FF);
  --font: PlusJakartaSans, sans-serif;
  --header-height: 5rem;
}

body {
  font-family: var(--font);
  color: var(--clr-primary);
}

.link-start {
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  transition: 0.3s;
}

.link-start[data-type=button] {
  color: var(--clr-white);
  background-color: var(--clr-primary);
  line-height: 3rem;
  padding: 0 1.5em;
  border-radius: 100vw;
}

.link-start[data-type=button]:hover,
.link-start[data-type=button]:focus {
  background-color: var(--clr-primary-light);
}

.link-start[data-type=link] {
  color: var(--clr-accent);
  font-size: 1.125rem;
}

.link-start[data-type=link]:hover,
.link-start[data-type=link]:focus {
  color: var(--clr-accent-light);
}

.logo {
  width: 5.5rem;
}

.container {
  width: 92%;
  margin: 0 auto;
}

@media (min-width: 48em) {
  :root {
    --header-height: 6rem;
  }
  .container {
    width: 80%;
    min-width: 43rem;
  }
}
@media (min-width: 75em) {
  .link-start[data-type=button] {
    line-height: 3.5rem;
    font-size: 1.125rem;
    padding: 0 2em;
  }
  .logo {
    width: 7.125rem;
  }
  .container {
    width: 77%;
  }
}
@media (min-width: 100em) {
  :root {
    font-size: 1.125rem;
  }
}
@media (min-width: 120em) {
  :root {
    font-size: 1.25rem;
  }
}
.heading-l,
.heading-m,
.heading-s {
  font-weight: 800;
}

.heading-l {
  font-size: 2.5rem;
  line-height: 1.27;
}

.heading-m {
  font-size: 1.5rem;
  line-height: 1.25;
}

.heading-s {
  font-size: 1.25rem;
  line-height: 1.17;
}

.body-m {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.55;
  color: var(--clr-secondary);
}

.body-s {
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.75;
}

@media (min-width: 75em) {
  .heading-l {
    font-size: 3.5rem;
  }
  .heading-m {
    font-size: 2rem;
  }
  .heading-s {
    font-size: 1.5rem;
  }
  .body-m {
    font-size: 1.125rem;
  }
  .body-s {
    font-size: 1rem;
  }
}
header {
  display: grid;
  align-items: center;
  height: var(--header-height);
}

header .container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 48em) {
  header {
    position: relative;
    z-index: 2;
  }
}
.hero {
  padding-top: 1.375rem;
}

.hero-text {
  margin: 1.5rem 0 1.625rem;
}

.hero .link-start {
  background: var(--grad-pink);
  line-height: 3.5rem;
  padding: 0 2.25em;
}

.hero .link-start:hover,
.hero .link-start:focus {
  background: var(--grad-pink-light);
}

.hero-img-container {
  margin-top: 2rem;
  overflow: hidden;
}

.hero-img {
  width: 118vw;
  max-width: 120vw;
  object-position: -9vw 0;
  margin-bottom: -1.5rem;
}

@media (min-width: 48em) {
  .hero {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    min-height: 35rem;
    margin-top: calc(var(--header-height) * -1);
    padding-top: 0;
  }
  .container,
  .hero-img-container {
    grid-row: 1/2;
    grid-column: 1/2;
  }
  .hero-text-container {
    margin-top: calc(4.75rem + var(--header-height));
    width: 60%;
    max-width: 35ch;
  }
  .hero-img-container {
    width: 50%;
    max-width: 30rem;
    margin-top: 0;
    margin-inline-start: auto;
  }
  .hero-img {
    width: 180%;
    max-width: 400%;
    object-position: -0.5rem -1rem;
    margin-top: -20%;
  }
}
@media (min-width: 75em) {
  .hero-text-container {
    margin-top: calc(9.5rem + var(--header-height));
    max-width: 40ch;
  }
  .hero-text {
    max-width: 34ch;
    margin: 1.75rem 0 2.5rem;
  }
  .hero .link-start {
    line-height: 4rem;
    padding: 0 2em;
  }
  .hero-img-container {
    width: 49%;
    max-width: 56rem;
  }
  .hero-img {
    width: 150%;
  }
}
.courses {
  --card-padding: 1.75rem;
  --icon-size: 3.5rem;
  background: var(--grad-blue-light);
  padding-bottom: 2.5rem;
}

.courses-title-container,
.course-card {
  padding: var(--card-padding);
  padding-bottom: 2rem;
  border-radius: 0.625rem;
}

.courses-title-container {
  background: var(--grad-pink);
  color: var(--clr-white);
}

.course-card {
  position: relative;
  margin-top: 2.5rem;
  padding-top: calc(var(--card-padding) + var(--icon-size) / 2);
  background-color: var(--clr-white);
  box-shadow: 0 1.5rem 3.25rem rgba(6, 22, 141, 0.0445);
}

.course-icon {
  width: var(--icon-size);
  aspect-ratio: 1/1;
  position: absolute;
  top: calc(var(--icon-size) / 2 * -1);
  inset-inline-start: var(--card-padding);
}

.course-description {
  margin: 1rem 0 1.5rem;
}

@media (min-width: 48em) {
  .courses {
    --card-padding: 2rem;
    margin-top: 1.5rem;
    padding-bottom: 5.375em;
  }
  .courses .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 2rem 0.75rem;
  }
  .courses-title-container,
  .courses-list {
    display: grid;
    grid-column: 1/-1;
    grid-row: 1/-1;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
  }
  .courses-title-container {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  .courses-list li:nth-child(1) {
    grid-column: 2/3;
  }
  .courses-title-container,
  .course-card {
    margin-top: calc(var(--icon-size) / 2);
    padding-top: calc(var(--card-padding) + var(--icon-size) / 2);
    padding-inline-end: 1.25rem;
  }
  .course-card {
    display: flex;
    flex-direction: column;
  }
  .course-card .link-start {
    margin-top: auto;
  }
}
@media (min-width: 75em) {
  .courses {
    margin-top: 3.5rem;
    padding-bottom: 9em;
  }
  .courses .container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 3.5rem 1.875rem;
  }
  .courses-title-container,
  .course-card {
    padding-inline-end: var(--card-padding);
  }
  .course-card {
    gap: 1.5rem;
    padding-bottom: 2.5rem;
  }
  .course-description {
    margin: 0;
  }
}
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 7.5rem;
  background-color: var(--clr-primary);
}

footer .container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

footer .link-start {
  background: var(--grad-purple);
}

footer .link-start:hover,
footer .link-start:focus {
  background: var(--grad-purple-light);
}`, "",{"version":3,"sources":["webpack://./src/styles/_reset.scss","webpack://./src/styles/index.scss","webpack://./src/styles/_base.scss","webpack://./src/styles/_typography.scss","webpack://./src/styles/_header.scss","webpack://./src/styles/_section-hero.scss","webpack://./src/styles/_section-courses.scss","webpack://./src/styles/_footer.scss"],"names":[],"mappings":"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","sourcesContent":["/* =======================================\n                  RESET\n========================================== */\n\n/*https://andy-bell.co.uk/a-modern-css-reset/*/\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n    margin-block-end: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n    list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n    scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n    min-height: 100vh;\n    text-rendering: optimizeSpeed;\n    line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n    text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n    max-width: 100%;\n    display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n    html:focus-within {\n        scroll-behavior: auto;\n    }\n  \n    *,\n    *::before,\n    *::after {\n        animation-duration: 0.01ms !important;\n        animation-iteration-count: 1 !important;\n        transition-duration: 0.01ms !important;\n        scroll-behavior: auto !important;\n    }\n}\n\n/* custom */\n\nli {\n    list-style: none;\n}","/* =======================================\n                  RESET\n========================================== */\n/*https://andy-bell.co.uk/a-modern-css-reset/*/\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin-block-end: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role=list],\nol[role=list] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n/* custom */\nli {\n  list-style: none;\n}\n\n@font-face {\n  font-family: \"PlusJakartaSans\";\n  font-display: swap;\n  font-weight: 100 900;\n  src: url(../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf) format(\"truetype\");\n}\n:root {\n  --clr-primary: #13183F;\n  --clr-primary-light: #666CA3;\n  --clr-secondary: #83869A;\n  --clr-accent: #F74780;\n  --clr-accent-light: #FFA7C3;\n  --clr-white: #FFFFFF;\n  --grad-pink: linear-gradient(#FF6F48, #F02AA6);\n  --grad-purple: linear-gradient(#4851FF, #F02AA6);\n  --grad-pink-light: linear-gradient(rgba(255, 112, 72, 0.5), rgba(240, 42, 167, 0.5));\n  --grad-purple-light: linear-gradient(rgba(72, 81, 255, 0.5), rgba(240, 42, 167, 0.5));\n  --grad-blue-light: linear-gradient(#FFFFFF, #F0F1FF);\n  --font: PlusJakartaSans, sans-serif;\n  --header-height: 5rem;\n}\n\nbody {\n  font-family: var(--font);\n  color: var(--clr-primary);\n}\n\n.link-start {\n  text-decoration: none;\n  display: inline-block;\n  font-weight: 700;\n  transition: 0.3s;\n}\n\n.link-start[data-type=button] {\n  color: var(--clr-white);\n  background-color: var(--clr-primary);\n  line-height: 3rem;\n  padding: 0 1.5em;\n  border-radius: 100vw;\n}\n\n.link-start[data-type=button]:hover,\n.link-start[data-type=button]:focus {\n  background-color: var(--clr-primary-light);\n}\n\n.link-start[data-type=link] {\n  color: var(--clr-accent);\n  font-size: 1.125rem;\n}\n\n.link-start[data-type=link]:hover,\n.link-start[data-type=link]:focus {\n  color: var(--clr-accent-light);\n}\n\n.logo {\n  width: 5.5rem;\n}\n\n.container {\n  width: 92%;\n  margin: 0 auto;\n}\n\n@media (min-width: 48em) {\n  :root {\n    --header-height: 6rem;\n  }\n  .container {\n    width: 80%;\n    min-width: 43rem;\n  }\n}\n@media (min-width: 75em) {\n  .link-start[data-type=button] {\n    line-height: 3.5rem;\n    font-size: 1.125rem;\n    padding: 0 2em;\n  }\n  .logo {\n    width: 7.125rem;\n  }\n  .container {\n    width: 77%;\n  }\n}\n@media (min-width: 100em) {\n  :root {\n    font-size: 1.125rem;\n  }\n}\n@media (min-width: 120em) {\n  :root {\n    font-size: 1.25rem;\n  }\n}\n.heading-l,\n.heading-m,\n.heading-s {\n  font-weight: 800;\n}\n\n.heading-l {\n  font-size: 2.5rem;\n  line-height: 1.27;\n}\n\n.heading-m {\n  font-size: 1.5rem;\n  line-height: 1.25;\n}\n\n.heading-s {\n  font-size: 1.25rem;\n  line-height: 1.17;\n}\n\n.body-m {\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.55;\n  color: var(--clr-secondary);\n}\n\n.body-s {\n  font-size: 0.875rem;\n  font-weight: 700;\n  line-height: 1.75;\n}\n\n@media (min-width: 75em) {\n  .heading-l {\n    font-size: 3.5rem;\n  }\n  .heading-m {\n    font-size: 2rem;\n  }\n  .heading-s {\n    font-size: 1.5rem;\n  }\n  .body-m {\n    font-size: 1.125rem;\n  }\n  .body-s {\n    font-size: 1rem;\n  }\n}\nheader {\n  display: grid;\n  align-items: center;\n  height: var(--header-height);\n}\n\nheader .container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n\n@media (min-width: 48em) {\n  header {\n    position: relative;\n    z-index: 2;\n  }\n}\n.hero {\n  padding-top: 1.375rem;\n}\n\n.hero-text {\n  margin: 1.5rem 0 1.625rem;\n}\n\n.hero .link-start {\n  background: var(--grad-pink);\n  line-height: 3.5rem;\n  padding: 0 2.25em;\n}\n\n.hero .link-start:hover,\n.hero .link-start:focus {\n  background: var(--grad-pink-light);\n}\n\n.hero-img-container {\n  margin-top: 2rem;\n  overflow: hidden;\n}\n\n.hero-img {\n  width: 118vw;\n  max-width: 120vw;\n  object-position: -9vw 0;\n  margin-bottom: -1.5rem;\n}\n\n@media (min-width: 48em) {\n  .hero {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n    min-height: 35rem;\n    margin-top: calc(var(--header-height) * -1);\n    padding-top: 0;\n  }\n  .container,\n  .hero-img-container {\n    grid-row: 1/2;\n    grid-column: 1/2;\n  }\n  .hero-text-container {\n    margin-top: calc(4.75rem + var(--header-height));\n    width: 60%;\n    max-width: 35ch;\n  }\n  .hero-img-container {\n    width: 50%;\n    max-width: 30rem;\n    margin-top: 0;\n    margin-inline-start: auto;\n  }\n  .hero-img {\n    width: 180%;\n    max-width: 400%;\n    object-position: -0.5rem -1rem;\n    margin-top: -20%;\n  }\n}\n@media (min-width: 75em) {\n  .hero-text-container {\n    margin-top: calc(9.5rem + var(--header-height));\n    max-width: 40ch;\n  }\n  .hero-text {\n    max-width: 34ch;\n    margin: 1.75rem 0 2.5rem;\n  }\n  .hero .link-start {\n    line-height: 4rem;\n    padding: 0 2em;\n  }\n  .hero-img-container {\n    width: 49%;\n    max-width: 56rem;\n  }\n  .hero-img {\n    width: 150%;\n  }\n}\n.courses {\n  --card-padding: 1.75rem;\n  --icon-size: 3.5rem;\n  background: var(--grad-blue-light);\n  padding-bottom: 2.5rem;\n}\n\n.courses-title-container,\n.course-card {\n  padding: var(--card-padding);\n  padding-bottom: 2rem;\n  border-radius: 0.625rem;\n}\n\n.courses-title-container {\n  background: var(--grad-pink);\n  color: var(--clr-white);\n}\n\n.course-card {\n  position: relative;\n  margin-top: 2.5rem;\n  padding-top: calc(var(--card-padding) + var(--icon-size) / 2);\n  background-color: var(--clr-white);\n  box-shadow: 0 1.5rem 3.25rem rgba(6, 22, 141, 0.0445);\n}\n\n.course-icon {\n  width: var(--icon-size);\n  aspect-ratio: 1/1;\n  position: absolute;\n  top: calc(var(--icon-size) / 2 * -1);\n  inset-inline-start: var(--card-padding);\n}\n\n.course-description {\n  margin: 1rem 0 1.5rem;\n}\n\n@media (min-width: 48em) {\n  .courses {\n    --card-padding: 2rem;\n    margin-top: 1.5rem;\n    padding-bottom: 5.375em;\n  }\n  .courses .container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(3, auto);\n    gap: 2rem 0.75rem;\n  }\n  .courses-title-container,\n  .courses-list {\n    display: grid;\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n    grid-template-columns: subgrid;\n    grid-template-rows: subgrid;\n  }\n  .courses-title-container {\n    grid-column: 1/2;\n    grid-row: 1/2;\n  }\n  .courses-list li:nth-child(1) {\n    grid-column: 2/3;\n  }\n  .courses-title-container,\n  .course-card {\n    margin-top: calc(var(--icon-size) / 2);\n    padding-top: calc(var(--card-padding) + var(--icon-size) / 2);\n    padding-inline-end: 1.25rem;\n  }\n  .course-card {\n    display: flex;\n    flex-direction: column;\n  }\n  .course-card .link-start {\n    margin-top: auto;\n  }\n}\n@media (min-width: 75em) {\n  .courses {\n    margin-top: 3.5rem;\n    padding-bottom: 9em;\n  }\n  .courses .container {\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: repeat(2, auto);\n    gap: 3.5rem 1.875rem;\n  }\n  .courses-title-container,\n  .course-card {\n    padding-inline-end: var(--card-padding);\n  }\n  .course-card {\n    gap: 1.5rem;\n    padding-bottom: 2.5rem;\n  }\n  .course-description {\n    margin: 0;\n  }\n}\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 7.5rem;\n  background-color: var(--clr-primary);\n}\n\nfooter .container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n\nfooter .link-start {\n  background: var(--grad-purple);\n}\n\nfooter .link-start:hover,\nfooter .link-start:focus {\n  background: var(--grad-purple-light);\n}","@font-face {\n    font-family: 'PlusJakartaSans';\n    font-display: swap;\n    font-weight: 100 900;\n    src: url(../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf) \n         format('truetype');\n}\n\n:root {\n    --clr-primary: #13183F;\n    --clr-primary-light: #666CA3;\n    --clr-secondary: #83869A;\n    --clr-accent: #F74780;\n    --clr-accent-light: #FFA7C3;\n    --clr-white: #FFFFFF;\n\n    --grad-pink: linear-gradient(#FF6F48, #F02AA6);\n    --grad-purple: linear-gradient(#4851FF, #F02AA6);\n    --grad-pink-light: linear-gradient(rgba(255, 112, 72, 0.5), rgba(240, 42, 167, 0.5));\n    --grad-purple-light: linear-gradient(rgba(72, 81, 255, 0.5), rgba(240, 42, 167, 0.5));\n    --grad-blue-light: linear-gradient(#FFFFFF, #F0F1FF);\n\n    --font: PlusJakartaSans, sans-serif;\n\n    --header-height: 5rem;\n}\n\nbody {\n    font-family: var(--font);\n    color: var(--clr-primary);\n}\n\n// Links\n\n.link-start {\n    text-decoration: none;\n    display: inline-block;\n    font-weight: 700;\n    transition: .3s;\n}\n\n.link-start[data-type=\"button\"] {\n    color: var(--clr-white);\n    background-color: var(--clr-primary);\n    line-height: 3rem;\n    padding: 0 1.5em;\n    border-radius: 100vw;\n}\n\n.link-start[data-type=\"button\"]:hover,\n.link-start[data-type=\"button\"]:focus {\n    background-color: var(--clr-primary-light);\n}\n\n.link-start[data-type=\"link\"] {\n    color: var(--clr-accent);\n    font-size: 1.125rem;\n}\n\n.link-start[data-type=\"link\"]:hover,\n.link-start[data-type=\"link\"]:focus {\n    color: var(--clr-accent-light);\n}\n\n\n// Logo\n\n.logo {\n    width: 5.5rem;\n}\n\n\n// Container\n\n.container {\n    width: 92%;\n    margin: 0 auto;\n}\n\n\n// media queries\n\n@media (min-width: 48em) {\n    :root {\n        --header-height: 6rem;\n    }\n\n    .container {\n        width: 80%;\n        min-width: 43rem;\n    }\n}\n\n@media (min-width: 75em) {\n    .link-start[data-type=\"button\"] {\n        line-height: 3.5rem;\n        font-size: 1.125rem;\n        padding: 0 2em;\n    }\n\n    .logo {\n        width: 7.125rem;\n    }\n\n    .container {\n        width: 77%;\n    }\n}\n\n@media (min-width: 100em) {\n    :root {\n        font-size: 1.125rem;\n    }\n}\n\n@media (min-width: 120em) {\n    :root {\n        font-size: 1.25rem;\n    }\n}\n",".heading-l,\n.heading-m,\n.heading-s {\n    font-weight: 800;\n}\n\n.heading-l {\n    font-size: 2.5rem;\n    line-height: 1.27;\n}\n\n.heading-m {\n    font-size: 1.5rem;\n    line-height: 1.25;\n}\n\n.heading-s {\n    font-size: 1.25rem;\n    line-height: 1.17;\n}\n\n.body-m {\n    font-size: 1rem;\n    font-weight: 500;\n    line-height: 1.55;\n    color: var(--clr-secondary);\n}\n\n.body-s {\n    font-size: 0.875rem;\n    font-weight: 700;\n    line-height: 1.75;\n}\n\n@media (min-width: 75em) {\n\n    .heading-l {\n        font-size: 3.5rem;\n    }\n    \n    .heading-m {\n        font-size: 2rem;\n    }\n    \n    .heading-s {\n        font-size: 1.5rem;\n    }\n    \n    .body-m {\n        font-size: 1.125rem;\n    }\n    \n    .body-s {\n        font-size: 1rem;\n    }\n\n}","header {\n    display: grid;\n    align-items: center;\n    height: var(--header-height);\n}\n\nheader .container {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n// Tablet\n\n@media (min-width: 48em) {\n    header {\n        // place the header ahead of the hero \n        position: relative;\n        z-index: 2;\n    }\n}",".hero {\n    padding-top: 1.375rem;\n}\n\n.hero-text {\n    margin: 1.5rem 0 1.625rem;\n}\n\n.hero .link-start {\n    background: var(--grad-pink);\n    line-height: 3.5rem;\n    padding: 0 2.25em;\n}\n\n.hero .link-start:hover,\n.hero .link-start:focus {\n    background: var(--grad-pink-light);\n}\n\n// Remove image extra padding\n\n.hero-img-container {\n    margin-top: 2rem;\n    overflow: hidden;\n}\n\n.hero-img {\n    width: 118vw;\n    max-width: 120vw;\n    object-position: -9vw 0;\n    margin-bottom: -1.5rem;\n}\n\n\n// Tablet\n\n@media (min-width: 48em) {\n\n    .hero {\n        display: grid;\n        grid-template-columns: 1fr;\n        grid-template-rows: 1fr;\n        \n        min-height: 35rem;\n        margin-top: calc(var(--header-height) * -1);\n        padding-top: 0;\n    }\n\n    .container,\n    .hero-img-container {\n        grid-row: 1 / 2;\n        grid-column: 1 / 2;\n    }\n\n    .hero-text-container {\n        margin-top: calc(4.75rem + var(--header-height));\n        width: 60%;\n        max-width: 35ch;\n    }\n\n    .hero-img-container {\n        width: 50%;\n        max-width: 30rem;\n        margin-top: 0;\n        margin-inline-start: auto;\n    }\n\n    .hero-img {\n        width: 180%;\n        max-width: 400%;\n        object-position: -.5rem -1rem;\n        margin-top: -20%;\n    }\n}\n\n\n// Desktop\n\n@media (min-width: 75em) {\n\n    .hero-text-container {\n        margin-top: calc(9.5rem + var(--header-height));\n        max-width: 40ch;\n    }\n\n    .hero-text {\n        max-width: 34ch;\n        margin: 1.75rem 0 2.5rem;\n    }\n\n    .hero .link-start {\n        line-height: 4rem;\n        padding: 0 2em;\n    }\n\n    .hero-img-container {\n        width: 49%;\n        max-width: 56rem;\n    }\n\n    .hero-img {\n        width: 150%;\n    }\n}\n\n",".courses {\n    --card-padding: 1.75rem;\n    --icon-size: 3.5rem;\n\n    background: var(--grad-blue-light);\n    padding-bottom: 2.5rem;\n}\n\n.courses-title-container,\n.course-card {\n    padding: var(--card-padding);\n    padding-bottom: 2rem;\n    border-radius: .625rem;\n}\n\n.courses-title-container {\n    background: var(--grad-pink);\n    color: var(--clr-white);\n}\n\n.course-card {\n    position: relative;\n    margin-top: 2.5rem;\n    padding-top: calc(var(--card-padding) + calc(var(--icon-size) / 2));\n    background-color: var(--clr-white);\n    box-shadow: 0 1.5rem 3.25rem rgba(6, 22, 141, 0.0445);\n}\n\n.course-icon {\n    width: var(--icon-size);\n    aspect-ratio: 1 / 1;\n    position: absolute;\n    top: calc((var(--icon-size) / 2) * -1);\n    inset-inline-start: var(--card-padding);\n}\n\n.course-description {\n    margin: 1rem 0 1.5rem;\n} \n\n\n// Tablet\n\n@media (min-width: 48em) {\n\n    .courses {\n        --card-padding: 2rem;\n        margin-top: 1.5rem;\n        padding-bottom: 5.375em;\n    }\n\n    .courses .container {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-template-rows: repeat(3, auto);\n        gap: 2rem .75rem;\n    }\n\n    .courses-title-container,\n    .courses-list {\n        display: grid;\n        grid-column: 1 / -1;\n        grid-row: 1 / -1;\n        grid-template-columns: subgrid;\n        grid-template-rows: subgrid;\n    }\n\n    .courses-title-container {\n        grid-column: 1 / 2;\n        grid-row: 1 / 2;\n    }\n\n    .courses-list li:nth-child(1) {\n        grid-column: 2 / 3;\n    }\n\n    .courses-title-container,\n    .course-card {\n        margin-top: calc(var(--icon-size) / 2);\n        padding-top: calc(var(--card-padding) + calc(var(--icon-size) / 2));\n        padding-inline-end: 1.25rem;\n    }\n\n    .course-card {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .course-card .link-start {\n        margin-top: auto;\n    }\n\n}\n\n\n// Desktop\n\n@media (min-width: 75em) {\n\n    .courses {\n        margin-top: 3.5rem;\n        padding-bottom: 9em;\n    }\n\n    .courses .container {\n        grid-template-columns: repeat(3, 1fr);\n        grid-template-rows: repeat(2, auto);\n        gap: 3.5rem 1.875rem;\n    }\n\n    .courses-title-container,\n    .course-card {\n        padding-inline-end: var(--card-padding);\n    }\n\n    .course-card {\n        gap: 1.5rem;\n        padding-bottom: 2.5rem;\n    }\n\n    .course-description {\n        margin: 0;\n    } \n\n\n}","footer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 7.5rem;\n    background-color: var(--clr-primary);\n}\n\nfooter .container {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\nfooter .link-start {\n    background: var(--grad-purple);\n}\n\nfooter .link-start:hover,\nfooter .link-start:focus {\n    background: var(--grad-purple-light);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/fonts/PlusJakartaSans-VariableFont_wght.ttf":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/PlusJakartaSans-VariableFont_wght.ttf ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/PlusJakartaSans-VariableFont_wght-91a892b057d3b1e6c20b.ttf";

/***/ }),

/***/ "./src/assets/images/icon-animation.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/icon-animation.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/icon-animation-222979d47fd2dbbc9a21.svg";

/***/ }),

/***/ "./src/assets/images/icon-business.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/icon-business.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/icon-business-e1585951503a38781a99.svg";

/***/ }),

/***/ "./src/assets/images/icon-crypto.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icon-crypto.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/icon-crypto-8d407fcff65885d92537.svg";

/***/ }),

/***/ "./src/assets/images/icon-design.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icon-design.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/icon-design-06f787d808ae5438fdfe.svg";

/***/ }),

/***/ "./src/assets/images/icon-photography.svg":
/*!************************************************!*\
  !*** ./src/assets/images/icon-photography.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/icon-photography-eeaad81e7533c8103b72.svg";

/***/ }),

/***/ "./src/assets/images/image-hero-desktop.png":
/*!**************************************************!*\
  !*** ./src/assets/images/image-hero-desktop.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-hero-desktop-e4dcc5c0b95534d1178e.png";

/***/ }),

/***/ "./src/assets/images/image-hero-desktop.webp":
/*!***************************************************!*\
  !*** ./src/assets/images/image-hero-desktop.webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-hero-desktop-a1ed811c49927ad2423a.webp";

/***/ }),

/***/ "./src/assets/images/image-hero-desktop@2x.png":
/*!*****************************************************!*\
  !*** ./src/assets/images/image-hero-desktop@2x.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-hero-desktop@2x-110673742c14b1dc38e7.png";

/***/ }),

/***/ "./src/assets/images/image-hero-desktop@2x.webp":
/*!******************************************************!*\
  !*** ./src/assets/images/image-hero-desktop@2x.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-hero-desktop@2x-3af19b9bb3d89b64286e.webp";

/***/ }),

/***/ "./src/assets/images/image-hero-mobile.png":
/*!*************************************************!*\
  !*** ./src/assets/images/image-hero-mobile.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-hero-mobile-e24fb846538770420c24.png";

/***/ }),

/***/ "./src/assets/images/image-hero-mobile.webp":
/*!**************************************************!*\
  !*** ./src/assets/images/image-hero-mobile.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-hero-mobile-c84a484ed2f4253320c8.webp";

/***/ }),

/***/ "./src/assets/images/image-hero-mobile@2x.png":
/*!****************************************************!*\
  !*** ./src/assets/images/image-hero-mobile@2x.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-hero-mobile@2x-173eaedeced969eb33a2.png";

/***/ }),

/***/ "./src/assets/images/image-hero-mobile@2x.webp":
/*!*****************************************************!*\
  !*** ./src/assets/images/image-hero-mobile@2x.webp ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-hero-mobile@2x-4c68f7ef73002d1374a6.webp";

/***/ }),

/***/ "./src/assets/images/image-hero-tablet.png":
/*!*************************************************!*\
  !*** ./src/assets/images/image-hero-tablet.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-hero-tablet-1f330de35298314c6430.png";

/***/ }),

/***/ "./src/assets/images/image-hero-tablet.webp":
/*!**************************************************!*\
  !*** ./src/assets/images/image-hero-tablet.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-hero-tablet-3285c911ee87c11a9d7a.webp";

/***/ }),

/***/ "./src/assets/images/image-hero-tablet@2x.png":
/*!****************************************************!*\
  !*** ./src/assets/images/image-hero-tablet@2x.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-hero-tablet@2x-81ff23ea8ef9eda78a4a.png";

/***/ }),

/***/ "./src/assets/images/image-hero-tablet@2x.webp":
/*!*****************************************************!*\
  !*** ./src/assets/images/image-hero-tablet@2x.webp ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-hero-tablet@2x-1ed11650ac0c6edc16a2.webp";

/***/ }),

/***/ "./src/assets/images/logo-dark.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/logo-dark.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo-dark-bd6dbe3fb81a86888ece.svg";

/***/ }),

/***/ "./src/assets/images/logo-light.svg":
/*!******************************************!*\
  !*** ./src/assets/images/logo-light.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo-light-9fb3a720f1b85b9ed999.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _scripts_images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/images.js */ "./src/scripts/images.js");
'use-strict';



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1YQUFtWCxNQUFNLFdBQVcsV0FBVyxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sV0FBVyxjQUFjLFdBQVcsTUFBTSxXQUFXLE1BQU0sV0FBVyxNQUFNLFdBQVcsS0FBSyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsTUFBTSxXQUFXLE1BQU0sVUFBVSxVQUFVLE1BQU0sV0FBVyxRQUFRLFVBQVUsTUFBTSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFFBQVEsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFN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QSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBQSxZQUFZOztBQUVpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1kZXYtZW52Ly4vc3JjL3NjcmlwdHMvaW1hZ2VzLmpzIiwid2VicGFjazovL3dlYi1kZXYtZW52Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIiwid2VicGFjazovL3dlYi1kZXYtZW52Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWItZGV2LWVudi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2ViLWRldi1lbnYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWItZGV2LWVudi8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz80YzM3Iiwid2VicGFjazovL3dlYi1kZXYtZW52Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYi1kZXYtZW52Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWItZGV2LWVudi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWItZGV2LWVudi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWItZGV2LWVudi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYi1kZXYtZW52Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViLWRldi1lbnYvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViLWRldi1lbnYvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2ViLWRldi1lbnYvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYi1kZXYtZW52L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2ViLWRldi1lbnYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWItZGV2LWVudi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYi1kZXYtZW52L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYi1kZXYtZW52L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYi1kZXYtZW52L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWItZGV2LWVudi8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Utc3RyaWN0JztcblxuaW1wb3J0IExvZ29EYXJrIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbG9nby1kYXJrLnN2Zyc7XG5pbXBvcnQgTG9nb0xpZ2h0IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvbG9nby1saWdodC5zdmcnO1xuXG5pbXBvcnQgSWNvbkFuaW1hdGlvbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ljb24tYW5pbWF0aW9uLnN2Zyc7XG5pbXBvcnQgSWNvbkJ1c2luZXNzIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1idXNpbmVzcy5zdmcnO1xuaW1wb3J0IEljb25DcnlwdG8gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pY29uLWNyeXB0by5zdmcnO1xuaW1wb3J0IEljb25EZXNpZ24gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pY29uLWRlc2lnbi5zdmcnO1xuaW1wb3J0IEljb25QaG90b2dyYXBoeSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ljb24tcGhvdG9ncmFwaHkuc3ZnJztcblxuaW1wb3J0IEhlcm9EZXNrUG5nIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtaGVyby1kZXNrdG9wLnBuZyc7XG5pbXBvcnQgSGVyb0Rlc2tQbmcyeCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ltYWdlLWhlcm8tZGVza3RvcEAyeC5wbmcnO1xuaW1wb3J0IEhlcm9EZXNrV2VicCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ltYWdlLWhlcm8tZGVza3RvcC53ZWJwJztcbmltcG9ydCBIZXJvRGVza1dlYnAyeCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ltYWdlLWhlcm8tZGVza3RvcEAyeC53ZWJwJztcbmltcG9ydCBIZXJvVGFibGV0UG5nIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtaGVyby10YWJsZXQucG5nJztcbmltcG9ydCBIZXJvVGFibGV0UG5nMnggZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pbWFnZS1oZXJvLXRhYmxldEAyeC5wbmcnO1xuaW1wb3J0IEhlcm9UYWJsZXRXZWJwIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtaGVyby10YWJsZXQud2VicCc7XG5pbXBvcnQgSGVyb1RhYmxldFdlYnAyeCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ltYWdlLWhlcm8tdGFibGV0QDJ4LndlYnAnO1xuaW1wb3J0IEhlcm9Nb2JpbGVQbmcgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pbWFnZS1oZXJvLW1vYmlsZS5wbmcnO1xuaW1wb3J0IEhlcm9Nb2JpbGVQbmcyeCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ltYWdlLWhlcm8tbW9iaWxlQDJ4LnBuZyc7XG5pbXBvcnQgSGVyb01vYmlsZVdlYnAgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pbWFnZS1oZXJvLW1vYmlsZS53ZWJwJztcbmltcG9ydCBIZXJvTW9iaWxlV2VicDJ4IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtaGVyby1tb2JpbGVAMngud2VicCc7XG5cbi8vIExvZ29cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItbG9nbycpLnNyYyA9IExvZ29EYXJrO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3Rlci1sb2dvJykuc3JjID0gTG9nb0xpZ2h0O1xuXG4vLyBJY29uc1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24tYW5pbWF0aW9uJykuc3JjID0gSWNvbkFuaW1hdGlvbjtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpY29uLWJ1c2luZXNzJykuc3JjID0gSWNvbkJ1c2luZXNzO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24tY3J5cHRvJykuc3JjID0gSWNvbkNyeXB0bztcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpY29uLWRlc2lnbicpLnNyYyA9IEljb25EZXNpZ247XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWNvbi1waG90b2dyYXBoeScpLnNyYyA9IEljb25QaG90b2dyYXBoeTtcblxuLy8gSGVyb1xuY29uc3QgcGljdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZXJvLWltZycpO1xuY29uc3Qgc3JjRGVzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7XG5jb25zdCBzcmNUYWJsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xuY29uc3Qgc3JjTW9iaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbnNyY0Rlc2subWVkaWEgPSBcIihtaW4td2lkdGg6IDEyMDBweClcIjtcbnNyY0Rlc2suc3Jjc2V0ID0gYCR7SGVyb0Rlc2tXZWJwfSAxeCwgJHtIZXJvRGVza1BuZ30gMXgsICR7SGVyb0Rlc2tXZWJwMnh9IDJ4LCAke0hlcm9EZXNrUG5nMnh9IDJ4YDtcblxuc3JjVGFibGV0Lm1lZGlhID0gXCIobWluLXdpZHRoOiA3NjhweClcIjtcbnNyY1RhYmxldC5zcmNzZXQgPSBgJHtIZXJvVGFibGV0V2VicH0gMXgsICR7SGVyb1RhYmxldFBuZ30gMXgsICR7SGVyb1RhYmxldFdlYnAyeH0gMngsICR7SGVyb1RhYmxldFBuZzJ4fSAyeGA7XG5cbnNyY01vYmlsZS5zcmNzZXQgPSBgJHtIZXJvTW9iaWxlV2VicH0gMXgsICR7SGVyb01vYmlsZVBuZ30gMXgsICR7SGVyb01vYmlsZVdlYnAyeH0gMngsICR7SGVyb01vYmlsZVBuZzJ4fSAyeGA7XG5cbmltZy5zcmMgPSBIZXJvTW9iaWxlUG5nO1xuaW1nLmNsYXNzTGlzdC5hZGQoJ2hlcm8taW1nJyk7XG5cbnBpY3R1cmUuYXBwZW5kQ2hpbGQoc3JjRGVzayk7XG5waWN0dXJlLmFwcGVuZENoaWxkKHNyY1RhYmxldCk7XG5waWN0dXJlLmFwcGVuZENoaWxkKHNyY01vYmlsZSk7XG5waWN0dXJlLmFwcGVuZENoaWxkKGltZyk7XG5cblxuXG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvZm9udHMvUGx1c0pha2FydGFTYW5zLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAgICAgICAgICBSRVNFVFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKmh0dHBzOi8vYW5keS1iZWxsLmNvLnVrL2EtbW9kZXJuLWNzcy1yZXNldC8qL1xuLyogQm94IHNpemluZyBydWxlcyAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cbmJvZHksXG5oMSxcbmgyLFxuaDMsXG5oNCxcbnAsXG5maWd1cmUsXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCB7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG59XG5cbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xudWxbcm9sZT1saXN0XSxcbm9sW3JvbGU9bGlzdF0ge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXG5odG1sOmZvY3VzLXdpdGhpbiB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xuYTpub3QoW2NsYXNzXSkge1xuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XG59XG5cbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cbmltZyxcbnBpY3R1cmUge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxuXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICBodG1sOmZvY3VzLXdpdGhpbiB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xuICB9XG4gICosXG4gICo6OmJlZm9yZSxcbiAgKjo6YWZ0ZXIge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG4vKiBjdXN0b20gKi9cbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsdXNKYWthcnRhU2Fuc1wiO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIGZvbnQtd2VpZ2h0OiAxMDAgOTAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbjpyb290IHtcbiAgLS1jbHItcHJpbWFyeTogIzEzMTgzRjtcbiAgLS1jbHItcHJpbWFyeS1saWdodDogIzY2NkNBMztcbiAgLS1jbHItc2Vjb25kYXJ5OiAjODM4NjlBO1xuICAtLWNsci1hY2NlbnQ6ICNGNzQ3ODA7XG4gIC0tY2xyLWFjY2VudC1saWdodDogI0ZGQTdDMztcbiAgLS1jbHItd2hpdGU6ICNGRkZGRkY7XG4gIC0tZ3JhZC1waW5rOiBsaW5lYXItZ3JhZGllbnQoI0ZGNkY0OCwgI0YwMkFBNik7XG4gIC0tZ3JhZC1wdXJwbGU6IGxpbmVhci1ncmFkaWVudCgjNDg1MUZGLCAjRjAyQUE2KTtcbiAgLS1ncmFkLXBpbmstbGlnaHQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMTEyLCA3MiwgMC41KSwgcmdiYSgyNDAsIDQyLCAxNjcsIDAuNSkpO1xuICAtLWdyYWQtcHVycGxlLWxpZ2h0OiBsaW5lYXItZ3JhZGllbnQocmdiYSg3MiwgODEsIDI1NSwgMC41KSwgcmdiYSgyNDAsIDQyLCAxNjcsIDAuNSkpO1xuICAtLWdyYWQtYmx1ZS1saWdodDogbGluZWFyLWdyYWRpZW50KCNGRkZGRkYsICNGMEYxRkYpO1xuICAtLWZvbnQ6IFBsdXNKYWthcnRhU2Fucywgc2Fucy1zZXJpZjtcbiAgLS1oZWFkZXItaGVpZ2h0OiA1cmVtO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xufVxuXG4ubGluay1zdGFydCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4ubGluay1zdGFydFtkYXRhLXR5cGU9YnV0dG9uXSB7XG4gIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICBwYWRkaW5nOiAwIDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiAxMDB2dztcbn1cblxuLmxpbmstc3RhcnRbZGF0YS10eXBlPWJ1dHRvbl06aG92ZXIsXG4ubGluay1zdGFydFtkYXRhLXR5cGU9YnV0dG9uXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5LWxpZ2h0KTtcbn1cblxuLmxpbmstc3RhcnRbZGF0YS10eXBlPWxpbmtdIHtcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuXG4ubGluay1zdGFydFtkYXRhLXR5cGU9bGlua106aG92ZXIsXG4ubGluay1zdGFydFtkYXRhLXR5cGU9bGlua106Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1saWdodCk7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDUuNXJlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MiU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICA6cm9vdCB7XG4gICAgLS1oZWFkZXItaGVpZ2h0OiA2cmVtO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWluLXdpZHRoOiA0M3JlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmxpbmstc3RhcnRbZGF0YS10eXBlPWJ1dHRvbl0ge1xuICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBwYWRkaW5nOiAwIDJlbTtcbiAgfVxuICAubG9nbyB7XG4gICAgd2lkdGg6IDcuMTI1cmVtO1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiA3NyU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDBlbSkge1xuICA6cm9vdCB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMGVtKSB7XG4gIDpyb290IHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbi5oZWFkaW5nLWwsXG4uaGVhZGluZy1tLFxuLmhlYWRpbmctcyB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5oZWFkaW5nLWwge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjc7XG59XG5cbi5oZWFkaW5nLW0ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5cbi5oZWFkaW5nLXMge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE3O1xufVxuXG4uYm9keS1tIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41NTtcbiAgY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xufVxuXG4uYm9keS1zIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5oZWFkaW5nLWwge1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICB9XG4gIC5oZWFkaW5nLW0ge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICAuaGVhZGluZy1zIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuICAuYm9keS1tIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB9XG4gIC5ib2R5LXMge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbn1cblxuaGVhZGVyIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XG4gIGhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbn1cbi5oZXJvIHtcbiAgcGFkZGluZy10b3A6IDEuMzc1cmVtO1xufVxuXG4uaGVyby10ZXh0IHtcbiAgbWFyZ2luOiAxLjVyZW0gMCAxLjYyNXJlbTtcbn1cblxuLmhlcm8gLmxpbmstc3RhcnQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLXBpbmspO1xuICBsaW5lLWhlaWdodDogMy41cmVtO1xuICBwYWRkaW5nOiAwIDIuMjVlbTtcbn1cblxuLmhlcm8gLmxpbmstc3RhcnQ6aG92ZXIsXG4uaGVybyAubGluay1zdGFydDpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtcGluay1saWdodCk7XG59XG5cbi5oZXJvLWltZy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaGVyby1pbWcge1xuICB3aWR0aDogMTE4dnc7XG4gIG1heC13aWR0aDogMTIwdnc7XG4gIG9iamVjdC1wb3NpdGlvbjogLTl2dyAwO1xuICBtYXJnaW4tYm90dG9tOiAtMS41cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAuaGVybyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICBtaW4taGVpZ2h0OiAzNXJlbTtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpICogLTEpO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG4gIC5jb250YWluZXIsXG4gIC5oZXJvLWltZy1jb250YWluZXIge1xuICAgIGdyaWQtcm93OiAxLzI7XG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgfVxuICAuaGVyby10ZXh0LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogY2FsYyg0Ljc1cmVtICsgdmFyKC0taGVhZGVyLWhlaWdodCkpO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWF4LXdpZHRoOiAzNWNoO1xuICB9XG4gIC5oZXJvLWltZy1jb250YWluZXIge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XG4gIH1cbiAgLmhlcm8taW1nIHtcbiAgICB3aWR0aDogMTgwJTtcbiAgICBtYXgtd2lkdGg6IDQwMCU7XG4gICAgb2JqZWN0LXBvc2l0aW9uOiAtMC41cmVtIC0xcmVtO1xuICAgIG1hcmdpbi10b3A6IC0yMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5oZXJvLXRleHQtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDkuNXJlbSArIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcbiAgICBtYXgtd2lkdGg6IDQwY2g7XG4gIH1cbiAgLmhlcm8tdGV4dCB7XG4gICAgbWF4LXdpZHRoOiAzNGNoO1xuICAgIG1hcmdpbjogMS43NXJlbSAwIDIuNXJlbTtcbiAgfVxuICAuaGVybyAubGluay1zdGFydCB7XG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XG4gICAgcGFkZGluZzogMCAyZW07XG4gIH1cbiAgLmhlcm8taW1nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBtYXgtd2lkdGg6IDU2cmVtO1xuICB9XG4gIC5oZXJvLWltZyB7XG4gICAgd2lkdGg6IDE1MCU7XG4gIH1cbn1cbi5jb3Vyc2VzIHtcbiAgLS1jYXJkLXBhZGRpbmc6IDEuNzVyZW07XG4gIC0taWNvbi1zaXplOiAzLjVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtYmx1ZS1saWdodCk7XG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG59XG5cbi5jb3Vyc2VzLXRpdGxlLWNvbnRhaW5lcixcbi5jb3Vyc2UtY2FyZCB7XG4gIHBhZGRpbmc6IHZhcigtLWNhcmQtcGFkZGluZyk7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbn1cblxuLmNvdXJzZXMtdGl0bGUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1waW5rKTtcbiAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XG59XG5cbi5jb3Vyc2UtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1jYXJkLXBhZGRpbmcpICsgdmFyKC0taWNvbi1zaXplKSAvIDIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xuICBib3gtc2hhZG93OiAwIDEuNXJlbSAzLjI1cmVtIHJnYmEoNiwgMjIsIDE0MSwgMC4wNDQ1KTtcbn1cblxuLmNvdXJzZS1pY29uIHtcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogY2FsYyh2YXIoLS1pY29uLXNpemUpIC8gMiAqIC0xKTtcbiAgaW5zZXQtaW5saW5lLXN0YXJ0OiB2YXIoLS1jYXJkLXBhZGRpbmcpO1xufVxuXG4uY291cnNlLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAxcmVtIDAgMS41cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAuY291cnNlcyB7XG4gICAgLS1jYXJkLXBhZGRpbmc6IDJyZW07XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA1LjM3NWVtO1xuICB9XG4gIC5jb3Vyc2VzIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcbiAgICBnYXA6IDJyZW0gMC43NXJlbTtcbiAgfVxuICAuY291cnNlcy10aXRsZS1jb250YWluZXIsXG4gIC5jb3Vyc2VzLWxpc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gICAgZ3JpZC1yb3c6IDEvLTE7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBzdWJncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogc3ViZ3JpZDtcbiAgfVxuICAuY291cnNlcy10aXRsZS1jb250YWluZXIge1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgZ3JpZC1yb3c6IDEvMjtcbiAgfVxuICAuY291cnNlcy1saXN0IGxpOm50aC1jaGlsZCgxKSB7XG4gICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgfVxuICAuY291cnNlcy10aXRsZS1jb250YWluZXIsXG4gIC5jb3Vyc2UtY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1pY29uLXNpemUpIC8gMik7XG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tY2FyZC1wYWRkaW5nKSArIHZhcigtLWljb24tc2l6ZSkgLyAyKTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEuMjVyZW07XG4gIH1cbiAgLmNvdXJzZS1jYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmNvdXJzZS1jYXJkIC5saW5rLXN0YXJ0IHtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuY291cnNlcyB7XG4gICAgbWFyZ2luLXRvcDogMy41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA5ZW07XG4gIH1cbiAgLmNvdXJzZXMgLmNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcbiAgICBnYXA6IDMuNXJlbSAxLjg3NXJlbTtcbiAgfVxuICAuY291cnNlcy10aXRsZS1jb250YWluZXIsXG4gIC5jb3Vyc2UtY2FyZCB7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1jYXJkLXBhZGRpbmcpO1xuICB9XG4gIC5jb3Vyc2UtY2FyZCB7XG4gICAgZ2FwOiAxLjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcbiAgfVxuICAuY291cnNlLWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDcuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xufVxuXG5mb290ZXIgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZm9vdGVyIC5saW5rLXN0YXJ0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1wdXJwbGUpO1xufVxuXG5mb290ZXIgLmxpbmstc3RhcnQ6aG92ZXIsXG5mb290ZXIgLmxpbmstc3RhcnQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLXB1cnBsZS1saWdodCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fc2VjdGlvbi1oZXJvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3NlY3Rpb24tY291cnNlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19mb290ZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7NENBQUE7QUFJQSw4Q0FBQTtBQUVBLHFCQUFBO0FBQ0E7OztFQUdJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNESjs7QURJQSwwQkFBQTtBQUNBOzs7Ozs7Ozs7O0VBVUksbUJBQUE7QUNESjs7QURJQSwyR0FBQTtBQUNBOztFQUVJLGdCQUFBO0FDREo7O0FESUEsMkJBQUE7QUFDQTtFQUNJLHVCQUFBO0FDREo7O0FESUEsMkJBQUE7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBLDBEQUFBO0FBQ0E7RUFDSSw4QkFBQTtBQ0RKOztBRElBLG9DQUFBO0FBQ0E7O0VBRUksZUFBQTtFQUNBLGNBQUE7QUNESjs7QURJQSx5Q0FBQTtBQUNBOzs7O0VBSUksYUFBQTtBQ0RKOztBRElBLGdHQUFBO0FBQ0E7RUFDSTtJQUNJLHFCQUFBO0VDRE47RURJRTs7O0lBR0kscUNBQUE7SUFDQSx1Q0FBQTtJQUNBLHNDQUFBO0lBQ0EsZ0NBQUE7RUNGTjtBQUNGO0FES0EsV0FBQTtBQUVBO0VBQ0ksZ0JBQUE7QUNKSjs7QUNsRkE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrREFBQTtBRHFGSjtBQ2pGQTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtFQUVBLDhDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxvRkFBQTtFQUNBLHFGQUFBO0VBQ0Esb0RBQUE7RUFFQSxtQ0FBQTtFQUVBLHFCQUFBO0FEZ0ZKOztBQzdFQTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7QURnRko7O0FDM0VBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUQ4RUo7O0FDM0VBO0VBQ0ksdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBRDhFSjs7QUMzRUE7O0VBRUksMENBQUE7QUQ4RUo7O0FDM0VBO0VBQ0ksd0JBQUE7RUFDQSxtQkFBQTtBRDhFSjs7QUMzRUE7O0VBRUksOEJBQUE7QUQ4RUo7O0FDeEVBO0VBQ0ksYUFBQTtBRDJFSjs7QUNyRUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtBRHdFSjs7QUNsRUE7RUFDSTtJQUNJLHFCQUFBO0VEcUVOO0VDbEVFO0lBQ0ksVUFBQTtJQUNBLGdCQUFBO0VEb0VOO0FBQ0Y7QUNqRUE7RUFDSTtJQUNJLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0VEbUVOO0VDaEVFO0lBQ0ksZUFBQTtFRGtFTjtFQy9ERTtJQUNJLFVBQUE7RURpRU47QUFDRjtBQzlEQTtFQUNJO0lBQ0ksbUJBQUE7RURnRU47QUFDRjtBQzdEQTtFQUNJO0lBQ0ksa0JBQUE7RUQrRE47QUFDRjtBRXJMQTs7O0VBR0ksZ0JBQUE7QUZ1TEo7O0FFcExBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBRnVMSjs7QUVwTEE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FGdUxKOztBRXBMQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUZ1TEo7O0FFcExBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBRnVMSjs7QUVwTEE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUZ1TEo7O0FFcExBO0VBRUk7SUFDSSxpQkFBQTtFRnNMTjtFRW5MRTtJQUNJLGVBQUE7RUZxTE47RUVsTEU7SUFDSSxpQkFBQTtFRm9MTjtFRWpMRTtJQUNJLG1CQUFBO0VGbUxOO0VFaExFO0lBQ0ksZUFBQTtFRmtMTjtBQUNGO0FHeE9BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUgwT0o7O0FHdk9BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBSDBPSjs7QUdyT0E7RUFDSTtJQUVJLGtCQUFBO0lBQ0EsVUFBQTtFSHVPTjtBQUNGO0FJM1BBO0VBQ0kscUJBQUE7QUo2UEo7O0FJMVBBO0VBQ0kseUJBQUE7QUo2UEo7O0FJMVBBO0VBQ0ksNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FKNlBKOztBSTFQQTs7RUFFSSxrQ0FBQTtBSjZQSjs7QUl4UEE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FKMlBKOztBSXhQQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUoyUEo7O0FJclBBO0VBRUk7SUFDSSxhQUFBO0lBQ0EsMEJBQUE7SUFDQSx1QkFBQTtJQUVBLGlCQUFBO0lBQ0EsMkNBQUE7SUFDQSxjQUFBO0VKc1BOO0VJblBFOztJQUVJLGFBQUE7SUFDQSxnQkFBQTtFSnFQTjtFSWxQRTtJQUNJLGdEQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7RUpvUE47RUlqUEU7SUFDSSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0lBQ0EseUJBQUE7RUptUE47RUloUEU7SUFDSSxXQUFBO0lBQ0EsZUFBQTtJQUNBLDhCQUFBO0lBQ0EsZ0JBQUE7RUprUE47QUFDRjtBSTVPQTtFQUVJO0lBQ0ksK0NBQUE7SUFDQSxlQUFBO0VKNk9OO0VJMU9FO0lBQ0ksZUFBQTtJQUNBLHdCQUFBO0VKNE9OO0VJek9FO0lBQ0ksaUJBQUE7SUFDQSxjQUFBO0VKMk9OO0VJeE9FO0lBQ0ksVUFBQTtJQUNBLGdCQUFBO0VKME9OO0VJdk9FO0lBQ0ksV0FBQTtFSnlPTjtBQUNGO0FLL1VBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGtDQUFBO0VBQ0Esc0JBQUE7QUxnVko7O0FLN1VBOztFQUVJLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBTGdWSjs7QUs3VUE7RUFDSSw0QkFBQTtFQUNBLHVCQUFBO0FMZ1ZKOztBSzdVQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2REFBQTtFQUNBLGtDQUFBO0VBQ0EscURBQUE7QUxnVko7O0FLN1VBO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1Q0FBQTtBTGdWSjs7QUs3VUE7RUFDSSxxQkFBQTtBTGdWSjs7QUsxVUE7RUFFSTtJQUNJLG9CQUFBO0lBQ0Esa0JBQUE7SUFDQSx1QkFBQTtFTDRVTjtFS3pVRTtJQUNJLGFBQUE7SUFDQSxxQ0FBQTtJQUNBLG1DQUFBO0lBQ0EsaUJBQUE7RUwyVU47RUt4VUU7O0lBRUksYUFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtJQUNBLDhCQUFBO0lBQ0EsMkJBQUE7RUwwVU47RUt2VUU7SUFDSSxnQkFBQTtJQUNBLGFBQUE7RUx5VU47RUt0VUU7SUFDSSxnQkFBQTtFTHdVTjtFS3JVRTs7SUFFSSxzQ0FBQTtJQUNBLDZEQUFBO0lBQ0EsMkJBQUE7RUx1VU47RUtwVUU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7RUxzVU47RUtuVUU7SUFDSSxnQkFBQTtFTHFVTjtBQUNGO0FLOVRBO0VBRUk7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VMK1ROO0VLNVRFO0lBQ0kscUNBQUE7SUFDQSxtQ0FBQTtJQUNBLG9CQUFBO0VMOFROO0VLM1RFOztJQUVJLHVDQUFBO0VMNlROO0VLMVRFO0lBQ0ksV0FBQTtJQUNBLHNCQUFBO0VMNFROO0VLelRFO0lBQ0ksU0FBQTtFTDJUTjtBQUNGO0FNcmJBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7QU51Yko7O0FNcGJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBTnViSjs7QU1wYkE7RUFDSSw4QkFBQTtBTnViSjs7QU1wYkE7O0VBRUksb0NBQUE7QU51YkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgICAgICAgICAgICAgICAgUkVTRVRcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKmh0dHBzOi8vYW5keS1iZWxsLmNvLnVrL2EtbW9kZXJuLWNzcy1yZXNldC8qL1xcblxcbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmZpZ3VyZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT0nbGlzdCddLFxcbm9sW3JvbGU9J2xpc3QnXSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgICBodG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICAgIH1cXG4gIFxcbiAgICAqLFxcbiAgICAqOjpiZWZvcmUsXFxuICAgICo6OmFmdGVyIHtcXG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgICB9XFxufVxcblxcbi8qIGN1c3RvbSAqL1xcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XCIsXCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG4gICAgICAgICAgICAgICAgICBSRVNFVFxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qaHR0cHM6Ly9hbmR5LWJlbGwuY28udWsvYS1tb2Rlcm4tY3NzLXJlc2V0LyovXFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgbGlzdCByb2xlLCB3aGljaCBzdWdnZXN0cyBkZWZhdWx0IHN0eWxpbmcgd2lsbCBiZSByZW1vdmVkICovXFxudWxbcm9sZT1saXN0XSxcXG5vbFtyb2xlPWxpc3RdIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcbn1cXG5cXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nLFxcbnBpY3R1cmUge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICBodG1sOmZvY3VzLXdpdGhpbiB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcXG4gIH1cXG4gICosXFxuICAqOjpiZWZvcmUsXFxuICAqOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG4vKiBjdXN0b20gKi9cXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGx1c0pha2FydGFTYW5zXFxcIjtcXG4gIGZvbnQtZGlzcGxheTogc3dhcDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgOTAwO1xcbiAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL1BsdXNKYWthcnRhU2Fucy1WYXJpYWJsZUZvbnRfd2dodC50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuOnJvb3Qge1xcbiAgLS1jbHItcHJpbWFyeTogIzEzMTgzRjtcXG4gIC0tY2xyLXByaW1hcnktbGlnaHQ6ICM2NjZDQTM7XFxuICAtLWNsci1zZWNvbmRhcnk6ICM4Mzg2OUE7XFxuICAtLWNsci1hY2NlbnQ6ICNGNzQ3ODA7XFxuICAtLWNsci1hY2NlbnQtbGlnaHQ6ICNGRkE3QzM7XFxuICAtLWNsci13aGl0ZTogI0ZGRkZGRjtcXG4gIC0tZ3JhZC1waW5rOiBsaW5lYXItZ3JhZGllbnQoI0ZGNkY0OCwgI0YwMkFBNik7XFxuICAtLWdyYWQtcHVycGxlOiBsaW5lYXItZ3JhZGllbnQoIzQ4NTFGRiwgI0YwMkFBNik7XFxuICAtLWdyYWQtcGluay1saWdodDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAxMTIsIDcyLCAwLjUpLCByZ2JhKDI0MCwgNDIsIDE2NywgMC41KSk7XFxuICAtLWdyYWQtcHVycGxlLWxpZ2h0OiBsaW5lYXItZ3JhZGllbnQocmdiYSg3MiwgODEsIDI1NSwgMC41KSwgcmdiYSgyNDAsIDQyLCAxNjcsIDAuNSkpO1xcbiAgLS1ncmFkLWJsdWUtbGlnaHQ6IGxpbmVhci1ncmFkaWVudCgjRkZGRkZGLCAjRjBGMUZGKTtcXG4gIC0tZm9udDogUGx1c0pha2FydGFTYW5zLCBzYW5zLXNlcmlmO1xcbiAgLS1oZWFkZXItaGVpZ2h0OiA1cmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcbi5saW5rLXN0YXJ0IHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ubGluay1zdGFydFtkYXRhLXR5cGU9YnV0dG9uXSB7XFxuICBjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gIGxpbmUtaGVpZ2h0OiAzcmVtO1xcbiAgcGFkZGluZzogMCAxLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xcbn1cXG5cXG4ubGluay1zdGFydFtkYXRhLXR5cGU9YnV0dG9uXTpob3ZlcixcXG4ubGluay1zdGFydFtkYXRhLXR5cGU9YnV0dG9uXTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeS1saWdodCk7XFxufVxcblxcbi5saW5rLXN0YXJ0W2RhdGEtdHlwZT1saW5rXSB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG5cXG4ubGluay1zdGFydFtkYXRhLXR5cGU9bGlua106aG92ZXIsXFxuLmxpbmstc3RhcnRbZGF0YS10eXBlPWxpbmtdOmZvY3VzIHtcXG4gIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50LWxpZ2h0KTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgd2lkdGg6IDUuNXJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogOTIlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuICA6cm9vdCB7XFxuICAgIC0taGVhZGVyLWhlaWdodDogNnJlbTtcXG4gIH1cXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtaW4td2lkdGg6IDQzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xcbiAgLmxpbmstc3RhcnRbZGF0YS10eXBlPWJ1dHRvbl0ge1xcbiAgICBsaW5lLWhlaWdodDogMy41cmVtO1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICBwYWRkaW5nOiAwIDJlbTtcXG4gIH1cXG4gIC5sb2dvIHtcXG4gICAgd2lkdGg6IDcuMTI1cmVtO1xcbiAgfVxcbiAgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA3NyU7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDBlbSkge1xcbiAgOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHtcXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgfVxcbn1cXG4uaGVhZGluZy1sLFxcbi5oZWFkaW5nLW0sXFxuLmhlYWRpbmctcyB7XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uaGVhZGluZy1sIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjc7XFxufVxcblxcbi5oZWFkaW5nLW0ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG59XFxuXFxuLmhlYWRpbmctcyB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS4xNztcXG59XFxuXFxuLmJvZHktbSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTU7XFxuICBjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxufVxcblxcbi5ib2R5LXMge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMS43NTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcXG4gIC5oZWFkaW5nLWwge1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gIH1cXG4gIC5oZWFkaW5nLW0ge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuICAuaGVhZGluZy1zIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuICAuYm9keS1tIHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIH1cXG4gIC5ib2R5LXMge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxufVxcblxcbmhlYWRlciAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gIGhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjtcXG4gIH1cXG59XFxuLmhlcm8ge1xcbiAgcGFkZGluZy10b3A6IDEuMzc1cmVtO1xcbn1cXG5cXG4uaGVyby10ZXh0IHtcXG4gIG1hcmdpbjogMS41cmVtIDAgMS42MjVyZW07XFxufVxcblxcbi5oZXJvIC5saW5rLXN0YXJ0IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtcGluayk7XFxuICBsaW5lLWhlaWdodDogMy41cmVtO1xcbiAgcGFkZGluZzogMCAyLjI1ZW07XFxufVxcblxcbi5oZXJvIC5saW5rLXN0YXJ0OmhvdmVyLFxcbi5oZXJvIC5saW5rLXN0YXJ0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtcGluay1saWdodCk7XFxufVxcblxcbi5oZXJvLWltZy1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oZXJvLWltZyB7XFxuICB3aWR0aDogMTE4dnc7XFxuICBtYXgtd2lkdGg6IDEyMHZ3O1xcbiAgb2JqZWN0LXBvc2l0aW9uOiAtOXZ3IDA7XFxuICBtYXJnaW4tYm90dG9tOiAtMS41cmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgLmhlcm8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDM1cmVtO1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpICogLTEpO1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG4gIH1cXG4gIC5jb250YWluZXIsXFxuICAuaGVyby1pbWctY29udGFpbmVyIHtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIH1cXG4gIC5oZXJvLXRleHQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogY2FsYyg0Ljc1cmVtICsgdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBtYXgtd2lkdGg6IDM1Y2g7XFxuICB9XFxuICAuaGVyby1pbWctY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWF4LXdpZHRoOiAzMHJlbTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcXG4gIH1cXG4gIC5oZXJvLWltZyB7XFxuICAgIHdpZHRoOiAxODAlO1xcbiAgICBtYXgtd2lkdGg6IDQwMCU7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogLTAuNXJlbSAtMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogLTIwJTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcXG4gIC5oZXJvLXRleHQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogY2FsYyg5LjVyZW0gKyB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XFxuICAgIG1heC13aWR0aDogNDBjaDtcXG4gIH1cXG4gIC5oZXJvLXRleHQge1xcbiAgICBtYXgtd2lkdGg6IDM0Y2g7XFxuICAgIG1hcmdpbjogMS43NXJlbSAwIDIuNXJlbTtcXG4gIH1cXG4gIC5oZXJvIC5saW5rLXN0YXJ0IHtcXG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XFxuICAgIHBhZGRpbmc6IDAgMmVtO1xcbiAgfVxcbiAgLmhlcm8taW1nLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA0OSU7XFxuICAgIG1heC13aWR0aDogNTZyZW07XFxuICB9XFxuICAuaGVyby1pbWcge1xcbiAgICB3aWR0aDogMTUwJTtcXG4gIH1cXG59XFxuLmNvdXJzZXMge1xcbiAgLS1jYXJkLXBhZGRpbmc6IDEuNzVyZW07XFxuICAtLWljb24tc2l6ZTogMy41cmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1ibHVlLWxpZ2h0KTtcXG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxufVxcblxcbi5jb3Vyc2VzLXRpdGxlLWNvbnRhaW5lcixcXG4uY291cnNlLWNhcmQge1xcbiAgcGFkZGluZzogdmFyKC0tY2FyZC1wYWRkaW5nKTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XFxufVxcblxcbi5jb3Vyc2VzLXRpdGxlLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLXBpbmspO1xcbiAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxufVxcblxcbi5jb3Vyc2UtY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tdG9wOiAyLjVyZW07XFxuICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1jYXJkLXBhZGRpbmcpICsgdmFyKC0taWNvbi1zaXplKSAvIDIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG4gIGJveC1zaGFkb3c6IDAgMS41cmVtIDMuMjVyZW0gcmdiYSg2LCAyMiwgMTQxLCAwLjA0NDUpO1xcbn1cXG5cXG4uY291cnNlLWljb24ge1xcbiAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYyh2YXIoLS1pY29uLXNpemUpIC8gMiAqIC0xKTtcXG4gIGluc2V0LWlubGluZS1zdGFydDogdmFyKC0tY2FyZC1wYWRkaW5nKTtcXG59XFxuXFxuLmNvdXJzZS1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW46IDFyZW0gMCAxLjVyZW07XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAuY291cnNlcyB7XFxuICAgIC0tY2FyZC1wYWRkaW5nOiAycmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiA1LjM3NWVtO1xcbiAgfVxcbiAgLmNvdXJzZXMgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xcbiAgICBnYXA6IDJyZW0gMC43NXJlbTtcXG4gIH1cXG4gIC5jb3Vyc2VzLXRpdGxlLWNvbnRhaW5lcixcXG4gIC5jb3Vyc2VzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG4gICAgZ3JpZC1yb3c6IDEvLTE7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogc3ViZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBzdWJncmlkO1xcbiAgfVxcbiAgLmNvdXJzZXMtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gIH1cXG4gIC5jb3Vyc2VzLWxpc3QgbGk6bnRoLWNoaWxkKDEpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIH1cXG4gIC5jb3Vyc2VzLXRpdGxlLWNvbnRhaW5lcixcXG4gIC5jb3Vyc2UtY2FyZCB7XFxuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0taWNvbi1zaXplKSAvIDIpO1xcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1jYXJkLXBhZGRpbmcpICsgdmFyKC0taWNvbi1zaXplKSAvIDIpO1xcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEuMjVyZW07XFxuICB9XFxuICAuY291cnNlLWNhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmNvdXJzZS1jYXJkIC5saW5rLXN0YXJ0IHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcXG4gIC5jb3Vyc2VzIHtcXG4gICAgbWFyZ2luLXRvcDogMy41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOWVtO1xcbiAgfVxcbiAgLmNvdXJzZXMgLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xcbiAgICBnYXA6IDMuNXJlbSAxLjg3NXJlbTtcXG4gIH1cXG4gIC5jb3Vyc2VzLXRpdGxlLWNvbnRhaW5lcixcXG4gIC5jb3Vyc2UtY2FyZCB7XFxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tY2FyZC1wYWRkaW5nKTtcXG4gIH1cXG4gIC5jb3Vyc2UtY2FyZCB7XFxuICAgIGdhcDogMS41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcbiAgfVxcbiAgLmNvdXJzZS1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG59XFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDcuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuZm9vdGVyIC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgLmxpbmstc3RhcnQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1wdXJwbGUpO1xcbn1cXG5cXG5mb290ZXIgLmxpbmstc3RhcnQ6aG92ZXIsXFxuZm9vdGVyIC5saW5rLXN0YXJ0OmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtcHVycGxlLWxpZ2h0KTtcXG59XCIsXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQbHVzSmFrYXJ0YVNhbnMnO1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgOTAwO1xcbiAgICBzcmM6IHVybCguLi9hc3NldHMvZm9udHMvUGx1c0pha2FydGFTYW5zLVZhcmlhYmxlRm9udF93Z2h0LnR0ZikgXFxuICAgICAgICAgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tY2xyLXByaW1hcnk6ICMxMzE4M0Y7XFxuICAgIC0tY2xyLXByaW1hcnktbGlnaHQ6ICM2NjZDQTM7XFxuICAgIC0tY2xyLXNlY29uZGFyeTogIzgzODY5QTtcXG4gICAgLS1jbHItYWNjZW50OiAjRjc0NzgwO1xcbiAgICAtLWNsci1hY2NlbnQtbGlnaHQ6ICNGRkE3QzM7XFxuICAgIC0tY2xyLXdoaXRlOiAjRkZGRkZGO1xcblxcbiAgICAtLWdyYWQtcGluazogbGluZWFyLWdyYWRpZW50KCNGRjZGNDgsICNGMDJBQTYpO1xcbiAgICAtLWdyYWQtcHVycGxlOiBsaW5lYXItZ3JhZGllbnQoIzQ4NTFGRiwgI0YwMkFBNik7XFxuICAgIC0tZ3JhZC1waW5rLWxpZ2h0OiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDExMiwgNzIsIDAuNSksIHJnYmEoMjQwLCA0MiwgMTY3LCAwLjUpKTtcXG4gICAgLS1ncmFkLXB1cnBsZS1saWdodDogbGluZWFyLWdyYWRpZW50KHJnYmEoNzIsIDgxLCAyNTUsIDAuNSksIHJnYmEoMjQwLCA0MiwgMTY3LCAwLjUpKTtcXG4gICAgLS1ncmFkLWJsdWUtbGlnaHQ6IGxpbmVhci1ncmFkaWVudCgjRkZGRkZGLCAjRjBGMUZGKTtcXG5cXG4gICAgLS1mb250OiBQbHVzSmFrYXJ0YVNhbnMsIHNhbnMtc2VyaWY7XFxuXFxuICAgIC0taGVhZGVyLWhlaWdodDogNXJlbTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuLy8gTGlua3NcXG5cXG4ubGluay1zdGFydCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxufVxcblxcbi5saW5rLXN0YXJ0W2RhdGEtdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcXG4gICAgcGFkZGluZzogMCAxLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwdnc7XFxufVxcblxcbi5saW5rLXN0YXJ0W2RhdGEtdHlwZT1cXFwiYnV0dG9uXFxcIl06aG92ZXIsXFxuLmxpbmstc3RhcnRbZGF0YS10eXBlPVxcXCJidXR0b25cXFwiXTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5LWxpZ2h0KTtcXG59XFxuXFxuLmxpbmstc3RhcnRbZGF0YS10eXBlPVxcXCJsaW5rXFxcIl0ge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxufVxcblxcbi5saW5rLXN0YXJ0W2RhdGEtdHlwZT1cXFwibGlua1xcXCJdOmhvdmVyLFxcbi5saW5rLXN0YXJ0W2RhdGEtdHlwZT1cXFwibGlua1xcXCJdOmZvY3VzIHtcXG4gICAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtbGlnaHQpO1xcbn1cXG5cXG5cXG4vLyBMb2dvXFxuXFxuLmxvZ28ge1xcbiAgICB3aWR0aDogNS41cmVtO1xcbn1cXG5cXG5cXG4vLyBDb250YWluZXJcXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDkyJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcblxcbi8vIG1lZGlhIHF1ZXJpZXNcXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgICA6cm9vdCB7XFxuICAgICAgICAtLWhlYWRlci1oZWlnaHQ6IDZyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgbWluLXdpZHRoOiA0M3JlbTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xcbiAgICAubGluay1zdGFydFtkYXRhLXR5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XFxuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICAgICAgcGFkZGluZzogMCAyZW07XFxuICAgIH1cXG5cXG4gICAgLmxvZ28ge1xcbiAgICAgICAgd2lkdGg6IDcuMTI1cmVtO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDc3JTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwZW0pIHtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwZW0pIHtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICB9XFxufVxcblwiLFwiLmhlYWRpbmctbCxcXG4uaGVhZGluZy1tLFxcbi5oZWFkaW5nLXMge1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uaGVhZGluZy1sIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI3O1xcbn1cXG5cXG4uaGVhZGluZy1tIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbn1cXG5cXG4uaGVhZGluZy1zIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4xNztcXG59XFxuXFxuLmJvZHktbSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTU7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmJvZHktcyB7XFxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xcblxcbiAgICAuaGVhZGluZy1sIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAuaGVhZGluZy1tIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmhlYWRpbmctcyB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmJvZHktbSB7XFxuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAuYm9keS1zIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcblxcbn1cIixcImhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxufVxcblxcbmhlYWRlciAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vLyBUYWJsZXRcXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgICBoZWFkZXIge1xcbiAgICAgICAgLy8gcGxhY2UgdGhlIGhlYWRlciBhaGVhZCBvZiB0aGUgaGVybyBcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHotaW5kZXg6IDI7XFxuICAgIH1cXG59XCIsXCIuaGVybyB7XFxuICAgIHBhZGRpbmctdG9wOiAxLjM3NXJlbTtcXG59XFxuXFxuLmhlcm8tdGV4dCB7XFxuICAgIG1hcmdpbjogMS41cmVtIDAgMS42MjVyZW07XFxufVxcblxcbi5oZXJvIC5saW5rLXN0YXJ0IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1waW5rKTtcXG4gICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gICAgcGFkZGluZzogMCAyLjI1ZW07XFxufVxcblxcbi5oZXJvIC5saW5rLXN0YXJ0OmhvdmVyLFxcbi5oZXJvIC5saW5rLXN0YXJ0OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1waW5rLWxpZ2h0KTtcXG59XFxuXFxuLy8gUmVtb3ZlIGltYWdlIGV4dHJhIHBhZGRpbmdcXG5cXG4uaGVyby1pbWctY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmhlcm8taW1nIHtcXG4gICAgd2lkdGg6IDExOHZ3O1xcbiAgICBtYXgtd2lkdGg6IDEyMHZ3O1xcbiAgICBvYmplY3QtcG9zaXRpb246IC05dncgMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTEuNXJlbTtcXG59XFxuXFxuXFxuLy8gVGFibGV0XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG5cXG4gICAgLmhlcm8ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgICAgICBcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM1cmVtO1xcbiAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSAqIC0xKTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIsXFxuICAgIC5oZXJvLWltZy1jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvLXRleHQtY29udGFpbmVyIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGMoNC43NXJlbSArIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDM1Y2g7XFxuICAgIH1cXG5cXG4gICAgLmhlcm8taW1nLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMHJlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvLWltZyB7XFxuICAgICAgICB3aWR0aDogMTgwJTtcXG4gICAgICAgIG1heC13aWR0aDogNDAwJTtcXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogLS41cmVtIC0xcmVtO1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwJTtcXG4gICAgfVxcbn1cXG5cXG5cXG4vLyBEZXNrdG9wXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcXG5cXG4gICAgLmhlcm8tdGV4dC1jb250YWluZXIge1xcbiAgICAgICAgbWFyZ2luLXRvcDogY2FsYyg5LjVyZW0gKyB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XFxuICAgICAgICBtYXgtd2lkdGg6IDQwY2g7XFxuICAgIH1cXG5cXG4gICAgLmhlcm8tdGV4dCB7XFxuICAgICAgICBtYXgtd2lkdGg6IDM0Y2g7XFxuICAgICAgICBtYXJnaW46IDEuNzVyZW0gMCAyLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmhlcm8gLmxpbmstc3RhcnQge1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDRyZW07XFxuICAgICAgICBwYWRkaW5nOiAwIDJlbTtcXG4gICAgfVxcblxcbiAgICAuaGVyby1pbWctY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiA0OSU7XFxuICAgICAgICBtYXgtd2lkdGg6IDU2cmVtO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvLWltZyB7XFxuICAgICAgICB3aWR0aDogMTUwJTtcXG4gICAgfVxcbn1cXG5cXG5cIixcIi5jb3Vyc2VzIHtcXG4gICAgLS1jYXJkLXBhZGRpbmc6IDEuNzVyZW07XFxuICAgIC0taWNvbi1zaXplOiAzLjVyZW07XFxuXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtYmx1ZS1saWdodCk7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxufVxcblxcbi5jb3Vyc2VzLXRpdGxlLWNvbnRhaW5lcixcXG4uY291cnNlLWNhcmQge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1jYXJkLXBhZGRpbmcpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjYyNXJlbTtcXG59XFxuXFxuLmNvdXJzZXMtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1waW5rKTtcXG4gICAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxufVxcblxcbi5jb3Vyc2UtY2FyZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1jYXJkLXBhZGRpbmcpICsgY2FsYyh2YXIoLS1pY29uLXNpemUpIC8gMikpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcbiAgICBib3gtc2hhZG93OiAwIDEuNXJlbSAzLjI1cmVtIHJnYmEoNiwgMjIsIDE0MSwgMC4wNDQ1KTtcXG59XFxuXFxuLmNvdXJzZS1pY29uIHtcXG4gICAgd2lkdGg6IHZhcigtLWljb24tc2l6ZSk7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKCh2YXIoLS1pY29uLXNpemUpIC8gMikgKiAtMSk7XFxuICAgIGluc2V0LWlubGluZS1zdGFydDogdmFyKC0tY2FyZC1wYWRkaW5nKTtcXG59XFxuXFxuLmNvdXJzZS1kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbjogMXJlbSAwIDEuNXJlbTtcXG59IFxcblxcblxcbi8vIFRhYmxldFxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuXFxuICAgIC5jb3Vyc2VzIHtcXG4gICAgICAgIC0tY2FyZC1wYWRkaW5nOiAycmVtO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUuMzc1ZW07XFxuICAgIH1cXG5cXG4gICAgLmNvdXJzZXMgLmNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIGF1dG8pO1xcbiAgICAgICAgZ2FwOiAycmVtIC43NXJlbTtcXG4gICAgfVxcblxcbiAgICAuY291cnNlcy10aXRsZS1jb250YWluZXIsXFxuICAgIC5jb3Vyc2VzLWxpc3Qge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgICAgICBncmlkLXJvdzogMSAvIC0xO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBzdWJncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBzdWJncmlkO1xcbiAgICB9XFxuXFxuICAgIC5jb3Vyc2VzLXRpdGxlLWNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIH1cXG5cXG4gICAgLmNvdXJzZXMtbGlzdCBsaTpudGgtY2hpbGQoMSkge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICB9XFxuXFxuICAgIC5jb3Vyc2VzLXRpdGxlLWNvbnRhaW5lcixcXG4gICAgLmNvdXJzZS1jYXJkIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0taWNvbi1zaXplKSAvIDIpO1xcbiAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tY2FyZC1wYWRkaW5nKSArIGNhbGModmFyKC0taWNvbi1zaXplKSAvIDIpKTtcXG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMS4yNXJlbTtcXG4gICAgfVxcblxcbiAgICAuY291cnNlLWNhcmQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLmNvdXJzZS1jYXJkIC5saW5rLXN0YXJ0IHtcXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIH1cXG5cXG59XFxuXFxuXFxuLy8gRGVza3RvcFxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XFxuXFxuICAgIC5jb3Vyc2VzIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDMuNXJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA5ZW07XFxuICAgIH1cXG5cXG4gICAgLmNvdXJzZXMgLmNvbnRhaW5lciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XFxuICAgICAgICBnYXA6IDMuNXJlbSAxLjg3NXJlbTtcXG4gICAgfVxcblxcbiAgICAuY291cnNlcy10aXRsZS1jb250YWluZXIsXFxuICAgIC5jb3Vyc2UtY2FyZCB7XFxuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWNhcmQtcGFkZGluZyk7XFxuICAgIH1cXG5cXG4gICAgLmNvdXJzZS1jYXJkIHtcXG4gICAgICAgIGdhcDogMS41cmVtO1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcXG4gICAgfVxcblxcbiAgICAuY291cnNlLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfSBcXG5cXG5cXG59XCIsXCJmb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA3LjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuZm9vdGVyIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciAubGluay1zdGFydCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtcHVycGxlKTtcXG59XFxuXFxuZm9vdGVyIC5saW5rLXN0YXJ0OmhvdmVyLFxcbmZvb3RlciAubGluay1zdGFydDpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtcHVycGxlLWxpZ2h0KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiJ3VzZS1zdHJpY3QnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3NjcmlwdHMvaW1hZ2VzLmpzJzsiXSwibmFtZXMiOlsiTG9nb0RhcmsiLCJMb2dvTGlnaHQiLCJJY29uQW5pbWF0aW9uIiwiSWNvbkJ1c2luZXNzIiwiSWNvbkNyeXB0byIsIkljb25EZXNpZ24iLCJJY29uUGhvdG9ncmFwaHkiLCJIZXJvRGVza1BuZyIsIkhlcm9EZXNrUG5nMngiLCJIZXJvRGVza1dlYnAiLCJIZXJvRGVza1dlYnAyeCIsIkhlcm9UYWJsZXRQbmciLCJIZXJvVGFibGV0UG5nMngiLCJIZXJvVGFibGV0V2VicCIsIkhlcm9UYWJsZXRXZWJwMngiLCJIZXJvTW9iaWxlUG5nIiwiSGVyb01vYmlsZVBuZzJ4IiwiSGVyb01vYmlsZVdlYnAiLCJIZXJvTW9iaWxlV2VicDJ4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNyYyIsInBpY3R1cmUiLCJzcmNEZXNrIiwiY3JlYXRlRWxlbWVudCIsInNyY1RhYmxldCIsInNyY01vYmlsZSIsImltZyIsIm1lZGlhIiwic3Jjc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9