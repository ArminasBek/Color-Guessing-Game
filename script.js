var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");	
		if(this.textContent === "Easy"){
			numSquares = 3;
		} else {
			numSquares = 6;
		}
		reset();
	})
}

	for(var i = 0; i < squares.length; i++){
		//add initial colors to squares
		squares[i].style.background = colors[i];
		//ass click listeners to squares
		squares[i].addEventListener("click", function(){
	    	//grab color of clicked square
	    	var clickedColor = this.style.background;
	    	if (clickedColor === pickedColor){
	    		messageDisplay.textContent = "Correct!";
	    		resetButton.textContent = "Play Again?";
	    		changeColor(clickedColor);
	    		h1.style.background = clickedColor;
	    	} else {
	    		this.style.background = "#232323";
	    		messageDisplay.textContent = "Try again";
	    	}
		});
	};
	reset();
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from arr
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent="New Colors";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.background = "none";
		}
		
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

colorDisplay.textContent = pickedColor;

function changeColor(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
	//change each color to match given color
	squares[i].style.background = color;	
	}	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor())	
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}