//The goal of this exercise is to write a method that takes two strings as parameters and returns an integer n, where n is equal to the amount of spaces "rotated forward" the second string is relative to the first string (more precisely, to the first character of the first string).
//
//For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.
//
//If the second string isn't a valid rotation of the first string, the method returns -1.
//Examples:
//
//"coffee", "eecoff" => 2
//
//"eecoff", "coffee" => 4
//
//"moose", "Moose" => -1
//
//"isn't", "'tisn" => 2
//
//"Esham", "Esham" => 0
//
//"dog", "god" => -1

function shiftedDiff(str1, str2){
	var toTest = str2.indexOf(str1[0]);
	var new2 = str2.slice(toTest) + str2.slice(0, toTest);
	if(new2 === str1){
		return toTest;
	}
	return -1;
}

shiftedDiff('coffee', 'eecoff');
shiftedDiff('eecoff', 'coffee');
shiftedDiff("isn't", "'tisn")
shiftedDiff('dog', 'god');
shiftedDiff('moose', 'Moose');
shiftedDiff("Esham", "Esham");

//clever solution -- trying to figure out how it works
function shiftedDiff(first, second) {
  if (first.length != second.length) return -1;
	console.log(second + second);
  return (second + second).indexOf(first)
}

//aaaaahhhh that is really clever -- it doubles the length to create 
//a full version of the shifted word and finds the index of the 
//start of the word... friggin smart!

