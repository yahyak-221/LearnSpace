AOS.init();

// Scroll Indicator
const scrollIndicator = document.getElementById("scroll-indicator");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  if (scrollIndicator) scrollIndicator.style.width = scrollPercent + "%";
});

// Mobile Nav + Hamburger Toggle
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
let isOpen = false;

if (btn) {
  btn.addEventListener("click", () => {
    isOpen = !isOpen;
    menu.classList.toggle("-translate-y-full");
    menu.classList.toggle("translate-y-0");
    menu.classList.toggle("opacity-0");
    menu.classList.toggle("opacity-100");
    menu.classList.toggle("pointer-events-none");
    bar1.classList.toggle("rotate-45");
    bar1.classList.toggle("translate-y-2");
    bar2.classList.toggle("opacity-0");
    bar3.classList.toggle("-rotate-45");
    bar3.classList.toggle("-translate-y-2");
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetEl = document.querySelector(this.getAttribute("href"));
    if (targetEl) {
      window.scrollTo({ top: targetEl.offsetTop - 60, behavior: "smooth" });
      if (isOpen) {
        menu.classList.add("-translate-y-full");
        menu.classList.remove("translate-y-0", "opacity-100");
        menu.classList.add("opacity-0", "pointer-events-none");
        bar1.classList.remove("rotate-45", "translate-y-2");
        bar2.classList.remove("opacity-0");
        bar3.classList.remove("-rotate-45", "-translate-y-2");
        isOpen = false;
      }
    }
  });
});

// Carousel
function showSlide(index) {
  const carousel = document.getElementById("carousel");
  const slideWidth = carousel.offsetWidth;
  carousel.style.transform = `translateX(-${index * slideWidth}px)`;

  const buttons = document.querySelectorAll("#testimonials button");
  buttons.forEach((btn, i) => {
    btn.classList.toggle("bg-blue-400", i === index);
    btn.classList.toggle("bg-gray-300", i !== index);
  });
}
