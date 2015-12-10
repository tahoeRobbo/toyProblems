//Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
//
//Use the Parameter Testing feature in the box below to test your code with different arguments.

var letterChanges = function(str) {
	var newStr = [];
	for(var i = 0; i < str.length; i++) {
		newStr.push(String.fromCharCode(str.charCodeAt(0)+ 1));
	}
	console.log(newStr);
	return newStr;
};

letterChanges('dog');

var letterChanges2 = function(str) {
	 str = str.replace(/[a-z]/gi, function(char){
		 char = String.fromCharCode(char.charCodeAt(0) + 1);
		 if(char === '[' || char === '{') { char = 'a'}
			if(/[aeiou]/.test(char)) char = char.toUpperCase()
		return char;
	});
	console.log(str);
};

letterChanges2('dog');


//best
var letterChanges3 = function(str) {
	var newStr = str.replace(/[a-z]/gi, function(char){
		char = String.fromCharCode(char.charCodeAt(0) + 1);
		if(char === "[" || char === '{') {char = 'a'};
		if(/[aeiou]/.test(char)) {char = char.toUpperCase();}
		return char;
	});
		console.log(newStr)
	return newStr;
};

letterChanges3('tits');