//Using the JavaScript language, have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true. 


function PalindromeTwo(str) {
	var newStr = '';
	
	for(var i = 0; i < str.length; i++) {
		if(/[A-z]/.test(str[i])) {
			newStr = newStr + str[i];
		}
	}
	
	var lowerStr = newStr.toLowerCase();
	var revStr = newStr.split('').reverse().join('').toLowerCase();
	
	
	console.log(lowerStr, ' lowerStr', revStr, ' revStr');
	if(lowerStr === revStr) {
		return true;
	}
	
	return false;
	
}

PalindromeTwo("e, I vote more cars race Rome-to-Vienna");//false
PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna");//true

