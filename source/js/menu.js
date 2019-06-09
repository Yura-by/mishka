var togglemenu = document.querySelector(".page-header__button");
var header = document.querySelector(".page-header");

header.classList.remove("page-header--nojs");
togglemenu.addEventListener("click", function(evt) {
  evt.preventDefault();
  header.classList.toggle("page-header--open");
  if (header.classList.contains("page-header--open")) {
    togglemenu.classList.remove("page-header__button--open");
    togglemenu.classList.add("page-header__button--close");
  } else {
    togglemenu.classList.remove("page-header__button--close");
    togglemenu.classList.add("page-header__button--open");
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (header.classList.contains("page-header--open")) {
      evt.preventDefault();
      togglemenu.classList.remove("page-header__button--close");
      togglemenu.classList.add("page-header__button--open");
      header.classList.remove("page-header--open");
    }
  }
})
