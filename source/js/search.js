var search = document.querySelector(".form-user__input");
var togglesearch = document.querySelector(".form-user__label");
var headerform = document.querySelector(".form-user");
var logo = document.querySelector(".page-header__top-wrap");
var nav = document.querySelector(".main-nav");

togglesearch.addEventListener("click", function() {
  search.classList.add("form-user__input--modify");
  logo.classList.add("page-header__top-wrap--modify");
  headerform.classList.add("page-header__form--modify");
  nav.classList.add("main-nav--modify");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (search.classList.contains("form-user__input--modify")) {
      evt.preventDefault();
      search.classList.remove("form-user__input--modify");
      logo.classList.remove("page-header__top-wrap--modify");
      headerform.classList.remove("page-header__form--modify");
      nav.classList.remove("main-nav--modify");
    }
  }
})
