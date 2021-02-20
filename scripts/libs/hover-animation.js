const logo = document.querySelector(".logo__link");

logo.addEventListener("mouseover", function(event) {
  logo.classList.add('inview');
});
logo.addEventListener("mouseout", function(event) {
  logo.classList.remove('inview');
});