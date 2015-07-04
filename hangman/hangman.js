var pickWord = function() {
	var words = ['snowboard', 'independence', 'kitty'];
		return words[(Math.floor(Math.random() * words.length))];
};

var setupAnswerArray = function(word) {
	var answerArray = [];
	for(var i = 0; i < word.length; i++) {
		answerArray[i] = ' _'
	}
	console.log(answerArray)
	return answerArray;
};

var showPlayerProgress = function(arr) {
	alert(arr);
};

var getGuess = function() {
	return prompt("Guess a letter, homebwah!");
};

var updateGameState = function(guess, word, ansArray) {
	var count = 0;
	for(var i = 0; i < word.length; i++) {
		if(guess === word[i]) {
			ansArray[i] = guess;
			count +=1;
		}
	}
	return count;
};

var showAnswerAndCongratulatePlayer = function(answerArray) {
	alert('Nailed it!! the answer was ' + answerArray.join('') + '!!');
};

// GAME CODE
var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while(remainingLetters > 0) {
	showPlayerProgress(answerArray);
	var guess = getGuess();
	if (guess === null) {
		break;
	} else if (guess.length !== 1) {
		alert("only one letter ya big silly goose");
	} else {
		var correctGuesses = updateGameState(guess, word, answerArray);
		remainingLetters -= correctGuesses;
	}
}

showAnswerAndCongratulatePlayer(answerArray);