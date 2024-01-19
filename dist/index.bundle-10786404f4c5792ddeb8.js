/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/images/logo-dark.svg
const logo_dark_namespaceObject = __webpack_require__.p + "images/logo-dark-bd6dbe3fb81a86888ece.svg";
;// CONCATENATED MODULE: ./src/assets/images/logo-light.svg
const logo_light_namespaceObject = __webpack_require__.p + "images/logo-light-9fb3a720f1b85b9ed999.svg";
;// CONCATENATED MODULE: ./src/assets/images/icon-animation.svg
const icon_animation_namespaceObject = __webpack_require__.p + "images/icon-animation-222979d47fd2dbbc9a21.svg";
;// CONCATENATED MODULE: ./src/assets/images/icon-business.svg
const icon_business_namespaceObject = __webpack_require__.p + "images/icon-business-e1585951503a38781a99.svg";
;// CONCATENATED MODULE: ./src/assets/images/icon-crypto.svg
const icon_crypto_namespaceObject = __webpack_require__.p + "images/icon-crypto-8d407fcff65885d92537.svg";
;// CONCATENATED MODULE: ./src/assets/images/icon-design.svg
const icon_design_namespaceObject = __webpack_require__.p + "images/icon-design-06f787d808ae5438fdfe.svg";
;// CONCATENATED MODULE: ./src/assets/images/icon-photography.svg
const icon_photography_namespaceObject = __webpack_require__.p + "images/icon-photography-eeaad81e7533c8103b72.svg";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-desktop.png
const image_hero_desktop_namespaceObject = __webpack_require__.p + "images/image-hero-desktop-2235554175e893e3e3d9.png";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-desktop@2x.png
const image_hero_desktop_2x_namespaceObject = __webpack_require__.p + "images/image-hero-desktop@2x-2ea1d7adfb90d05762ae.png";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-desktop.webp
const assets_images_image_hero_desktop_namespaceObject = __webpack_require__.p + "images/image-hero-desktop-445c23fac66355e67537.webp";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-desktop@2x.webp
const assets_images_image_hero_desktop_2x_namespaceObject = __webpack_require__.p + "images/image-hero-desktop@2x-b370b3bed79b5c2c6b70.webp";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-tablet.png
const image_hero_tablet_namespaceObject = __webpack_require__.p + "images/image-hero-tablet-2c3c361e9db37385043e.png";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-tablet@2x.png
const image_hero_tablet_2x_namespaceObject = __webpack_require__.p + "images/image-hero-tablet@2x-2556b19eae56e60dc36a.png";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-tablet.webp
const assets_images_image_hero_tablet_namespaceObject = __webpack_require__.p + "images/image-hero-tablet-d01a5c3ced332110d4aa.webp";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-tablet@2x.webp
const assets_images_image_hero_tablet_2x_namespaceObject = __webpack_require__.p + "images/image-hero-tablet@2x-0add5e1e70ecb443cfb6.webp";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-mobile.png
const image_hero_mobile_namespaceObject = __webpack_require__.p + "images/image-hero-mobile-c3ee55a8249e62c589ab.png";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-mobile@2x.png
const image_hero_mobile_2x_namespaceObject = __webpack_require__.p + "images/image-hero-mobile@2x-00689fa1acbcff3e7dd1.png";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-mobile.webp
const assets_images_image_hero_mobile_namespaceObject = __webpack_require__.p + "images/image-hero-mobile-48c4702609097717ebdd.webp";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-mobile@2x.webp
const assets_images_image_hero_mobile_2x_namespaceObject = __webpack_require__.p + "images/image-hero-mobile@2x-533219eeaa79f6cb1a00.webp";
;// CONCATENATED MODULE: ./src/scripts/images.js
'use-strict';





















// Logo
document.getElementById('header-logo').src = logo_dark_namespaceObject;
document.getElementById('footer-logo').src = logo_light_namespaceObject;

// Icons
document.getElementById('icon-animation').src = icon_animation_namespaceObject;
document.getElementById('icon-business').src = icon_business_namespaceObject;
document.getElementById('icon-crypto').src = icon_crypto_namespaceObject;
document.getElementById('icon-design').src = icon_design_namespaceObject;
document.getElementById('icon-photography').src = icon_photography_namespaceObject;

// Hero
const picture = document.getElementById('hero-img');
const srcDesk = document.createElement("source");
const srcTablet = document.createElement("source");
const srcMobile = document.createElement("source");
const img = document.createElement("img");
srcDesk.media = "(min-width: 1200px)";
srcDesk.srcset = `${assets_images_image_hero_desktop_namespaceObject} 1x, ${image_hero_desktop_namespaceObject} 1x, ${assets_images_image_hero_desktop_2x_namespaceObject} 2x, ${image_hero_desktop_2x_namespaceObject} 2x`;
srcTablet.media = "(min-width: 768px)";
srcTablet.srcset = `${assets_images_image_hero_tablet_namespaceObject} 1x, ${image_hero_tablet_namespaceObject} 1x, ${assets_images_image_hero_tablet_2x_namespaceObject} 2x, ${image_hero_tablet_2x_namespaceObject} 2x`;
srcMobile.srcset = `${assets_images_image_hero_mobile_namespaceObject} 1x, ${image_hero_mobile_namespaceObject} 1x, ${assets_images_image_hero_mobile_2x_namespaceObject} 2x, ${image_hero_mobile_2x_namespaceObject} 2x`;
img.src = image_hero_mobile_namespaceObject;
img.classList.add('hero-img');
img.alt = "";
picture.appendChild(srcDesk);
picture.appendChild(srcTablet);
picture.appendChild(srcMobile);
picture.appendChild(img);
;// CONCATENATED MODULE: ./src/main.js
'use-strict';



/******/ })()
;
//# sourceMappingURL=index.bundle-10786404f4c5792ddeb8.js.map