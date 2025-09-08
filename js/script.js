// -- Mobile Menu
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const icon = toggle.querySelector("i");

// Toggle menu open/close
toggle.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent event bubbling
  menu.classList.toggle('show');

  if (menu.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// Close menu when a link is clicked
const menuLinks = menu.querySelectorAll("a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (menu.classList.contains("show") && !menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("show");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});


//year
const date = new Date();
const year = date.getFullYear();
document.getElementById('year').innerHTML = `${year}`;
