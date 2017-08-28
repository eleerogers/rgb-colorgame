var colors = generateRandomColors(num);
var num = 6;
var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var newGame = document.querySelector("#newGame");
var modeBtns = document.querySelectorAll(".mode");


init();

function init(){
  modeBtnListeners();
  callNewGame();
};



function modeBtnListeners(){
for (var i = 0; i < modeBtns.length; i++) {
  modeBtns[i].addEventListener("click", function(){
    for (var i = 0; i < modeBtns.length; i++) {
    modeBtns[i].classList.remove("selected");
    };
    this.classList.add("selected");
    this.textContent === "Easy" ? num = 3: num = 6;
    callNewGame();
  })
};
}

newGame.addEventListener("click", function(){
  callNewGame();
  newGame.textContent = "New Colors";
});

function callNewGame(){
  colors = generateRandomColors(num);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {squares[i].style.display = "none";}

  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      newGame.textContent = "Play Again"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again!";
    }
  });
}}


function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

function changeColors(color){
  for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = color;
}};

function generateRandomColors(num){
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }
  return arr;
}

function randomColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return  "rgb(" + red + ", " + green + ", " + blue + ")"
};
