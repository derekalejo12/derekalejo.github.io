const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
});

function myFunction(x) {
  if (!x.matches) {
    // If media query matches

    navlinks.classList.remove("open");
  }
}

var x = window.matchMedia("(max-width: 768px)");
myFunction(x); // Call listener function at run time
x.addEventListener("change", myFunction); // Attach listener function on state changes
