// Toggle Class Active
const navbartitle = document.querySelector(".navbar-title");
const hamMenu = document.querySelector("#ham-menu");

hamMenu.addEventListener("click", (e) => {
  e.preventDefault(); // cegah <a href="#"> balik ke atas
  navbartitle.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!hamMenu.contains(e.target) && !navbartitle.contains(e.target)) {
    navbartitle.classList.remove("active");
  }
});

// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");

function getThreshold() {
  if (window.innerWidth <= 450) {
    return 240; // HP
  } else if (window.innerWidth <= 768) {
    return 460; // Tablet
  } else {
    return 790; // Desktop
  }
}

function checkScroll() {
  const threshold = getThreshold();

  if (window.scrollY > threshold) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("fade");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("fade");
  }
}

checkScroll();
window.addEventListener("scroll", checkScroll);
window.addEventListener("resize", checkScroll);

//Fade in effect
const profiles = document.querySelectorAll(".gue, .intro, .box");

function isInView(element, offset = 150) {
  const rect = element.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return rect.bottom > 0 && rect.top < vh - offset;
}

function checkInView() {
  profiles.forEach((el) => {
    if (isInView(el)) {
      el.classList.add("isvisible");
    }
  });
}

// run on load, scroll, and resize
window.addEventListener("scroll", checkInView, { passive: true });
window.addEventListener("resize", checkInView);
window.addEventListener("load", checkInView);
document.addEventListener("DOMContentLoaded", checkInView);
