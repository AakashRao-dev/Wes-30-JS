const listIcon = document.querySelector('[data-type="list"]');
const cardsIcon = document.querySelector('[data-type="cards"]');
const activeDiv = document.querySelector('.active');

// Toggle UI of categorize
listIcon.addEventListener('click', function () {
  activeDiv.style.left = '56%';
  // Change DOM for showing List view of Projects
});
cardsIcon.addEventListener('click', function () {
  activeDiv.style.left = '9%';
  // Change DOM for showing Cards view of Projects
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

// To change the count of heading based on cards
const heading = document.querySelector('.heading');
const count = document.querySelectorAll('.card').length;

if (count > 0) {
  const noun = count > 1 ? 'Projects' : 'Project';
  heading.textContent = `${noun} (${count})`;
}
