//You must check if some ticket numbers are valid. To be valid, a ticket number must :
//
//Contain exactly 6 characters
//Contain : one letter then one digit then 4 letters
//'letter' means a single character, unaccented, uppercase or lowercase, between a and z.
//
//Input arguments
//
//tickets : an array of string, representing ticket numbers
//Return value
//
//An integer representing the number of valid passwords.

//revised solution
const nbrValidTickets = (tickets) =>
	tickets.filter((val) => (/^[a-z][\d][a-z]{4}$/ig.test(val))).length;

//first solution
const nbrValidTickets = function(tickets){
	let count = 0;
	for(let i = 0, len = tickets.length; i < len; i++){
		if(/^[a-z][\d][a-z]{4}$/ig.test(tickets[i])){
			count += 1;
		}
	}
	return count;
};

//some cool solutions -- a lot of variation on this one;

//this one was on top -- really like the use of filter
//--filters the array based on the regex, returns length of filtered 
//array;

function nbrValidTickets(tickets){
  var pReg = /^[a-z]\d[a-z]{4}$/i;
  return tickets.filter((val) => pReg.test(val)).length;
}
