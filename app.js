//select container
var container = document.querySelector("#container");
//create child div
//var square = document.createElement("div");

for (var i = 0; i < 256; i++) {
  var square = document.createElement("div");
  container.appendChild(square);
  square.classList.add("square");
}
