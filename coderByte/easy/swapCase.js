//Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. 
//NOT WORKING
function swapCase(str) {
	var newStr = str.replace(/[A-z]/g, function(char) {
		if(/[A-Z]/.test(char)) {
			char = char.toLowerCase();
		}
		else if(/[a-z]/.test(char)) {
			char = char.toUpperCase();
		}
		return char;
	});
	return newStr;
}
//WORKING
function SwapCase(str) {
	var newStr = '';
	for(var i = 0; i < str.length; i++) {
		if(/[A-Z]/.test(str[i])){
			newStr = newStr + str[i].toLowerCase();
		}
		else if(/[a-z]/.test(str[i])) {
			newStr = newStr + str[i].toUpperCase();
		}
		else {
			newStr = newStr + str[i];
		}
	}
	return newStr;
}

SwapCase('tits-ASS!!');

SwapCase('titsASS');
'test'.toUpperCase();


//Other Solutions


//from 	chrisgolex -- don't quite understand how the symbols pass through.  
//they respond to both str[i].toUC and .toLC -- that's why the
//else if is required.  if only a second if stmnt, will double
//the symbols.
function swapCase2 (str) {
	var newStr = '';
	for(var i = 0; i < str.length; i++) {
		if(str[i] === str[i].toUpperCase()) {
			newStr = newStr + str[i].toLowerCase();
		}
		else if(str[i] === str[i].toLowerCase()) {
			newStr = newStr + str[i].toUpperCase();
		}
	}
	return newStr;
}

swapCase2('tits-AASSS!!');