
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// DARK MODE
const themeButton = document.getElementById("darkModeToggle");
const themeIcon = document.getElementById("themeIcon");

themeButton?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  const isDark = document.documentElement.classList.contains("dark");

  if (themeIcon) {
    themeIcon.textContent = isDark ? "☀" : "☾";
  }

  themeButton.setAttribute("aria-pressed", String(isDark));
});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const formNotice = document.getElementById("formNotice");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name")?.value.trim() || "";

  if (formNotice) {
    formNotice.textContent =
      `Thank you, ${name}! Your message has been received.`;

    formNotice.classList.remove("hidden");
  }

  contactForm.reset();
});

// SCROLL PROGRESS
const updateScrollProgress = () => {
  const scrollable =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress =
    scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;

  const progressBar = document.getElementById("scrollProgress");

  if (progressBar) {
    progressBar.style.width = progress + "%";
  }
};

window.addEventListener("scroll", updateScrollProgress, {
  passive: true,
});

updateScrollProgress();

// GSAP ANIMATIONS

// 1. HERO TEXT ANIMATION
gsap.from(".hero-copy > *", {
  opacity: 0,
  y: 35,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out",
});

// 2. HERO VISUAL ANIMATION
gsap.from(".hero-visual", {
  opacity: 0,
  x: 40,
  duration: 1,
  delay: 0.3,
});

// 3. PROJECT CARDS AND GLASS PANELS ANIMATION
gsap.utils.toArray(".project-card, .glass-panel").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      once: true,
    },
    opacity: 0,
    y: 35,
    duration: 0.7,
  });
});
