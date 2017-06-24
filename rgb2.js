var colors = generateColors(mode);
var grid = document.querySelectorAll(".squares");
var pickedColor = getRandIndex();
var colorDisplay = document.getElementById("colorDisplay");
var statDisplay = document.querySelector("#status");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var medBtn = document.querySelector("#medBtn");
var hardBtn = document.querySelector("#hardBtn");
var row1 = document.querySelector("#row1");
var row2 = document.querySelector("#row2");
var row3 = document.querySelector("#row3");
var mode = 0, notWon = true;

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function() { onClick("easyBtn"); });
medBtn.addEventListener("click", function() { onClick("medBtn"); });
hardBtn.addEventListener("click", function() { onClick("hardBtn"); });

resetButton.addEventListener("click", function() {
  resetPage();
  colors = generateColors(mode);
  pickedColor = getRandIndex();
  initPage(mode/3);
  colorDisplay.textContent = pickedColor;
});

function onClick(button) {
  if (notWon) {
    resetPage();
    if (button === "easyBtn") {
      mode = 3;
      easyBtn.classList.add("selected");
    } else if (button === "medBtn") {
      mode = 6;
      medBtn.classList.add("selected");
    } else if (button === "hardBtn") {
      mode = 9;
      hardBtn.classList.add("selected");
    }
    colors = generateColors(mode);
    pickedColor = getRandIndex();
    initPage(mode/3);
    colorDisplay.textContent = pickedColor;
  }
}

function resetPage() {
  notWon = true;
  statDisplay.textContent = "";
  resetButton.textContent = "New colors";
  hardBtn.classList.remove("selected");
  medBtn.classList.remove("selected");
  easyBtn.classList.remove("selected");
  row1.style.display = "none";
  row2.style.display = "none";
  row3.style.display = "none";
}

function initPage(rows) {
  if (notWon) {
    resetButton.textContent = "New colors";
    for(var i=0; i<mode; i++) {
      grid[i].style.backgroundColor = colors[i];
      grid[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
          statDisplay.textContent = "Correct!";
          resetButton.textContent = "Play again?";
          changeColors(clickedColor);
          notWon = false;
        } else {
          this.style.backgroundColor = "#313946";
          statDisplay.textContent = "Try again";
        }
      })
    }
    show(rows);
  }
}

// Returns a random index in the array colors
function getRandIndex() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Returns array of random colors of size n 
function generateColors(n) {
  var arr = [];
  for (var i=0; i<n; i++) {
    arr[i] = generateRandColor();
  }
  return arr;
}

// Returns a random color in RGB format
function generateRandColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Updates the colors of elements in grid
function changeColors(color) {
  for (var i=0; i<grid.length; i++) {
    grid[i].style.backgroundColor = color;
  }
}

function show(rows) {
  switch (rows) {
    case 1: 
      row1.style.display = "block";
      row2.style.display = "none";
      row3.style.display = "none";
      break;
    case 2: 
      row1.style.display = "block";
      row2.style.display = "block";
      row3.style.display = "none";
      break;
    case 3: 
      row1.style.display = "block";
      row2.style.display = "block";
      row3.style.display = "block";
      break;
  }
}

resetPage();