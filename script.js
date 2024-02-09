const header = document.querySelector("header");

document.addEventListener("scroll", (e) => {
  if (document.scrollingElement.scrollTop < 200) {
    header.classList.remove("dark");
    return;
  }
  header.classList.add("dark");
});
