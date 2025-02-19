const listIcon = document.querySelector('[data-type="list"]');
const cardsIcon = document.querySelector('[data-type="cards"]');
const activeDiv = document.querySelector('.active');
const cardContainer = document.querySelector('.cards-container');

// Switch to Cards view
cardsIcon.addEventListener('click', function () {
  activeDiv.style.left = '9%';
  cardContainer.classList.remove('list-view');
  cardContainer.classList.add('grid-view');

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.boxShadow = '';
    card.style.textAlign = '';
    card.style.transformOrigin = '';
    card.style.borderBottom = '';
    card.style.borderRadius = '';
    card.style.maxWidth = '';
  });

  const cardImages = document.querySelectorAll('.card-img');
  cardImages.forEach(image => {
    image.style.display = 'block'; // Show images in grid view
  });
});

// Switch to List view
listIcon.addEventListener('click', function () {
  activeDiv.style.left = '56%';
  cardContainer.classList.remove('grid-view');
  cardContainer.classList.add('list-view');

  const cards = document.querySelectorAll('.card');
  const cardImages = document.querySelectorAll('.card-img');
  cards.forEach(card => {
    card.style.boxShadow = 'none';
    card.style.textAlign = 'left';
    card.style.transformOrigin = 'left';
    card.style.borderBottom = '2px solid #333';
    card.style.borderRadius = '0';
    card.style.maxWidth = '100%';
  });

  cardImages.forEach(image => {
    image.style.display = 'none'; // Hide images in list view
  });
});

// To adjust border-radius of project section on scroll
window.addEventListener('scroll', function () {
  const projectsSection = document.querySelector('.projects');
  const scrollY = window.scrollY;
  const maxScroll = 70;
  const newRadius = Math.max(0, 100 - (scrollY / maxScroll) * 20);

  // Update border radius
  projectsSection.style.borderTopLeftRadius = `${newRadius}px`;
  projectsSection.style.borderTopRightRadius = `${newRadius}px`;
});

// CARD CONTENT
async function fetchData() {
  const res = await fetch('../assets/data.json');
  const data = await res.json();
  data.forEach(data => {
    const titleString = data.name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const html = `
    <a href="../${data.id}-${titleString.join('-')}/">
      <div class="card">
        <div class="card-img">
          <img src="./assets/images/${data.id}.png" alt="${data.name}" />
        </div>
        <div class="card-info">
          <h3 class="card-title">${titleString.join(' ')}</h3>
        </div>
      </div>
    </a>
    `;

    cardContainer.insertAdjacentHTML('beforeend', html);
  });

  updateCardCount();
}

function updateCardCount() {
  // change the count of heading based on cards
  const heading = document.querySelector('.heading');
  const count = document.querySelectorAll('.card').length;
  const noun = count > 1 ? 'Projects' : 'Project';
  heading.textContent = `${noun} (${count})`;
}

fetchData();
