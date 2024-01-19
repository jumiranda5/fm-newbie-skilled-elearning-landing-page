'use-strict';

import LogoDark from '../assets/images/logo-dark.svg';
import LogoLight from '../assets/images/logo-light.svg';

import IconAnimation from '../assets/images/icon-animation.svg';
import IconBusiness from '../assets/images/icon-business.svg';
import IconCrypto from '../assets/images/icon-crypto.svg';
import IconDesign from '../assets/images/icon-design.svg';
import IconPhotography from '../assets/images/icon-photography.svg';

import HeroDeskPng from '../assets/images/image-hero-desktop.png';
import HeroDeskPng2x from '../assets/images/image-hero-desktop@2x.png';
import HeroDeskWebp from '../assets/images/image-hero-desktop.webp';
import HeroDeskWebp2x from '../assets/images/image-hero-desktop@2x.webp';
import HeroTabletPng from '../assets/images/image-hero-tablet.png';
import HeroTabletPng2x from '../assets/images/image-hero-tablet@2x.png';
import HeroTabletWebp from '../assets/images/image-hero-tablet.webp';
import HeroTabletWebp2x from '../assets/images/image-hero-tablet@2x.webp';
import HeroMobilePng from '../assets/images/image-hero-mobile.png';
import HeroMobilePng2x from '../assets/images/image-hero-mobile@2x.png';
import HeroMobileWebp from '../assets/images/image-hero-mobile.webp';
import HeroMobileWebp2x from '../assets/images/image-hero-mobile@2x.webp';

// Logo
document.getElementById('header-logo').src = LogoDark;
document.getElementById('footer-logo').src = LogoLight;

// Icons
document.getElementById('icon-animation').src = IconAnimation;
document.getElementById('icon-business').src = IconBusiness;
document.getElementById('icon-crypto').src = IconCrypto;
document.getElementById('icon-design').src = IconDesign;
document.getElementById('icon-photography').src = IconPhotography;

// Hero
const picture = document.getElementById('hero-img');
const srcDesk = document.createElement("source");
const srcTablet = document.createElement("source");
const srcMobile = document.createElement("source");
const img = document.createElement("img");

srcDesk.media = "(min-width: 1200px)";
srcDesk.srcset = `${HeroDeskWebp} 1x, ${HeroDeskPng} 1x, ${HeroDeskWebp2x} 2x, ${HeroDeskPng2x} 2x`;

srcTablet.media = "(min-width: 768px)";
srcTablet.srcset = `${HeroTabletWebp} 1x, ${HeroTabletPng} 1x, ${HeroTabletWebp2x} 2x, ${HeroTabletPng2x} 2x`;

srcMobile.srcset = `${HeroMobileWebp} 1x, ${HeroMobilePng} 1x, ${HeroMobileWebp2x} 2x, ${HeroMobilePng2x} 2x`;

img.src = HeroMobilePng;
img.classList.add('hero-img');
img.alt = "";

picture.appendChild(srcDesk);
picture.appendChild(srcTablet);
picture.appendChild(srcMobile);
picture.appendChild(img);




