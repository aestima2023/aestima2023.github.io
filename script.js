const header = document.querySelector("header");
const containerFluid = document.querySelector(
  "header .navbar.navbar-expand-lg"
);
let menuShow = false;

document.addEventListener("scroll", (e) => {
  if (document.scrollingElement.scrollTop < 200) {
    header.classList.remove("dark");
    return;
  }
  header.classList.add("dark");
});

const menuBtn = document.querySelector(".navbar-toggler");

menuBtn.addEventListener("click", () => {
  document.querySelector(".navbar-collapse.collapse").classList.toggle("show");
  menuBtn.classList.toggle("collapsed");
  menuBtn.setAttribute(
    "aria-expanded",
    menuBtn.classList.contains("collapsed") ? false : true
  );

  containerFluid.classList.toggle("show");

  menuShow = !menuShow;
});

document.addEventListener("click", (e) => {
  if (!menuShow) {
    return;
  }

  if (e.target.closest(".navbar")) {
    return;
  }

  document.querySelector(".navbar-collapse.collapse").classList.toggle("show");
  menuBtn.classList.toggle("collapsed");
  menuBtn.setAttribute(
    "aria-expanded",
    menuBtn.classList.contains("collapsed") ? false : true
  );

  containerFluid.classList.toggle("show");

  menuShow = !menuShow;
});
