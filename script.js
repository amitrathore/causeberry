document.documentElement.classList.add("js");

const header = document.querySelector(".site-header");

function syncHeader() {
  if (!header) return;
  header.toggleAttribute("data-scrolled", window.scrollY > 10);
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
