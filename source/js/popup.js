var openpopup = document.querySelector(".product__order");
var wrapper = document.querySelector(".wrapper");

openpopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  wrapper.classList.add("wrapper--show");
})
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (wrapper.classList.contains("wrapper--show")) {
      evt.preventDefault();
      wrapper.classList.remove("wrapper--show");
    }
  }
})
