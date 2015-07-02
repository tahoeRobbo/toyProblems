//Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. 



function VowelCount(str) { 
	var splitStr = str.toLowerCase().split('');
  	var count = 0;
  	for(var i = 0; i < splitStr.length; i++) {
      if(splitStr[i] === 'a' || splitStr[i] === 'e' || splitStr[i] === 'i' || splitStr[i] === 'o' || splitStr[i] === 'u') {
         count +=1;
         }
         }
         return count;
}

var results = [];
results.push(VowelCount('There are eight vowels'));
results.push(VowelCount('POOP STINKS FIVE'));

console.log(results);