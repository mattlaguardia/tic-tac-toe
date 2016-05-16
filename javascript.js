// var scoreboardPlayer1 = document.getElementById("player1");
// var scoreboardPlayer2 = document.getElementById("player2");
// var newBoard = document.querySelectorAll("td");
function resetBoard(number) {
	document.getElementById("b" + number).textContent = "";
}

function startGame() {
	// declaring variable x 
	// telling someone to start
	for (var i = 1; i <= 9; i++) {
		resetBoard(i);
	};
	document.turn = "X"; 
		if (Math.random () < 0.5) {
			document.turn = "O";
		}
	document.winner = null;
	setMessage(document.turn + " gets to start");
	// document.getElementById("b" + number)
	document.addEventListener("click", function(e){
		console.log(e.detail++);
	},false);
	// document.addEventListener("click", resetBoard);
	//scoreboardPlayer1 = ;
	//scoreboardPlayer2 = ;
}

// Create a counter and have it count to 9 to say game is tied
var turns = 0;
function numberOfTurns() {
	turns += 1;
	document.querySelectorAll("td").innerText = turns;
	if (turns = 9){
		console.log("9 turns");
	}
	console.log(turns);
}
function setMessage(msg) {
	document.getElementById('messages').innerText = msg;
}
// possible change - take away box and add global event listener
// this would need to be an open funtion 
function nextMove(box) {
	if (document.winner != null) {
		setMessage("Game Over");
	} else if (box.innerText == ""){	
	box.innerText = document.turn;
	switchTurn();
	} else {
		setMessage("YOU CAN'T MOVE THERE!");
	}
}

function switchTurn() {
	if (checkForWinner(document.turn)) {
		setMessage("Winner is " + document.turn);
		document.winner = document.turn;
	} else if (document.turn == 'X') {
		document.turn = 'O';
		setMessage("It's " + document.turn + " turn!");
	} else {
		document.turn = 'X';
		setMessage("It's " + document.turn + " turn!");
	} 
}

function checkForWinner(move) {
	var result = false;
	if (checkRow(1, 2, 3, move) || 
		checkRow(4, 5, 6, move) || 
		checkRow(7, 8, 9, move) ||
		checkRow(1, 4, 7, move) ||
		checkRow(2, 5, 8, move) ||
		checkRow(3, 6, 9, move) ||
		checkRow(1, 5, 9, move) ||
		checkRow(3, 5, 7, move)){
		result = true;
	} 
	return result; 
}

// checks four parameters bc looking for r in a row in first row
function checkRow(a, b, c, move) {
	var result = false; // declaring a variable here only lasts here
	if (getBoxData(a) == move && getBoxData(b) == move && getBoxData(c) == move) {
		result = true;
	}
	return result;
}


function getBoxData(number) {
	return document.getElementById("b" + number).innerText;
	// refreshes the page -- document.location.reload(true);
	// document.querySelectorAll('box').innerHTML = "";
}

// function resetBoard(number) {
// 	document.getElementById("b" + number).textContent = "";
// }

// NOTES FOR RESETING THE BOARD
// document.querySelectorAll("#b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8, #b9").textContent="";
// boxes.textContent = ""
// function resettingBoard (a,b,c){
// 	var result = false; 
// }
// function resetBoard () {
// 	console.log("hey this still works");
// 	var result = false;
// 		if (checkRow(1, 2, 3, move) || 
// 		checkRow(4, 5, 6, move) || 
// 		checkRow(7, 8, 9, move) ||
// 		checkRow(1, 4, 7, move) ||
// 		checkRow(2, 5, 8, move) ||
// 		checkRow(3, 6, 9, move) ||
// 		checkRow(1, 5, 9, move) ||
// 		checkRow(3, 5, 7, move)) {
// 		result = true;
// 	}
	// this.textContent = "";
	// refreshes the page -- document.location.reload(true);
	// document.querySelectorAll('box').innerHTML = "";






// function nextMove(){
// 	document.getElementByClassName('div.tic-tac-toe td')
// 	selectingBox.innerText = document.turn;
// };


// var selectingBox = document.querySelectorAll('div.tic-tac-toe td');
//selectingBox.addEventListener('click', nextMove);

//var selectorFunction = document.getElementById('box');
// var index = 0
// for (index = 0; index < selectorFunction.length; index++) {
//	selectorFunction[index].addEventListener('click', changeTo);
//}
//selectorFunction.addEventListener('click', changeTo);

// changing text to X or Y
// function changeTo() {
//	selectorFunction.innerHTML = "X";
// }