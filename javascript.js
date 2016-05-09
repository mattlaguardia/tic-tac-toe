
// keeping track of turns 
function startGame() {
	// declaring variable x 
	document.turn = "X"; 
	// telling someone to start
	document.winner = null;
	setMessage(document.turn + " gets to start");
};

function setMessage(msg) {
	document.getElementById('messages').innerText = msg;
};
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
		checkRow(3, 5, 7, move)) {
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
}



/*
function nextMove(){
	document.getElementByClassName('div.tic-tac-toe td')
	selectingBox.innerText = document.turn;
};
*/

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