"use strict";function initAcc(e,t){document.addEventListener("click",(function(r){if(r.target.matches(e+" .accordion__btn"))if(r.target.parentElement.classList.contains("active"))r.target.parentElement.classList.remove("active");else{if(1==t){var c=document.querySelectorAll(e+" .accordion__item");Array.prototype.forEach.call(c,(function(e){e.classList.remove("active")}))}r.target.parentElement.classList.add("active")}}))}initAcc(".accordion.v1",!0);var burger=document.querySelector(".burger"),navLink=document.querySelector(".nav__link"),menu=document.querySelector(".nav"),body=document.querySelector("body");burger.addEventListener("click",(function(){burger.classList.toggle("burger--active"),menu.classList.toggle("is-visible")})),menu.addEventListener("click",(function(){console.log("asd"),burger.classList.remove("burger--active"),menu.classList.remove("is-visible")}));var swiper=new Swiper(".feedback__swiper",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:30,navigation:{nextEl:".feedback__swiper-btn-next",prevEl:".feedback__swiper-btn-prev"}});