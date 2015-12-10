//Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
//
//pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

function pigIt (str){
	var sentArr = str.split(' ');
	
	return sentArr.map(function(word){
		if(/\D/g.test(word)){
			 var pigged;
			var first = word.slice(0,1);
			pigged =  word.slice(1) + first + 'ay';
			return pigged;
			 }
		return word;
	}).join(' ');
}

var test = 'pig latin 420 is Cool';
pigIt(test);

//refactored

function pigIt(str){
	return str.split(' ').map(function(word){
		if(/\D/g.test(word)){
			 return word.slice(1) + word.slice(0,1) + 'ay';
			 }
		return word;
	});
}

//best, most clever solution. holy shit its beautiful

function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}