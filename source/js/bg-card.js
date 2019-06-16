var card = document.querySelector(".catalog__item--cart");
var hare = document.querySelector(".catalog__item--hare");
var big = document.querySelector(".catalog__item--big-hare");

card.addEventListener("mouseenter", function(evt) {
  card.classList.add("catalog__item--hover");
})

card.addEventListener("mouseleave", function(evt) {
  card.classList.remove("catalog__item--hover");
  card.classList.remove("catalog__item--active");
})

card.addEventListener("mousedown", function(evt) {
  card.classList.toggle("catalog__item--active");
  card.classList.toggle("catalog__item--hover");
})

card.addEventListener("mouseup", function(evt) {
  card.classList.remove("catalog__item--active");
  card.classList.add("catalog__item--hover");
})

hare.addEventListener("mouseenter", function(evt) {
  hare.classList.add("catalog__item--hover");
})

hare.addEventListener("mouseleave", function(evt) {
  hare.classList.remove("catalog__item--hover");
  hare.classList.remove("catalog__item--active");
})

hare.addEventListener("mousedown", function(evt) {
  hare.classList.toggle("catalog__item--active");
  hare.classList.toggle("catalog__item--hover");
})

hare.addEventListener("mouseup", function(evt) {
  hare.classList.remove("catalog__item--active");
  hare.classList.add("catalog__item--hover");
})

big.addEventListener("mouseenter", function(evt) {
  big.classList.add("catalog__item--hover");
})

big.addEventListener("mouseleave", function(evt) {
  big.classList.remove("catalog__item--hover");
  big.classList.remove("catalog__item--active");
})

big.addEventListener("mousedown", function(evt) {
  big.classList.toggle("catalog__item--active");
  big.classList.toggle("catalog__item--hover");
})

big.addEventListener("mouseup", function(evt) {
  big.classList.remove("catalog__item--active");
  big.classList.add("catalog__item--hover");
})
