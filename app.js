//select container
var container = document.querySelector("#container");
var clearBtn = document.querySelector("#clear");
//create child div
//var square = document.createElement("div");

//initiate grid
createGrid();

function createGrid() {
  for (var i = 0; i < 256; i++) {
    var square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");
  }
}

var squares = document.querySelectorAll(".square");
//add event listener to squares
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("mouseover", function() {
    this.style.background = "black";
  });
}

//clear canvas

function clearCanvas() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = "grey";
  }
}

clearBtn.addEventListener("click", function() {
  clearCanvas();
});
