window.addEventListener('scroll', () => {
  updateScrollProgress();
  activeSection();
});

// Updates the progress bar as the user scrolls
function updateScrollProgress() {
  const sectionScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (sectionScroll / height) * 100;
	
  document.getElementById('scrollProgress').style.width = scrolled + '%';
}

// Updates the navigation relative to current section
function activeSection() {
  const navSections = document.querySelectorAll('.jumpy-links>section');
  const currentScrollPos = document.documentElement.scrollTop || document.body.scrollTop;

  navSections.forEach((elem, i) => {
    const elemOffset = elem.offsetTop; // Distance from element's top to body's top
    const elemHeight = elem.offsetHeight; // Elements height
    const elemOffsetEnd = elemOffset + elemHeight; // Elements top distance + height to calculate the end

    if (currentScrollPos > elemOffset && currentScrollPos < elemOffsetEnd) {
      const elemTitle = elem.querySelector('h2').textContent;
      document.getElementById('currentSection').innerHTML = elemTitle;
    }
  });
}

// Simple nav toggle with aria attribute
const navButton = document.getElementById('showNav');
const hiddenNav = document.getElementById('hiddenNav');

navButton.addEventListener('click', () => {
  if (!hiddenNav.classList.contains('show')) {
    hiddenNav.classList.add('show');
    hiddenNav.setAttribute('aria-expanded', 'true');
    navButton.innerHTML = 'Hide';
  } else {
    hiddenNav.classList.remove('show');
    hiddenNav.setAttribute('aria-expanded', 'false');
    navButton.innerHTML = 'Show';
  }
});

// Adds background images supplied by unsplash to all section
const allSections = document.querySelectorAll('section');

allSections.forEach((section, i) => {
  section.style.backgroundImage = 'url(https://source.unsplash.com/random/?landscape,' + Math.random() + ')';
});
