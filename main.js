// Toggable hamburger menu

const displayedMenu = document.querySelector('.displayedMenu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburgerToggle = document.querySelector('.hamburgerToggle');
const icon = document.querySelector('.icon');
const closeIcon = document.querySelector('.closeIcon');

function openMenuHam() {
  if (displayedMenu.classList.contains('openMenu')) {
    displayedMenu.classList.toggle('openMenu');
    closeIcon.style.display = 'none';
    icon.style.display = 'block';
  } else {
    displayedMenu.classList.toggle('openMenu');
    closeIcon.style.display = 'block';
    icon.style.display = 'none';
  }
}

function clickLinks() {
  displayedMenu.classList.remove('openMenu');
  closeIcon.style.display = 'none';
  icon.style.display = 'block';
}

hamburgerToggle.addEventListener('click', openMenuHam);
menuItems.forEach(
  (doesntExist) => {
    doesntExist.addEventListener('click', clickLinks)
  };
)