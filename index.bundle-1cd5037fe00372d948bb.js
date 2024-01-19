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
img.alt = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sbVhBQW1YLE1BQU0sV0FBVyxXQUFXLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxXQUFXLGNBQWMsV0FBVyxNQUFNLFdBQVcsTUFBTSxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxNQUFNLFdBQVcsTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLFFBQVEsVUFBVSxNQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssUUFBUSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1B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Ozs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FBLFlBQVk7O0FBRWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWRldi1lbnYvLi9zcmMvc2NyaXB0cy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vd2ViLWRldi1lbnYvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vd2ViLWRldi1lbnYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYi1kZXYtZW52Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWItZGV2LWVudi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYi1kZXYtZW52Ly4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzRjMzciLCJ3ZWJwYWNrOi8vd2ViLWRldi1lbnYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2ViLWRldi1lbnYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYi1kZXYtZW52Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYi1kZXYtZW52Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYi1kZXYtZW52Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2ViLWRldi1lbnYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWItZGV2LWVudi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWItZGV2LWVudi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWItZGV2LWVudi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViLWRldi1lbnYvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWItZGV2LWVudi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYi1kZXYtZW52L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViLWRldi1lbnYvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2ViLWRldi1lbnYvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2ViLWRldi1lbnYvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYi1kZXYtZW52Ly4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZS1zdHJpY3QnO1xuXG5pbXBvcnQgTG9nb0RhcmsgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9sb2dvLWRhcmsuc3ZnJztcbmltcG9ydCBMb2dvTGlnaHQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9sb2dvLWxpZ2h0LnN2Zyc7XG5cbmltcG9ydCBJY29uQW5pbWF0aW9uIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1hbmltYXRpb24uc3ZnJztcbmltcG9ydCBJY29uQnVzaW5lc3MgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pY29uLWJ1c2luZXNzLnN2Zyc7XG5pbXBvcnQgSWNvbkNyeXB0byBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ljb24tY3J5cHRvLnN2Zyc7XG5pbXBvcnQgSWNvbkRlc2lnbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ljb24tZGVzaWduLnN2Zyc7XG5pbXBvcnQgSWNvblBob3RvZ3JhcGh5IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaWNvbi1waG90b2dyYXBoeS5zdmcnO1xuXG5pbXBvcnQgSGVyb0Rlc2tQbmcgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pbWFnZS1oZXJvLWRlc2t0b3AucG5nJztcbmltcG9ydCBIZXJvRGVza1BuZzJ4IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtaGVyby1kZXNrdG9wQDJ4LnBuZyc7XG5pbXBvcnQgSGVyb0Rlc2tXZWJwIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtaGVyby1kZXNrdG9wLndlYnAnO1xuaW1wb3J0IEhlcm9EZXNrV2VicDJ4IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtaGVyby1kZXNrdG9wQDJ4LndlYnAnO1xuaW1wb3J0IEhlcm9UYWJsZXRQbmcgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pbWFnZS1oZXJvLXRhYmxldC5wbmcnO1xuaW1wb3J0IEhlcm9UYWJsZXRQbmcyeCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ltYWdlLWhlcm8tdGFibGV0QDJ4LnBuZyc7XG5pbXBvcnQgSGVyb1RhYmxldFdlYnAgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pbWFnZS1oZXJvLXRhYmxldC53ZWJwJztcbmltcG9ydCBIZXJvVGFibGV0V2VicDJ4IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtaGVyby10YWJsZXRAMngud2VicCc7XG5pbXBvcnQgSGVyb01vYmlsZVBuZyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ltYWdlLWhlcm8tbW9iaWxlLnBuZyc7XG5pbXBvcnQgSGVyb01vYmlsZVBuZzJ4IGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtaGVyby1tb2JpbGVAMngucG5nJztcbmltcG9ydCBIZXJvTW9iaWxlV2VicCBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2ltYWdlLWhlcm8tbW9iaWxlLndlYnAnO1xuaW1wb3J0IEhlcm9Nb2JpbGVXZWJwMnggZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9pbWFnZS1oZXJvLW1vYmlsZUAyeC53ZWJwJztcblxuLy8gTG9nb1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1sb2dvJykuc3JjID0gTG9nb0Rhcms7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyLWxvZ28nKS5zcmMgPSBMb2dvTGlnaHQ7XG5cbi8vIEljb25zXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWNvbi1hbmltYXRpb24nKS5zcmMgPSBJY29uQW5pbWF0aW9uO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24tYnVzaW5lc3MnKS5zcmMgPSBJY29uQnVzaW5lc3M7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaWNvbi1jcnlwdG8nKS5zcmMgPSBJY29uQ3J5cHRvO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24tZGVzaWduJykuc3JjID0gSWNvbkRlc2lnbjtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpY29uLXBob3RvZ3JhcGh5Jykuc3JjID0gSWNvblBob3RvZ3JhcGh5O1xuXG4vLyBIZXJvXG5jb25zdCBwaWN0dXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlcm8taW1nJyk7XG5jb25zdCBzcmNEZXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNvdXJjZVwiKTtcbmNvbnN0IHNyY1RhYmxldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIik7XG5jb25zdCBzcmNNb2JpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIpO1xuY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuc3JjRGVzay5tZWRpYSA9IFwiKG1pbi13aWR0aDogMTIwMHB4KVwiO1xuc3JjRGVzay5zcmNzZXQgPSBgJHtIZXJvRGVza1dlYnB9IDF4LCAke0hlcm9EZXNrUG5nfSAxeCwgJHtIZXJvRGVza1dlYnAyeH0gMngsICR7SGVyb0Rlc2tQbmcyeH0gMnhgO1xuXG5zcmNUYWJsZXQubWVkaWEgPSBcIihtaW4td2lkdGg6IDc2OHB4KVwiO1xuc3JjVGFibGV0LnNyY3NldCA9IGAke0hlcm9UYWJsZXRXZWJwfSAxeCwgJHtIZXJvVGFibGV0UG5nfSAxeCwgJHtIZXJvVGFibGV0V2VicDJ4fSAyeCwgJHtIZXJvVGFibGV0UG5nMnh9IDJ4YDtcblxuc3JjTW9iaWxlLnNyY3NldCA9IGAke0hlcm9Nb2JpbGVXZWJwfSAxeCwgJHtIZXJvTW9iaWxlUG5nfSAxeCwgJHtIZXJvTW9iaWxlV2VicDJ4fSAyeCwgJHtIZXJvTW9iaWxlUG5nMnh9IDJ4YDtcblxuaW1nLnNyYyA9IEhlcm9Nb2JpbGVQbmc7XG5pbWcuY2xhc3NMaXN0LmFkZCgnaGVyby1pbWcnKTtcbmltZy5hbHQgPSBcIlwiO1xuXG5waWN0dXJlLmFwcGVuZENoaWxkKHNyY0Rlc2spO1xucGljdHVyZS5hcHBlbmRDaGlsZChzcmNUYWJsZXQpO1xucGljdHVyZS5hcHBlbmRDaGlsZChzcmNNb2JpbGUpO1xucGljdHVyZS5hcHBlbmRDaGlsZChpbWcpO1xuXG5cblxuXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ZvbnRzL1BsdXNKYWthcnRhU2Fucy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAgICAgICAgICAgUkVTRVRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLypodHRwczovL2FuZHktYmVsbC5jby51ay9hLW1vZGVybi1jc3MtcmVzZXQvKi9cbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5wLFxuZmlndXJlLFxuYmxvY2txdW90ZSxcbmRsLFxuZGQge1xuICBtYXJnaW4tYmxvY2stZW5kOiAwO1xufVxuXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cbnVsW3JvbGU9bGlzdF0sXG5vbFtyb2xlPWxpc3RdIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogU2V0IGNvcmUgcm9vdCBkZWZhdWx0cyAqL1xuaHRtbDpmb2N1cy13aXRoaW4ge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cbmE6bm90KFtjbGFzc10pIHtcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xufVxuXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXG5pbWcsXG5waWN0dXJlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zLCB0cmFuc2l0aW9ucyBhbmQgc21vb3RoIHNjcm9sbCBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcbiAgfVxuICAqLFxuICAqOjpiZWZvcmUsXG4gICo6OmFmdGVyIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuLyogY3VzdG9tICovXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQbHVzSmFrYXJ0YVNhbnNcIjtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBmb250LXdlaWdodDogMTAwIDkwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG46cm9vdCB7XG4gIC0tY2xyLXByaW1hcnk6ICMxMzE4M0Y7XG4gIC0tY2xyLXByaW1hcnktbGlnaHQ6ICM2NjZDQTM7XG4gIC0tY2xyLXNlY29uZGFyeTogIzgzODY5QTtcbiAgLS1jbHItYWNjZW50OiAjRjc0NzgwO1xuICAtLWNsci1hY2NlbnQtbGlnaHQ6ICNGRkE3QzM7XG4gIC0tY2xyLXdoaXRlOiAjRkZGRkZGO1xuICAtLWdyYWQtcGluazogbGluZWFyLWdyYWRpZW50KCNGRjZGNDgsICNGMDJBQTYpO1xuICAtLWdyYWQtcHVycGxlOiBsaW5lYXItZ3JhZGllbnQoIzQ4NTFGRiwgI0YwMkFBNik7XG4gIC0tZ3JhZC1waW5rLWxpZ2h0OiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDExMiwgNzIsIDAuNSksIHJnYmEoMjQwLCA0MiwgMTY3LCAwLjUpKTtcbiAgLS1ncmFkLXB1cnBsZS1saWdodDogbGluZWFyLWdyYWRpZW50KHJnYmEoNzIsIDgxLCAyNTUsIDAuNSksIHJnYmEoMjQwLCA0MiwgMTY3LCAwLjUpKTtcbiAgLS1ncmFkLWJsdWUtbGlnaHQ6IGxpbmVhci1ncmFkaWVudCgjRkZGRkZGLCAjRjBGMUZGKTtcbiAgLS1mb250OiBQbHVzSmFrYXJ0YVNhbnMsIHNhbnMtc2VyaWY7XG4gIC0taGVhZGVyLWhlaWdodDogNXJlbTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcbiAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbn1cblxuLmxpbmstc3RhcnQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmxpbmstc3RhcnRbZGF0YS10eXBlPWJ1dHRvbl0ge1xuICBjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgcGFkZGluZzogMCAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwdnc7XG59XG5cbi5saW5rLXN0YXJ0W2RhdGEtdHlwZT1idXR0b25dOmhvdmVyLFxuLmxpbmstc3RhcnRbZGF0YS10eXBlPWJ1dHRvbl06Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeS1saWdodCk7XG59XG5cbi5saW5rLXN0YXJ0W2RhdGEtdHlwZT1saW5rXSB7XG4gIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbn1cblxuLmxpbmstc3RhcnRbZGF0YS10eXBlPWxpbmtdOmhvdmVyLFxuLmxpbmstc3RhcnRbZGF0YS10eXBlPWxpbmtdOmZvY3VzIHtcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQtbGlnaHQpO1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiA1LjVyZW07XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogOTIlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgOnJvb3Qge1xuICAgIC0taGVhZGVyLWhlaWdodDogNnJlbTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1pbi13aWR0aDogNDNyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5saW5rLXN0YXJ0W2RhdGEtdHlwZT1idXR0b25dIHtcbiAgICBsaW5lLWhlaWdodDogMy41cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgcGFkZGluZzogMCAyZW07XG4gIH1cbiAgLmxvZ28ge1xuICAgIHdpZHRoOiA3LjEyNXJlbTtcbiAgfVxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzclO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAwZW0pIHtcbiAgOnJvb3Qge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjBlbSkge1xuICA6cm9vdCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG4uaGVhZGluZy1sLFxuLmhlYWRpbmctbSxcbi5oZWFkaW5nLXMge1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uaGVhZGluZy1sIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI3O1xufVxuXG4uaGVhZGluZy1tIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuXG4uaGVhZGluZy1zIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMS4xNztcbn1cblxuLmJvZHktbSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTU7XG4gIGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcbn1cblxuLmJvZHktcyB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaGVhZGluZy1sIHtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgfVxuICAuaGVhZGluZy1tIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgLmhlYWRpbmctcyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmJvZHktbSB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxuICAuYm9keS1zIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XG59XG5cbmhlYWRlciAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICBoZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG59XG4uaGVybyB7XG4gIHBhZGRpbmctdG9wOiAxLjM3NXJlbTtcbn1cblxuLmhlcm8tdGV4dCB7XG4gIG1hcmdpbjogMS41cmVtIDAgMS42MjVyZW07XG59XG5cbi5oZXJvIC5saW5rLXN0YXJ0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1waW5rKTtcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcbiAgcGFkZGluZzogMCAyLjI1ZW07XG59XG5cbi5oZXJvIC5saW5rLXN0YXJ0OmhvdmVyLFxuLmhlcm8gLmxpbmstc3RhcnQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLXBpbmstbGlnaHQpO1xufVxuXG4uaGVyby1pbWctY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlcm8taW1nIHtcbiAgd2lkdGg6IDExOHZ3O1xuICBtYXgtd2lkdGg6IDEyMHZ3O1xuICBvYmplY3QtcG9zaXRpb246IC05dncgMDtcbiAgbWFyZ2luLWJvdHRvbTogLTEuNXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgLmhlcm8ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgbWluLWhlaWdodDogMzVyZW07XG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSAqIC0xKTtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxuICAuY29udGFpbmVyLFxuICAuaGVyby1pbWctY29udGFpbmVyIHtcbiAgICBncmlkLXJvdzogMS8yO1xuICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gIH1cbiAgLmhlcm8tdGV4dC1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IGNhbGMoNC43NXJlbSArIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1heC13aWR0aDogMzVjaDtcbiAgfVxuICAuaGVyby1pbWctY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1heC13aWR0aDogMzByZW07XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICB9XG4gIC5oZXJvLWltZyB7XG4gICAgd2lkdGg6IDE4MCU7XG4gICAgbWF4LXdpZHRoOiA0MDAlO1xuICAgIG9iamVjdC1wb3NpdGlvbjogLTAuNXJlbSAtMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMjAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAuaGVyby10ZXh0LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogY2FsYyg5LjVyZW0gKyB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XG4gICAgbWF4LXdpZHRoOiA0MGNoO1xuICB9XG4gIC5oZXJvLXRleHQge1xuICAgIG1heC13aWR0aDogMzRjaDtcbiAgICBtYXJnaW46IDEuNzVyZW0gMCAyLjVyZW07XG4gIH1cbiAgLmhlcm8gLmxpbmstc3RhcnQge1xuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xuICAgIHBhZGRpbmc6IDAgMmVtO1xuICB9XG4gIC5oZXJvLWltZy1jb250YWluZXIge1xuICAgIHdpZHRoOiA0OSU7XG4gICAgbWF4LXdpZHRoOiA1NnJlbTtcbiAgfVxuICAuaGVyby1pbWcge1xuICAgIHdpZHRoOiAxNTAlO1xuICB9XG59XG4uY291cnNlcyB7XG4gIC0tY2FyZC1wYWRkaW5nOiAxLjc1cmVtO1xuICAtLWljb24tc2l6ZTogMy41cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLWJsdWUtbGlnaHQpO1xuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xufVxuXG4uY291cnNlcy10aXRsZS1jb250YWluZXIsXG4uY291cnNlLWNhcmQge1xuICBwYWRkaW5nOiB2YXIoLS1jYXJkLXBhZGRpbmcpO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG59XG5cbi5jb3Vyc2VzLXRpdGxlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtcGluayk7XG4gIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xufVxuXG4uY291cnNlLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tY2FyZC1wYWRkaW5nKSArIHZhcigtLWljb24tc2l6ZSkgLyAyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcbiAgYm94LXNoYWRvdzogMCAxLjVyZW0gMy4yNXJlbSByZ2JhKDYsIDIyLCAxNDEsIDAuMDQ0NSk7XG59XG5cbi5jb3Vyc2UtaWNvbiB7XG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGModmFyKC0taWNvbi1zaXplKSAvIDIgKiAtMSk7XG4gIGluc2V0LWlubGluZS1zdGFydDogdmFyKC0tY2FyZC1wYWRkaW5nKTtcbn1cblxuLmNvdXJzZS1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMXJlbSAwIDEuNXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgLmNvdXJzZXMge1xuICAgIC0tY2FyZC1wYWRkaW5nOiAycmVtO1xuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNS4zNzVlbTtcbiAgfVxuICAuY291cnNlcyAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgYXV0byk7XG4gICAgZ2FwOiAycmVtIDAuNzVyZW07XG4gIH1cbiAgLmNvdXJzZXMtdGl0bGUtY29udGFpbmVyLFxuICAuY291cnNlcy1saXN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xuICAgIGdyaWQtcm93OiAxLy0xO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogc3ViZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHN1YmdyaWQ7XG4gIH1cbiAgLmNvdXJzZXMtdGl0bGUtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgIGdyaWQtcm93OiAxLzI7XG4gIH1cbiAgLmNvdXJzZXMtbGlzdCBsaTpudGgtY2hpbGQoMSkge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gIH1cbiAgLmNvdXJzZXMtdGl0bGUtY29udGFpbmVyLFxuICAuY291cnNlLWNhcmQge1xuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0taWNvbi1zaXplKSAvIDIpO1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWNhcmQtcGFkZGluZykgKyB2YXIoLS1pY29uLXNpemUpIC8gMik7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxLjI1cmVtO1xuICB9XG4gIC5jb3Vyc2UtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5jb3Vyc2UtY2FyZCAubGluay1zdGFydCB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLmNvdXJzZXMge1xuICAgIG1hcmdpbi10b3A6IDMuNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogOWVtO1xuICB9XG4gIC5jb3Vyc2VzIC5jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XG4gICAgZ2FwOiAzLjVyZW0gMS44NzVyZW07XG4gIH1cbiAgLmNvdXJzZXMtdGl0bGUtY29udGFpbmVyLFxuICAuY291cnNlLWNhcmQge1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tY2FyZC1wYWRkaW5nKTtcbiAgfVxuICAuY291cnNlLWNhcmQge1xuICAgIGdhcDogMS41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XG4gIH1cbiAgLmNvdXJzZS1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA3LjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbn1cblxuZm9vdGVyIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmZvb3RlciAubGluay1zdGFydCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtcHVycGxlKTtcbn1cblxuZm9vdGVyIC5saW5rLXN0YXJ0OmhvdmVyLFxuZm9vdGVyIC5saW5rLXN0YXJ0OmZvY3VzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1wdXJwbGUtbGlnaHQpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9faGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX3NlY3Rpb24taGVyby5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19zZWN0aW9uLWNvdXJzZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fZm9vdGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OzRDQUFBO0FBSUEsOENBQUE7QUFFQSxxQkFB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QUFBO0lBQ0EscUNBQUE7SUFDQSxtQ0FBQTtJQUNBLGlCQUFBO0VMMlVOO0VLeFVFOztJQUVJLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7SUFDQSw4QkFBQTtJQUNBLDJCQUFBO0VMMFVOO0VLdlVFO0lBQ0ksZ0JBQUE7SUFDQSxhQUFBO0VMeVVOO0VLdFVFO0lBQ0ksZ0JBQUE7RUx3VU47RUtyVUU7O0lBRUksc0NBQUE7SUFDQSw2REFBQTtJQUNBLDJCQUFBO0VMdVVOO0VLcFVFO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0VMc1VOO0VLblVFO0lBQ0ksZ0JBQUE7RUxxVU47QUFDRjtBSzlUQTtFQUVJO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFTCtUTjtFSzVURTtJQUNJLHFDQUFBO0lBQ0EsbUNBQUE7SUFDQSxvQkFBQTtFTDhUTjtFSzNURTs7SUFFSSx1Q0FBQTtFTDZUTjtFSzFURTtJQUNJLFdBQUE7SUFDQSxzQkFBQTtFTDRUTjtFS3pURTtJQUNJLFNBQUE7RUwyVE47QUFDRjtBTXJiQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0FOdWJKOztBTXBiQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QU51Yko7O0FNcGJBO0VBQ0ksOEJBQUE7QU51Yko7O0FNcGJBOztFQUVJLG9DQUFBO0FOdWJKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcbiAgICAgICAgICAgICAgICAgIFJFU0VUXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypodHRwczovL2FuZHktYmVsbC5jby51ay9hLW1vZGVybi1jc3MtcmVzZXQvKi9cXG5cXG4vKiBCb3ggc2l6aW5nIHJ1bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcbmJvZHksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxucCxcXG5maWd1cmUsXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCB7XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9J2xpc3QnXSxcXG5vbFtyb2xlPSdsaXN0J10ge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxuYTpub3QoW2NsYXNzXSkge1xcbiAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XFxufVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcsXFxucGljdHVyZSB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMsIHRyYW5zaXRpb25zIGFuZCBzbW9vdGggc2Nyb2xsIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gICAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvO1xcbiAgICB9XFxuICBcXG4gICAgKixcXG4gICAgKjo6YmVmb3JlLFxcbiAgICAqOjphZnRlciB7XFxuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XFxuICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgfVxcbn1cXG5cXG4vKiBjdXN0b20gKi9cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVwiLFwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuICAgICAgICAgICAgICAgICAgUkVTRVRcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKmh0dHBzOi8vYW5keS1iZWxsLmNvLnVrL2EtbW9kZXJuLWNzcy1yZXNldC8qL1xcbi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5wLFxcbmZpZ3VyZSxcXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkIHtcXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxufVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcbnVsW3JvbGU9bGlzdF0sXFxub2xbcm9sZT1saXN0XSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBTZXQgY29yZSByb290IGRlZmF1bHRzICovXFxuaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcbmE6bm90KFtjbGFzc10pIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxuICB9XFxuICAqLFxcbiAgKjo6YmVmb3JlLFxcbiAgKjo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuLyogY3VzdG9tICovXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlBsdXNKYWthcnRhU2Fuc1xcXCI7XFxuICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICBmb250LXdlaWdodDogMTAwIDkwMDtcXG4gIHNyYzogdXJsKC4uL2Fzc2V0cy9mb250cy9QbHVzSmFrYXJ0YVNhbnMtVmFyaWFibGVGb250X3dnaHQudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcbjpyb290IHtcXG4gIC0tY2xyLXByaW1hcnk6ICMxMzE4M0Y7XFxuICAtLWNsci1wcmltYXJ5LWxpZ2h0OiAjNjY2Q0EzO1xcbiAgLS1jbHItc2Vjb25kYXJ5OiAjODM4NjlBO1xcbiAgLS1jbHItYWNjZW50OiAjRjc0NzgwO1xcbiAgLS1jbHItYWNjZW50LWxpZ2h0OiAjRkZBN0MzO1xcbiAgLS1jbHItd2hpdGU6ICNGRkZGRkY7XFxuICAtLWdyYWQtcGluazogbGluZWFyLWdyYWRpZW50KCNGRjZGNDgsICNGMDJBQTYpO1xcbiAgLS1ncmFkLXB1cnBsZTogbGluZWFyLWdyYWRpZW50KCM0ODUxRkYsICNGMDJBQTYpO1xcbiAgLS1ncmFkLXBpbmstbGlnaHQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMTEyLCA3MiwgMC41KSwgcmdiYSgyNDAsIDQyLCAxNjcsIDAuNSkpO1xcbiAgLS1ncmFkLXB1cnBsZS1saWdodDogbGluZWFyLWdyYWRpZW50KHJnYmEoNzIsIDgxLCAyNTUsIDAuNSksIHJnYmEoMjQwLCA0MiwgMTY3LCAwLjUpKTtcXG4gIC0tZ3JhZC1ibHVlLWxpZ2h0OiBsaW5lYXItZ3JhZGllbnQoI0ZGRkZGRiwgI0YwRjFGRik7XFxuICAtLWZvbnQ6IFBsdXNKYWthcnRhU2Fucywgc2Fucy1zZXJpZjtcXG4gIC0taGVhZGVyLWhlaWdodDogNXJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbn1cXG5cXG4ubGluay1zdGFydCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmxpbmstc3RhcnRbZGF0YS10eXBlPWJ1dHRvbl0ge1xcbiAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICBsaW5lLWhlaWdodDogM3JlbTtcXG4gIHBhZGRpbmc6IDAgMS41ZW07XFxuICBib3JkZXItcmFkaXVzOiAxMDB2dztcXG59XFxuXFxuLmxpbmstc3RhcnRbZGF0YS10eXBlPWJ1dHRvbl06aG92ZXIsXFxuLmxpbmstc3RhcnRbZGF0YS10eXBlPWJ1dHRvbl06Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnktbGlnaHQpO1xcbn1cXG5cXG4ubGluay1zdGFydFtkYXRhLXR5cGU9bGlua10ge1xcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG59XFxuXFxuLmxpbmstc3RhcnRbZGF0YS10eXBlPWxpbmtdOmhvdmVyLFxcbi5saW5rLXN0YXJ0W2RhdGEtdHlwZT1saW5rXTpmb2N1cyB7XFxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudC1saWdodCk7XFxufVxcblxcbi5sb2dvIHtcXG4gIHdpZHRoOiA1LjVyZW07XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDkyJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgOnJvb3Qge1xcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDZyZW07XFxuICB9XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWluLXdpZHRoOiA0M3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcXG4gIC5saW5rLXN0YXJ0W2RhdGEtdHlwZT1idXR0b25dIHtcXG4gICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgcGFkZGluZzogMCAyZW07XFxuICB9XFxuICAubG9nbyB7XFxuICAgIHdpZHRoOiA3LjEyNXJlbTtcXG4gIH1cXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogNzclO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwZW0pIHtcXG4gIDpyb290IHtcXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMGVtKSB7XFxuICA6cm9vdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIH1cXG59XFxuLmhlYWRpbmctbCxcXG4uaGVhZGluZy1tLFxcbi5oZWFkaW5nLXMge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLmhlYWRpbmctbCB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI3O1xcbn1cXG5cXG4uaGVhZGluZy1tIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxufVxcblxcbi5oZWFkaW5nLXMge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMTc7XFxufVxcblxcbi5ib2R5LW0ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU1O1xcbiAgY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcbn1cXG5cXG4uYm9keS1zIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XFxuICAuaGVhZGluZy1sIHtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICB9XFxuICAuaGVhZGluZy1tIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbiAgLmhlYWRpbmctcyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgLmJvZHktbSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICB9XFxuICAuYm9keS1zIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcbn1cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbn1cXG5cXG5oZWFkZXIgLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuICBoZWFkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDI7XFxuICB9XFxufVxcbi5oZXJvIHtcXG4gIHBhZGRpbmctdG9wOiAxLjM3NXJlbTtcXG59XFxuXFxuLmhlcm8tdGV4dCB7XFxuICBtYXJnaW46IDEuNXJlbSAwIDEuNjI1cmVtO1xcbn1cXG5cXG4uaGVybyAubGluay1zdGFydCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLXBpbmspO1xcbiAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcXG4gIHBhZGRpbmc6IDAgMi4yNWVtO1xcbn1cXG5cXG4uaGVybyAubGluay1zdGFydDpob3ZlcixcXG4uaGVybyAubGluay1zdGFydDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLXBpbmstbGlnaHQpO1xcbn1cXG5cXG4uaGVyby1pbWctY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaGVyby1pbWcge1xcbiAgd2lkdGg6IDExOHZ3O1xcbiAgbWF4LXdpZHRoOiAxMjB2dztcXG4gIG9iamVjdC1wb3NpdGlvbjogLTl2dyAwO1xcbiAgbWFyZ2luLWJvdHRvbTogLTEuNXJlbTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gIC5oZXJvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAzNXJlbTtcXG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSAqIC0xKTtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICB9XFxuICAuY29udGFpbmVyLFxcbiAgLmhlcm8taW1nLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICB9XFxuICAuaGVyby10ZXh0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IGNhbGMoNC43NXJlbSArIHZhcigtLWhlYWRlci1oZWlnaHQpKTtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgbWF4LXdpZHRoOiAzNWNoO1xcbiAgfVxcbiAgLmhlcm8taW1nLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1heC13aWR0aDogMzByZW07XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XFxuICB9XFxuICAuaGVyby1pbWcge1xcbiAgICB3aWR0aDogMTgwJTtcXG4gICAgbWF4LXdpZHRoOiA0MDAlO1xcbiAgICBvYmplY3QtcG9zaXRpb246IC0wLjVyZW0gLTFyZW07XFxuICAgIG1hcmdpbi10b3A6IC0yMCU7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XFxuICAuaGVyby10ZXh0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IGNhbGMoOS41cmVtICsgdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbiAgICBtYXgtd2lkdGg6IDQwY2g7XFxuICB9XFxuICAuaGVyby10ZXh0IHtcXG4gICAgbWF4LXdpZHRoOiAzNGNoO1xcbiAgICBtYXJnaW46IDEuNzVyZW0gMCAyLjVyZW07XFxuICB9XFxuICAuaGVybyAubGluay1zdGFydCB7XFxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xcbiAgICBwYWRkaW5nOiAwIDJlbTtcXG4gIH1cXG4gIC5oZXJvLWltZy1jb250YWluZXIge1xcbiAgICB3aWR0aDogNDklO1xcbiAgICBtYXgtd2lkdGg6IDU2cmVtO1xcbiAgfVxcbiAgLmhlcm8taW1nIHtcXG4gICAgd2lkdGg6IDE1MCU7XFxuICB9XFxufVxcbi5jb3Vyc2VzIHtcXG4gIC0tY2FyZC1wYWRkaW5nOiAxLjc1cmVtO1xcbiAgLS1pY29uLXNpemU6IDMuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtYmx1ZS1saWdodCk7XFxuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcbn1cXG5cXG4uY291cnNlcy10aXRsZS1jb250YWluZXIsXFxuLmNvdXJzZS1jYXJkIHtcXG4gIHBhZGRpbmc6IHZhcigtLWNhcmQtcGFkZGluZyk7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xcbn1cXG5cXG4uY291cnNlcy10aXRsZS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZC1waW5rKTtcXG4gIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcbn1cXG5cXG4uY291cnNlLWNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tY2FyZC1wYWRkaW5nKSArIHZhcigtLWljb24tc2l6ZSkgLyAyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuICBib3gtc2hhZG93OiAwIDEuNXJlbSAzLjI1cmVtIHJnYmEoNiwgMjIsIDE0MSwgMC4wNDQ1KTtcXG59XFxuXFxuLmNvdXJzZS1pY29uIHtcXG4gIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IGNhbGModmFyKC0taWNvbi1zaXplKSAvIDIgKiAtMSk7XFxuICBpbnNldC1pbmxpbmUtc3RhcnQ6IHZhcigtLWNhcmQtcGFkZGluZyk7XFxufVxcblxcbi5jb3Vyc2UtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAxcmVtIDAgMS41cmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xcbiAgLmNvdXJzZXMge1xcbiAgICAtLWNhcmQtcGFkZGluZzogMnJlbTtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNS4zNzVlbTtcXG4gIH1cXG4gIC5jb3Vyc2VzIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXG4gICAgZ2FwOiAycmVtIDAuNzVyZW07XFxuICB9XFxuICAuY291cnNlcy10aXRsZS1jb250YWluZXIsXFxuICAuY291cnNlcy1saXN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICAgIGdyaWQtcm93OiAxLy0xO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHN1YmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogc3ViZ3JpZDtcXG4gIH1cXG4gIC5jb3Vyc2VzLXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICB9XFxuICAuY291cnNlcy1saXN0IGxpOm50aC1jaGlsZCgxKSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICB9XFxuICAuY291cnNlcy10aXRsZS1jb250YWluZXIsXFxuICAuY291cnNlLWNhcmQge1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLWljb24tc2l6ZSkgLyAyKTtcXG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tY2FyZC1wYWRkaW5nKSArIHZhcigtLWljb24tc2l6ZSkgLyAyKTtcXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxLjI1cmVtO1xcbiAgfVxcbiAgLmNvdXJzZS1jYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5jb3Vyc2UtY2FyZCAubGluay1zdGFydCB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XFxuICAuY291cnNlcyB7XFxuICAgIG1hcmdpbi10b3A6IDMuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDllbTtcXG4gIH1cXG4gIC5jb3Vyc2VzIC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcXG4gICAgZ2FwOiAzLjVyZW0gMS44NzVyZW07XFxuICB9XFxuICAuY291cnNlcy10aXRsZS1jb250YWluZXIsXFxuICAuY291cnNlLWNhcmQge1xcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWNhcmQtcGFkZGluZyk7XFxuICB9XFxuICAuY291cnNlLWNhcmQge1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcXG4gIH1cXG4gIC5jb3Vyc2UtZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxufVxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiA3LjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcbmZvb3RlciAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIC5saW5rLXN0YXJ0IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtcHVycGxlKTtcXG59XFxuXFxuZm9vdGVyIC5saW5rLXN0YXJ0OmhvdmVyLFxcbmZvb3RlciAubGluay1zdGFydDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLXB1cnBsZS1saWdodCk7XFxufVwiLFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUGx1c0pha2FydGFTYW5zJztcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgICBmb250LXdlaWdodDogMTAwIDkwMDtcXG4gICAgc3JjOiB1cmwoLi4vYXNzZXRzL2ZvbnRzL1BsdXNKYWthcnRhU2Fucy1WYXJpYWJsZUZvbnRfd2dodC50dGYpIFxcbiAgICAgICAgIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWNsci1wcmltYXJ5OiAjMTMxODNGO1xcbiAgICAtLWNsci1wcmltYXJ5LWxpZ2h0OiAjNjY2Q0EzO1xcbiAgICAtLWNsci1zZWNvbmRhcnk6ICM4Mzg2OUE7XFxuICAgIC0tY2xyLWFjY2VudDogI0Y3NDc4MDtcXG4gICAgLS1jbHItYWNjZW50LWxpZ2h0OiAjRkZBN0MzO1xcbiAgICAtLWNsci13aGl0ZTogI0ZGRkZGRjtcXG5cXG4gICAgLS1ncmFkLXBpbms6IGxpbmVhci1ncmFkaWVudCgjRkY2RjQ4LCAjRjAyQUE2KTtcXG4gICAgLS1ncmFkLXB1cnBsZTogbGluZWFyLWdyYWRpZW50KCM0ODUxRkYsICNGMDJBQTYpO1xcbiAgICAtLWdyYWQtcGluay1saWdodDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAxMTIsIDcyLCAwLjUpLCByZ2JhKDI0MCwgNDIsIDE2NywgMC41KSk7XFxuICAgIC0tZ3JhZC1wdXJwbGUtbGlnaHQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDcyLCA4MSwgMjU1LCAwLjUpLCByZ2JhKDI0MCwgNDIsIDE2NywgMC41KSk7XFxuICAgIC0tZ3JhZC1ibHVlLWxpZ2h0OiBsaW5lYXItZ3JhZGllbnQoI0ZGRkZGRiwgI0YwRjFGRik7XFxuXFxuICAgIC0tZm9udDogUGx1c0pha2FydGFTYW5zLCBzYW5zLXNlcmlmO1xcblxcbiAgICAtLWhlYWRlci1oZWlnaHQ6IDVyZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcbi8vIExpbmtzXFxuXFxuLmxpbmstc3RhcnQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcbn1cXG5cXG4ubGluay1zdGFydFtkYXRhLXR5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XFxuICAgIHBhZGRpbmc6IDAgMS41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xcbn1cXG5cXG4ubGluay1zdGFydFtkYXRhLXR5cGU9XFxcImJ1dHRvblxcXCJdOmhvdmVyLFxcbi5saW5rLXN0YXJ0W2RhdGEtdHlwZT1cXFwiYnV0dG9uXFxcIl06Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeS1saWdodCk7XFxufVxcblxcbi5saW5rLXN0YXJ0W2RhdGEtdHlwZT1cXFwibGlua1xcXCJdIHtcXG4gICAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xcbn1cXG5cXG4ubGluay1zdGFydFtkYXRhLXR5cGU9XFxcImxpbmtcXFwiXTpob3ZlcixcXG4ubGluay1zdGFydFtkYXRhLXR5cGU9XFxcImxpbmtcXFwiXTpmb2N1cyB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50LWxpZ2h0KTtcXG59XFxuXFxuXFxuLy8gTG9nb1xcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDUuNXJlbTtcXG59XFxuXFxuXFxuLy8gQ29udGFpbmVyXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA5MiU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5cXG4vLyBtZWRpYSBxdWVyaWVzXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gICAgOnJvb3Qge1xcbiAgICAgICAgLS1oZWFkZXItaGVpZ2h0OiA2cmVtO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIG1pbi13aWR0aDogNDNyZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcXG4gICAgLmxpbmstc3RhcnRbZGF0YS10eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICAgICAgICBsaW5lLWhlaWdodDogMy41cmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMmVtO1xcbiAgICB9XFxuXFxuICAgIC5sb2dvIHtcXG4gICAgICAgIHdpZHRoOiA3LjEyNXJlbTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiA3NyU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMGVtKSB7XFxuICAgIDpyb290IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMGVtKSB7XFxuICAgIDpyb290IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgfVxcbn1cXG5cIixcIi5oZWFkaW5nLWwsXFxuLmhlYWRpbmctbSxcXG4uaGVhZGluZy1zIHtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLmhlYWRpbmctbCB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4yNztcXG59XFxuXFxuLmhlYWRpbmctbSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcXG59XFxuXFxuLmhlYWRpbmctcyB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTc7XFxufVxcblxcbi5ib2R5LW0ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU1O1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxufVxcblxcbi5ib2R5LXMge1xcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsaW5lLWhlaWdodDogMS43NTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcXG5cXG4gICAgLmhlYWRpbmctbCB7XFxuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmhlYWRpbmctbSB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5oZWFkaW5nLXMge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5ib2R5LW0ge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmJvZHktcyB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG59XCIsXCJoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbn1cXG5cXG5oZWFkZXIgLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLy8gVGFibGV0XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIC8vIHBsYWNlIHRoZSBoZWFkZXIgYWhlYWQgb2YgdGhlIGhlcm8gXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB6LWluZGV4OiAyO1xcbiAgICB9XFxufVwiLFwiLmhlcm8ge1xcbiAgICBwYWRkaW5nLXRvcDogMS4zNzVyZW07XFxufVxcblxcbi5oZXJvLXRleHQge1xcbiAgICBtYXJnaW46IDEuNXJlbSAwIDEuNjI1cmVtO1xcbn1cXG5cXG4uaGVybyAubGluay1zdGFydCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtcGluayk7XFxuICAgIGxpbmUtaGVpZ2h0OiAzLjVyZW07XFxuICAgIHBhZGRpbmc6IDAgMi4yNWVtO1xcbn1cXG5cXG4uaGVybyAubGluay1zdGFydDpob3ZlcixcXG4uaGVybyAubGluay1zdGFydDpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtcGluay1saWdodCk7XFxufVxcblxcbi8vIFJlbW92ZSBpbWFnZSBleHRyYSBwYWRkaW5nXFxuXFxuLmhlcm8taW1nLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oZXJvLWltZyB7XFxuICAgIHdpZHRoOiAxMTh2dztcXG4gICAgbWF4LXdpZHRoOiAxMjB2dztcXG4gICAgb2JqZWN0LXBvc2l0aW9uOiAtOXZ3IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xLjVyZW07XFxufVxcblxcblxcbi8vIFRhYmxldFxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA0OGVtKSB7XFxuXFxuICAgIC5oZXJvIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICAgICAgXFxuICAgICAgICBtaW4taGVpZ2h0OiAzNXJlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKiAtMSk7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyLFxcbiAgICAuaGVyby1pbWctY29udGFpbmVyIHtcXG4gICAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgfVxcblxcbiAgICAuaGVyby10ZXh0LWNvbnRhaW5lciB7XFxuICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKDQuNzVyZW0gKyB2YXIoLS1oZWFkZXItaGVpZ2h0KSk7XFxuICAgICAgICB3aWR0aDogNjAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAzNWNoO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvLWltZy1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIG1heC13aWR0aDogMzByZW07XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcXG4gICAgfVxcblxcbiAgICAuaGVyby1pbWcge1xcbiAgICAgICAgd2lkdGg6IDE4MCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDQwMCU7XFxuICAgICAgICBvYmplY3QtcG9zaXRpb246IC0uNXJlbSAtMXJlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0yMCU7XFxuICAgIH1cXG59XFxuXFxuXFxuLy8gRGVza3RvcFxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XFxuXFxuICAgIC5oZXJvLXRleHQtY29udGFpbmVyIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGMoOS41cmVtICsgdmFyKC0taGVhZGVyLWhlaWdodCkpO1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MGNoO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvLXRleHQge1xcbiAgICAgICAgbWF4LXdpZHRoOiAzNGNoO1xcbiAgICAgICAgbWFyZ2luOiAxLjc1cmVtIDAgMi41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5oZXJvIC5saW5rLXN0YXJ0IHtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xcbiAgICAgICAgcGFkZGluZzogMCAyZW07XFxuICAgIH1cXG5cXG4gICAgLmhlcm8taW1nLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogNDklO1xcbiAgICAgICAgbWF4LXdpZHRoOiA1NnJlbTtcXG4gICAgfVxcblxcbiAgICAuaGVyby1pbWcge1xcbiAgICAgICAgd2lkdGg6IDE1MCU7XFxuICAgIH1cXG59XFxuXFxuXCIsXCIuY291cnNlcyB7XFxuICAgIC0tY2FyZC1wYWRkaW5nOiAxLjc1cmVtO1xcbiAgICAtLWljb24tc2l6ZTogMy41cmVtO1xcblxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLWJsdWUtbGlnaHQpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcbn1cXG5cXG4uY291cnNlcy10aXRsZS1jb250YWluZXIsXFxuLmNvdXJzZS1jYXJkIHtcXG4gICAgcGFkZGluZzogdmFyKC0tY2FyZC1wYWRkaW5nKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC42MjVyZW07XFxufVxcblxcbi5jb3Vyc2VzLXRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWQtcGluayk7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcbn1cXG5cXG4uY291cnNlLWNhcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcXG4gICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tY2FyZC1wYWRkaW5nKSArIGNhbGModmFyKC0taWNvbi1zaXplKSAvIDIpKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG4gICAgYm94LXNoYWRvdzogMCAxLjVyZW0gMy4yNXJlbSByZ2JhKDYsIDIyLCAxNDEsIDAuMDQ0NSk7XFxufVxcblxcbi5jb3Vyc2UtaWNvbiB7XFxuICAgIHdpZHRoOiB2YXIoLS1pY29uLXNpemUpO1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogY2FsYygodmFyKC0taWNvbi1zaXplKSAvIDIpICogLTEpO1xcbiAgICBpbnNldC1pbmxpbmUtc3RhcnQ6IHZhcigtLWNhcmQtcGFkZGluZyk7XFxufVxcblxcbi5jb3Vyc2UtZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW46IDFyZW0gMCAxLjVyZW07XFxufSBcXG5cXG5cXG4vLyBUYWJsZXRcXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xcblxcbiAgICAuY291cnNlcyB7XFxuICAgICAgICAtLWNhcmQtcGFkZGluZzogMnJlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1LjM3NWVtO1xcbiAgICB9XFxuXFxuICAgIC5jb3Vyc2VzIC5jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXG4gICAgICAgIGdhcDogMnJlbSAuNzVyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvdXJzZXMtdGl0bGUtY29udGFpbmVyLFxcbiAgICAuY291cnNlcy1saXN0IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogc3ViZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogc3ViZ3JpZDtcXG4gICAgfVxcblxcbiAgICAuY291cnNlcy10aXRsZS1jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAgICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICB9XFxuXFxuICAgIC5jb3Vyc2VzLWxpc3QgbGk6bnRoLWNoaWxkKDEpIHtcXG4gICAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgfVxcblxcbiAgICAuY291cnNlcy10aXRsZS1jb250YWluZXIsXFxuICAgIC5jb3Vyc2UtY2FyZCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLWljb24tc2l6ZSkgLyAyKTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWNhcmQtcGFkZGluZykgKyBjYWxjKHZhcigtLWljb24tc2l6ZSkgLyAyKSk7XFxuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEuMjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvdXJzZS1jYXJkIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5jb3Vyc2UtY2FyZCAubGluay1zdGFydCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICB9XFxuXFxufVxcblxcblxcbi8vIERlc2t0b3BcXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xcblxcbiAgICAuY291cnNlcyB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAzLjVyZW07XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOWVtO1xcbiAgICB9XFxuXFxuICAgIC5jb3Vyc2VzIC5jb250YWluZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xcbiAgICAgICAgZ2FwOiAzLjVyZW0gMS44NzVyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvdXJzZXMtdGl0bGUtY29udGFpbmVyLFxcbiAgICAuY291cnNlLWNhcmQge1xcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1jYXJkLXBhZGRpbmcpO1xcbiAgICB9XFxuXFxuICAgIC5jb3Vyc2UtY2FyZCB7XFxuICAgICAgICBnYXA6IDEuNXJlbTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvdXJzZS1kZXNjcmlwdGlvbiB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH0gXFxuXFxuXFxufVwiLFwiZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogNy41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcbmZvb3RlciAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgLmxpbmstc3RhcnQge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLXB1cnBsZSk7XFxufVxcblxcbmZvb3RlciAubGluay1zdGFydDpob3ZlcixcXG5mb290ZXIgLmxpbmstc3RhcnQ6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkLXB1cnBsZS1saWdodCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIid1c2Utc3RyaWN0JztcblxuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHRzL2ltYWdlcy5qcyc7Il0sIm5hbWVzIjpbIkxvZ29EYXJrIiwiTG9nb0xpZ2h0IiwiSWNvbkFuaW1hdGlvbiIsIkljb25CdXNpbmVzcyIsIkljb25DcnlwdG8iLCJJY29uRGVzaWduIiwiSWNvblBob3RvZ3JhcGh5IiwiSGVyb0Rlc2tQbmciLCJIZXJvRGVza1BuZzJ4IiwiSGVyb0Rlc2tXZWJwIiwiSGVyb0Rlc2tXZWJwMngiLCJIZXJvVGFibGV0UG5nIiwiSGVyb1RhYmxldFBuZzJ4IiwiSGVyb1RhYmxldFdlYnAiLCJIZXJvVGFibGV0V2VicDJ4IiwiSGVyb01vYmlsZVBuZyIsIkhlcm9Nb2JpbGVQbmcyeCIsIkhlcm9Nb2JpbGVXZWJwIiwiSGVyb01vYmlsZVdlYnAyeCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcmMiLCJwaWN0dXJlIiwic3JjRGVzayIsImNyZWF0ZUVsZW1lbnQiLCJzcmNUYWJsZXQiLCJzcmNNb2JpbGUiLCJpbWciLCJtZWRpYSIsInNyY3NldCIsImNsYXNzTGlzdCIsImFkZCIsImFsdCIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==