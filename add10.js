//write a function (add10) that takes in an array and adds
//10 to each number, then returns new array.  array
//may contain stringified nums

var add10 = function(numArray) {
	var added10 = [];
	for(var i = 0; i < numArray.length; i++) {
		added10.push(+numArray[i] + 10);
	}
	return added10;
};

var add10b = function(numArray) {
	var added10 = [];
	for(var i = 0; i < numArray.length; i++) {
		added10.push(Number(numArray[i]) + 10);
	}
	return added10;
};

var add10c = function(numArray) {
	var added10 = [];
	for(var i = 0; i < numArray.length; i++) {
		added10.push(parseInt(numArray[i]) + 10);
	}
	return added10;
};

var testArr = [1,2,'3',4,'5'];

var results =[];
results.push(add10(testArr));
results.push(add10b(testArr));
results.push(add10c(testArr));
results.unshift("**key** [11,12,13,14,15] for all");

console.log(results);