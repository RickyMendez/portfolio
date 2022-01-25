// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const btnLine = document.querySelectorAll('.btn-line');

// Set Initial State of Menu
let showMenu = false;
let isScrolled = false;
menuBtn.addEventListener('click', toggleMenu);
window.addEventListener("scroll", updateMenuLineColor);

function updateMenuLineColor(){
  if (!showMenu || !isScrolled){
    if (window.scrollY != 0){
      btnLine.forEach(item => item.classList.add('btn-line-scroll'));
      isScrolled = true;
    } else {
      btnLine.forEach(item => item.classList.remove('btn-line-scroll'));
      isScrolled = false;
    }
  }

  if (showMenu){
    btnLine.forEach(item => item.classList.remove('btn-line-scroll'));
  }
}

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');

    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
    updateMenuLineColor();
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');

    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
    updateMenuLineColor();
  }
}
