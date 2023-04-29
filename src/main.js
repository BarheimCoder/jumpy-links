window.addEventListener('scroll', () => {
  updateScrollProgress();
  // activeSection();
});

// Updates the progress bar as the user scrolls
function updateScrollProgress() {
  const wrapperOffset = document.querySelector('.jumpy-links').offsetTop; // 1914
  const wrapperHeight = document.querySelector('.jumpy-links').clientHeight; // 4839
  const currScroll = (document.body.scrollTop || document.documentElement.scrollTop) - wrapperOffset;
  const totalScroll = document.documentElement.scrollHeight - wrapperHeight;
  const pctScrolled = (currScroll / totalScroll) * 100;

  console.log(wrapperHeight + ' | ' + wrapperOffset + ' | ' + totalScroll);

  if (pctScrolled <= 100) {
    document.getElementById('scrollProgress').style.width = pctScrolled + '%';
  } else {
    document.getElementById('scrollProgress').style.width = '100%';
  }
}

// Updates the navigation relative to current section
const entries = document.querySelectorAll('.jumpy-links>section h2');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(
    (entry) => {
      if (entry.isIntersecting) {
        const elemTitle = entry.target.textContent;
        document.getElementById('currentSection').innerHTML = elemTitle;
      }
    },
    {
      threshold: 1,
    }
  );
});

entries.forEach((entry) => {
  observer.observe(entry);
});

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
