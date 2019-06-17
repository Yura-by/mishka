var openpopupone = document.querySelector(".catalog__basket--one");
var openpopuptwo = document.querySelector(".catalog__basket--two");
var openpopupthree = document.querySelector(".catalog__basket--three");
var popup = document.querySelector(".wrapper");

openpopupone.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("wrapper--show");
})

openpopuptwo.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("wrapper--show");
})

openpopupthree.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("wrapper--show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("wrapper--show")) {
      evt.preventDefault();
      popup.classList.remove("wrapper--show");
    }
  }
})
