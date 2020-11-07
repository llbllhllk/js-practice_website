'use strict'

// Make the background color white when the navbar is fixed
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--white');
  } else {
    navbar.classList.remove('navbar--white');
  }
});