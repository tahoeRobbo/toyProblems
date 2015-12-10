//Using the JavaScript language, have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt". 

function CaesarCipher(str, num) {
	var res = '';
	

	
	for(var i = 0; i < str.length; i++) {
		if(/[A-z]/.test(str[i])){
			var temp = str.charCodeAt([i]) + num;
			console.log(temp, ' above if')
			if(/[9][1-7]/.test(temp) || temp >=123){
				temp = temp - 26;
			}
			console.log(temp, ' below if')
			
			res = res + String.fromCharCode(temp);
		}
		else {
			res = res + str[i];
		}
	}
	
	return res;
}

CaesarCipher('no change', 0);

//1. When the input was "no change" and 0 your output was incorrect.
//2. When the input was "byte-dash" and 0 your output was incorrect.
//whoops, should be [9][1-6] in the regEx within if, not [1-7]

function CaesarCipher(str, num) {
	var res = '';
	
	for(var i = 0; i < str.length; i++){
		if(/[A-z]/.test(str[i])){
			var temp = str.charCodeAt([i]) + num;
			
			if(/[9][1-6]/.test(temp) || temp >=123) {
				temp = temp - 26;
			}
			res = res + String.fromCharCode(temp);
		}
		else {
			res = res + str[i];
		}
	}
	return res;
}

//all tests correct >^.^<

