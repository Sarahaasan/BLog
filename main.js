var backToTopButton = document.querySelector(".back-to-top");
// Listen for scroll event to show/hide the button
window.addEventListener("scroll", function () {
if (window.scrollY > 100) {
  backToTopButton.style.display = "block";
} else {
  backToTopButton.style.display = "none";
}
});

// Scroll smoothly to the top when button is clicked
backToTopButton.addEventListener("click", function () {
window.scrollTo({ top: 0, behavior: "smooth" });
});