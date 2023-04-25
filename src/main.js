console.clear();

// Executes code only once ever 500ms to increase performance
setTimeout(() => {
  window.onscroll = function () {
    fnScrollProgress();
    fnActiveSection();
  };
}, 500);

// Updates the progress bar as the user scrolls
function fnScrollProgress() {
  const sectionScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (sectionScroll / height) * 100;
  document.getElementById("scrollProgress").style.width = scrolled + "%";
}

// Adds .active class to the current div and updates the nav
function fnActiveSection() {
  const navSections = document.querySelectorAll(".jumpy-links>section");
  const currentScrollPos =
    document.documentElement.scrollTop || document.body.scrollTop;

  navSections.forEach((elem, i) => {
    const elemOffset = elem.offsetTop; // Distance from element's top to body's top
    const elemHeight = elem.offsetHeight; // Elements height
    const elemOffsetEnd = elemOffset + elemHeight; // Elements top distance + height to calculate the end

    if (currentScrollPos > elemOffset && currentScrollPos < elemOffsetEnd) {
      const elemTitle = elem.querySelector("h2").textContent;
      document.getElementById("currentSection").innerHTML = elemTitle;
    }
  });
}

function fnToggleNav() {
  const navButton = document.getElementById("showNav");
  const hiddenNav = document.getElementById("hiddenNav");

  navButton.onclick = function () {
    if (!hiddenNav.classList.contains("show")) {
      hiddenNav.classList.add("show");
      hiddenNav.setAttribute("aria-expanded", "true");
      navButton.innerHTML = "Hide";
    } else {
      hiddenNav.classList.remove("show");
      hiddenNav.setAttribute("aria-expanded", "false");
      navButton.innerHTML = "Show";
    }
  };
}
fnToggleNav();

const allSections = document.querySelectorAll("section");

allSections.forEach((section, i) => {
  section.style.backgroundImage =
    "url(https://source.unsplash.com/random/?landscape," + Math.random() + ")";
});
