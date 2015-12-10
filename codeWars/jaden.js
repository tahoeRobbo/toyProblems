//Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he used to deliver via Twitter (Formerly at https://twitter.com/officialjaden). When writing on Twitter, he was known for almost always capitalizing every word.
//
//Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
//
//Example:
//
//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

function jadenCase(str){
	var jadenCased = '';
	
	jadenCased += str[0].toUpperCase();
	for(var i = 1; i < str.length; i++){
		if(str[i-1] === ' ' && /[a-z]/.test(str[i])){
			jadenCased += str[i].toUpperCase();
		} else {
			jadenCased += str[i];
		}
	}
	
	return jadenCased;



}

jadenCase("How can mirrors be real if our eyes aren't real");

//solution 2 -- using regEx

String.prototype.toJadenCase = function(){
	return this.replace(/(^|\s)[a-z]/g, function(x){return x.toUpperCase();});
};

//solution 3 -- using map -- voted best solution

String.prototype.toJadenCase = function() {
	return this.split(' ').map(function(word){
		return word[0].toUpperCase() + word.slice(1);
	}).join(' ');
};