var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];
	//ass click listeners to squares
	squares[i].addEventListener("click", function(){
    	//grab color of clicked square
    	var clickedColor = this.style.background;
    	if (clickedColor === pickedColor){
    		messageDisplay.textContent = "Correct!"
    		changeColor(clickedColor);
    	} else {
    		this.style.background = "#232323";
    		messageDisplay.textContent = "Try again";
    	}
	});
};

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
	return "rgb(" + r + "," + g + "," + b + ")";
}