//In the function below, "person" will be passed in as an object that represents a person with properties such as name, age, gender, etc.
//Loop through all the properties of the object and set each value equal to "Unknown"
//For example, if "person" is {name: "Dolph L.", age: 33} then the function would return {name: "Unknown", age: "Unknown"}

var ruiner = function(person) {
	for(var key in person) {
		person[key] = 'Unknown';
	}
	return person;
};

var dummy = {
	name : 'dick',
	age : 69
};

var test = ruiner(dummy);
console.log(test);


//loop through object, test truthiness -- if not truthy, delete

function truthyObjLoop(user) {
	for(var key in user) {
      if(!user[key]) {
        delete user[key];
      }
    }
  	return user;
}

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
};
//NOT FINISHED
var splitTest = function(str) {
	if(str.toLowerCase().test(/x...o/ || /o...x/)) {return true;}
	return false;
};

splitTest('xkjjo');


//Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 









