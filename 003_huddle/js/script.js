'use strict';

const navBar = document.querySelector('#navBar'),
      sticky = document.querySelector('.sticky');

window.onscroll = function () {
  fixedNavBar();
}

function fixedNavBar() {
  if (window.pageYOffset > sticky) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
  }
}
