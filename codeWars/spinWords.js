//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
//Examples:
//
//spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
//spinWords( "This is a test") => returns "This is a test" 
//spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str) {
	var words = str.split(' ');
	
	for(var i = 0; i < words.length; i++){
		if(words[i].length >= 5){
			words[i] = words[i].split('').reverse().join('');
		}
	}
	return words.join(' ');
}

//second solution using map

function spinWords(str){
	return str.split(' ').map(function(word){
		if(word.length >= 5){return word.split('').reverse().join('')}
		else{return word;}}).join(' ');
}


//prettier es6 solution using map -- best practice

function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}

//cool solution using regEx -- forgot how to check length. use{}

function spinWords(str) {
	return str.replace(/\w{5,}/g, function(word){
		return word.split('').reverse().join('');
	});
}
var test = "hey fellow warriors";
spinWords(test);