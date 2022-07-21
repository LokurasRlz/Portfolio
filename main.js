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
    doesntExist.addEventListener('click', clickLinks);
  },

);

const projects = [
  {
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['html', 'bootstrap', 'Ruby'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn1',
    class: 'card2',
  },

  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['html', 'bootstrap', 'Ruby'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn2',
    class: 'card2',
  },

  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['html', 'bootstrap', 'Ruby'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn3',
    class: 'card2',
  },

  {
    name: 'Website Protfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['html', 'bootstrap', 'Ruby'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn4',
    class: 'card2',
  },

  {
    name: 'Profesional Art Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['html', 'bootstrap', 'Ruby'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn5',
    class: 'card2',
  },

  {
    name: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    image: './images/popup.png',
    technology: ['html', 'bootstrap', 'Ruby'],
    livelink: '#',
    sourcelink: '#',
    id: 'btn6',
    class: 'card2',
  },
];


const body = document.querySelector('body');

const cardDiv = document.createElement('ul');
cardDiv.classList.add('worksgrid');


const aboutMe = document.querySelector('.aboutMe');

body.insertBefore(cardDiv, aboutMe);

for (let i = 0; i < projects.length; i += 1) {
  const secondItem = document.createElement('div');
  secondItem.classList.add('workspage2');
  secondItem.classList.add(projects[i].class);
  cardDiv.appendChild(secondItem);

  secondItem.innerHTML = `
      <div class="descriptions">
      <div class="hidden">
      <h2 class="work-title">${projects[i].name}</h2>
      <p class="work-description">${projects[i].description}</p>
      <ul class="socials">
          <li class="boxes2">${projects[i].technology[0]}</li>
          <li class="boxes2">${projects[i].technology[1]}</li>
          <li class="boxes2">${projects[i].technology[2]}</li>
      </ul>
      
      </div>  
  </div>
`;
  const buttons = document.createElement('button');
  buttons.type = 'button';
  buttons.classList.add('buttons');
  buttons.textContent = 'See Project';
  secondItem.appendChild(buttons);
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

const form = document.querySelector('.actualForm');
const email = document.getElementById('mail');
const error = document.getElementById('error');

function validateEmail(event) {
  const message = [];
  event.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    error.style.display = 'block';
    message.push('Email must be in lowercase');
    error.innerText = message.join(', ');
  } else {
    form.submit();
  }
}

form.addEventListener('submit', validateEmail);