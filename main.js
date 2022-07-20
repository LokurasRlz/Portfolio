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
hamburgerToggle.addEventListener('click',openMenuHam);
menuItems.forEach(
  (doesntExist)=> {
    doesntExist.addEventListener('click', clickLinks)
  },
)

const projects = [
  {
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['HTML', 'CSS'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn1',
    class: 'firstCard',
  },

  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn2',
    class: 'secondCard',
  },

  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn3',
    class: 'thirdCard',
  },

  {
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['HTML', 'CSS'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn4',
    class: 'fourthCard',
  },

  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn5',
    class: 'fifthCard',
  },

  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn6',
    class: 'sixthCard',
  },
];


const body = document.querySelector('body');

const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

for (let i = 0; i < projects.length; i += 1) {
  const secondItem = document.createElement('div');
  secondItem.classList.add('secondItem');
  secondItem.classList.add(projects[i].class);
  cardDiv.appendChild(secondItem);

  
  const regButton = document.createElement('button');
  regButton.type = 'button';
  
}

document.querySelectorAll('.secondItem').forEach((item) => {
  item.addEventListener('mouseenter', (e) => {
    e.target.lastChild.classList.add('hiddenButton');
  });

  item.addEventListener('mouseleave', (e) => {
    e.target.lastChild.classList.remove('hiddenButton');
  });
});

const open = document.querySelectorAll('.buttons');
for (let i = 0; i < projects.length; i += 1) {
  open[i].addEventListener('click', () => {
    const popup = document.createElement('div');
    popup.className = 'popupDesktop';
    popup.innerHTML = `
      <div class="popup">
      <div class="popupIntro">
        <h2 class="popupName">${projects[i].name}</h2>
        <button class="popupClose">&times;</button>
      </div>
        <ul class="popupButtons">
          <li class="listItemPopup">${projects[i].technology[0]}</li>
          <li class="listItemPopup">${projects[i].technology[1]}</li>
          <li class="listItemPopup">${projects[i].technology[2]}</li>
        </ul>
      <div class="flexPop">
      <img src=${projects[i].image} class="popupImg">
      <p class="popupDescription">${projects[i].description}</p>
      <div class="popupSources">
        <button class="popupLive"><a href="${projects[i].livelink}">See Live</a><img src="./images/Live.png" alt=""></button>
        <button class="popupSource"><a href="${projects[i].livelink}">See Source</a><img src="./images/GitHub-popup.png" alt=""></button>
      </div>
      </div>
    </div>
    <div id="blurry"></div>
      `;

    body.appendChild(popup);

    const close = document.querySelector('.popupClose');
    close.addEventListener('click', () => {
      body.removeChild(popup);
    });
  });
}
