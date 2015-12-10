//Using the JavaScript language, have the function LetterCount(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

//same as easy?

function LetterCount(str){
	var mostRep = '';
	var count = 0;
	
	var splitStr = str.split(' ');
	
	for(var i = 0; i < splitStr.length; i++){
		var currentWord = splitStr[i];
		var currentCount = 1;
		
		for(var j = 0; j < currentWord.length; j++){
			for(var k = j + 1; k < currentWord.length; k++){
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
	
	if(count === 1) {
		return -1;
	}
	
	return mostRep;
}

LetterCount("Hello Apple Pie");

// it was the same... easy points!!