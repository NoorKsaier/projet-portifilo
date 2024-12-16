const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bag');

menuIcon.addEventListener('click', () => {
    // Bascule la classe de l'icône
    menuIcon.classList.toggle('bx-x');
    // Active ou désactive la classe de la navbar
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});
// Sélectionner l'élément Réalisations
const dropdownTrigger = document.querySelector('.dropdown-trigger');


