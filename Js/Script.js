// SWIPER
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 2500,
  // keyboard: true,
  effect: 'fade',
  autoplay: {
    disableOnInteraction: false,
    delay: 1000
  },
  pagination: {
    el: '.swiper-pagination',
    // clickable: true,
    dynamicBullets: true,
  },
  a11y: {
    enabled: true,
    slideLabelMessage: '{{index}}'
  },
});


// TABS

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tabs-nav__btn--active') });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// Accordion

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});

// burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll')
  })


menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active')

    menu.classList.remove('header__nav--active')

    document.body.classList.remove('stop-scroll')

  })
})

// search

let loupe = document.querySelector('.loupe')
let form = document.querySelector('.search-form')
let formSend = document.querySelector('.search-form__send')
let formClouse = document.querySelector('.search-form__close')

document.addEventListener('DOMContentLoaded', (e) => {
  loupe.addEventListener('click', (e) => {
    form.classList.add('search-form--active')
    loupe.classList.add('loupe--active')
  })

  formClouse.addEventListener('click', (e) => {
    form.classList.remove('search-form--active')
    loupe.classList.remove('loupe--active')
  })

  formSend.addEventListener('click', (e) => {
    alert('Сейчас найдём!')
  })
})


