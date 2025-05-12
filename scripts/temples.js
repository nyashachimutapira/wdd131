// JavaScript for Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Add this CSS rule dynamically for toggling the menu
document.head.insertAdjacentHTML(
  'beforeend',
  `<style>
     .nav-menu.show {
       display: flex !important;
     }
   </style>`
);

// Dynamic Year and Last Modified Date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;