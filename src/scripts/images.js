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
const picture = document.getElementById("hero-img");
const srcDeskWebp = document.createElement("source");
const srcDeskPng = document.createElement("source");
const srcTabletWebp = document.createElement("source");
const srcTabletPng = document.createElement("source");
const srcMobileWebp = document.createElement("source");
const srcMobilePng = document.createElement("source");
const img = document.createElement("img");

srcDeskWebp.media = "(min-width: 1200px)";
srcDeskWebp.srcset = `${HeroDeskWebp} 1x, ${HeroDeskWebp2x} 2x`;
srcDeskWebp.type = "image/webp";

srcDeskPng.media = "(min-width: 1200px)";
srcDeskPng.srcset = `${HeroDeskPng} 1x, ${HeroDeskPng2x} 2x`;
srcDeskPng.type = "image/png";

srcTabletWebp.media = "(min-width: 768px)";
srcTabletWebp.srcset = `${HeroTabletWebp} 1x, ${HeroTabletWebp2x} 2x,`;
srcTabletWebp.type = "image/webp";

srcTabletPng.media = "(min-width: 768px)";
srcTabletPng.srcset = `${HeroTabletPng} 1x, ${HeroTabletPng2x} 2x`;
srcTabletPng.type = "image/png";

srcMobileWebp.srcset = `${HeroMobileWebp} 1x, ${HeroMobileWebp2x} 2x`;
srcMobileWebp.type = "image/webp";

srcMobilePng.srcset = `${HeroMobilePng} 1x, ${HeroMobilePng2x} 2x`;
srcMobilePng.type = "image/png";

img.src = HeroMobilePng;
img.classList.add('hero-img');
img.alt = "";

picture.appendChild(srcDeskWebp);
picture.appendChild(srcDeskPng);
picture.appendChild(srcTabletWebp);
picture.appendChild(srcTabletPng);
picture.appendChild(srcMobileWebp);
picture.appendChild(srcMobilePng);
picture.appendChild(img);




