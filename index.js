const nav = document.querySelector("nav");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
