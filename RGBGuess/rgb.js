var size = 6;
var colors = [];
var pickedColor;
var circles = document.querySelectorAll(".circle");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// Initialises the page
function init(){
  setupButtons(); setupCircles(); reset();
}

// Adds click listeners to the buttons
function setupButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") size = 3;
      else (this.textContent === "Med") ? size = 6: size = 9;
      reset();
    });
  }
  resetButton.addEventListener("click", function(){ reset(); });
}

// Adds click listeners to circles
function setupCircles(){
  for(var i = 0; i < circles.length; i++){
    circles[i].addEventListener("click", function(){
      var clickedColor = this.style.background;
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
      } else {
        this.style.background = "#313946";
        messageDisplay.textContent = "Try Again"
      }
    });
  }
}

// Updates the grid with new colors
function reset(){
  colors = generateRandomColors(size);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  for(var i = 0; i < circles.length; i++){
    if(colors[i]){
      circles[i].style.display = "block"
      circles[i].style.background = colors[i];
    } else {
      circles[i].style.display = "none";
    }
  }
}

// Updates the colors of the circles
function changeColors(color){
  for(var i = 0; i < circles.length; i++){
    circles[i].style.background = color;
  }
}

// Returns a random index in the array colors
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Returns array of random colors of size n 
function generateRandomColors(n){
  var arr = [];
  for(var i = 0; i < n; i++){
    arr.push(randomColor())
  }
  return arr;
}

// Returns a string representation of a random color in RGB format
function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

init();
