//Write a function that takes in a string and returns a string of letters 
// in alphabetical order
var alphabetSorter = function(str) {
	var lowerStr = str.toLowerCase();
	var res = [];
	for(var i = 0; i < lowerStr.length; i++) {
		res.push(lowerStr[i]);
	}
	return res.sort().join('');
};

//Test
var results = [];
results.push(alphabetSorter('ding dong Ditcher'));
results.push(alphabetSorter('I like to eat IcE cReAm'));
results.push(alphabetSorter('defcab'));
console.log(results);
						 
