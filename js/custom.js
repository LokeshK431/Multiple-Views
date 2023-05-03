export function swiper(){
    const { default: Swiper } = require("swiper");
}

import {swiper} from '.js/custom.js';
import { Button } from 'bootstrap';
swiper.default();

function toggleDarkLight(){
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}

// Banner Slide

var swiper = new Swiper(".banner-slider", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
})

// Product Slider

var swiper = new Swiper(".product-slider", {
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

setTimeout(function() {
    document.getElementById('popup').style.display = 'block';
}, 10000);

setInterval(function() {
    var banners = document.querySelectorAll('.banner-slide');

    var activeIndex = 0;
    for (var i = 0; i < banners.length; i++) {
        if (banners[i].classList.contains('active')) {
            activeIndex = i;
            break;
        }
    }

    banners[activeIndex].classList.remove('active');

    var nextIndex = (activeIndex + 1) % banners.length;
    banners[nextIndex].classList.add('active');
}, 10000);

// Dark Mode
document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('nav-toggle').addEventListener('click', function() {
    var nav = document.querySelector('nav');

    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    }
    else {
        nav.style.display = 'block';
    }
});

// Placeholder Changes

document.ready (function() {
    var placeholder = ['Explore', 'the', 'variety', 'of', 'product', 'options'];
    var n=0;
    var looplength = placeholder.length;

    setInterval(function() {
        if (n<looplength){
            var newPlaceholder = placeholder[n];
            n++;
            'input'.attr('placeholder', newPlaceholder);
        }
        else {
            'input'.attr('placeholder',placeholder[0]);
            n = 0;
        }
        
    }, 1000);
});

// Guest Button

var guest_button = document.getElementById('guest_button');

guest_button.addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Import the swiper minified JS file

import Swiper from 'https://unpkg.com/swiper/swiper-bundle.min.js';

// Initialize swiper slider

const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },  
});