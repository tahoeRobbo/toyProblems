module.exports = function(str) {
	return /^[aeiou0-9]/.test(str);
};

//tried with i at end of regex, raised error on AAA, though 
//question does not specify lowercase only..?