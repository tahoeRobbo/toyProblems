//Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 


//is super inefficient O(n3) but best I could come up with... hmmmmm
//THERES GOT TO BE A BETTER WAY!!
function LetterCountI(str) {
	var mostRep = '';
	
	var splitStr = str.split(' ');
	var count = 0;
	
	for(var i = 0; i < splitStr.length; i++){
		var currentCount = 1;
		var currentWord = splitStr[i];
		for(var j = 0; j < currentWord.length; j++) {
			for(var k = j+1; k < currentWord.length; k++){
				if(splitStr[i][j] === splitStr[i][k]){
					currentCount +=1;
				}
			}
			if(currentCount > count) {
				mostRep = splitStr[i];
				count = currentCount;
			}
		}
	}
	if(count <= 1) {
		return -1;
	}
	return mostRep;
	
}
LetterCountI("Hello apple pie");

LetterCountI("Today, is the greatest day ever!");

//All outputs correct (even though the try took 59 minutes....... :/)







//secondTime

function LetterCountI(str) {
	var mostRep = '';
	var count = 0;
	
	var splitStr = str.split(' ');
	
	for(var i = 0; i < splitStr.length; i++){
		var currentWord = splitStr[i];
		var currentCount = 1;
		
		for(var j = 0; j < currentWord.length; j++) {
			for(var k = j+1; k < currentWord.length; k++) {
				if(currentWord[j] === currentWord[k]){
					currentCount +=1;
				}
			}
			if(currentCount > count) {
				mostRep = currentWord;
				count = currentCount;
			}
		}
	}
	
	if(count <= 1) {
		return -1;
	}
	
	return mostRep;
}

//nailed it >^.^<































