//select container
var container = document.querySelector("#container");
var clearBtn = document.querySelector("#clear");
var newBtn = document.querySelector("#new");
//create child div
//var square = document.createElement("div");

//get css variables
let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
let squareH = parseInt(htmlStyles.getPropertyValue("--squareH"));
let squareW = parseInt(htmlStyles.getPropertyValue("--squareW"));
//set style variables
//document.documentElement.style.setProperty("--rowNum", 6);

//initiate grid
createGrid(16);

function createGrid(width) {
  //var width = Number(prompt("Canvas Width?"));
  document.documentElement.style.setProperty("--rowNum", width);
  document.documentElement.style.setProperty("--colNum", width);
  document.documentElement.style.setProperty("--squareH", 900 / width);
  document.documentElement.style.setProperty("--squareW", 900 / width);
  for (var i = 0; i < width * width; i++) {
    var square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");
  }
}
//mouseover effect
var squares = document.querySelectorAll(".square");

//new canvas
newBtn.addEventListener("click", function() {
  clearCanvas();
  var width = parseInt(htmlStyles.getPropertyValue("--rowNum"));
  for (var i = 0; i < width * width; i++) {
    container.removeChild(squares[i]);
  }
  createGrid(Number(prompt("Canvas Width?")));

  squares = document.querySelectorAll(".square");

  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", function() {
      this.style.background = "black";
    });
  }
});

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
