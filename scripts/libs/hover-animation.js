const logo = document.querySelector(".logo__link");
const Images = document.querySelectorAll(".scale-js");

logo.addEventListener("mouseover", function(event) {
  logo.classList.add('inview');
});
logo.addEventListener("mouseout", function(event) {
  logo.classList.remove('inview');
});
Images.forEach(function (element) {
  element.addEventListener("mouseover", function(event) {
    element.classList.add("inview");
  }),
  element.addEventListener("mouseout", function(event) {
    element.classList.remove("inview")
  })
});