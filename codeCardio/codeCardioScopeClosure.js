//Create a function called 'isTyler' that accepts a name as its only argument. If the argument you pass in is 'tyler', return true. If the argument is anything else, return false.

function isTyler (name) {
	if(name === 'tyler') {return true;}
	return false;
}

isTyler('robert');
isTyler('tyler');

// Create a function called "welcomeMessage" that takes in a 'name' parameter and returns a welcome message. For example, if the name to be passed in were "Ryan" the welcome message should read: "Hello Ryan, welcome to CodeCardio."

function welcomeMessage (name) {
	return "Hello " + name + ", welcome to CodeCardio";
}
welcomeMessage('rob');

// Create a function called "createName" that takes 'firstName' and 'lastName' and returns the two strings combined to create a person's full name.

function createName(first, last) {
	return first + ' ' + last;
}

createName('Dick', 'Nubbler');
//
//var sentence = "make me big!";  
//
//var makeBig = function(phrase) {
//	console.log(phrase.toUpperCase());
//}
//makeBig(sentence);

// Set the variable 'parameter' to a string of the variable name that is being used as a parameter. Set the variable 'argument' to a string of the variable name that is being used as an argument.  

var parameter;// parameter
var argument;// answer here
