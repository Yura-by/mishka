var manuf = document.querySelector(".manufacturing");

manuf.addEventListener("mouseenter", function(evt) {
manuf.classList.add("manufacturing--hover");
})

manuf.addEventListener("mouseleave", function(evt) {
manuf.classList.remove("manufacturing--hover");
manuf.classList.remove("manufacturing--active");
})

manuf.addEventListener("mousedown", function(evt) {
manuf.classList.toggle("manufacturing--active");
manuf.classList.toggle("manufacturing--hover");
})

manuf.addEventListener("mouseup", function(evt) {
manuf.classList.remove("manufacturing--active");
manuf.classList.add("manufacturing--hover");
})
