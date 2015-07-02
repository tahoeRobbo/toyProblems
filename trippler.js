//write a functino that takes in an array and returns a new array with each of the numbers trippled

var trippler = function(arr) {
	var tripdArr = [];
	for(var i = 0; i < arr.length; i++) {
		tripdArr.push(arr[i] * 3);
	}
	return tripdArr;
};


arr1 = [1,2,3,4,5,6];
var test1 = trippler(arr1);
console.log(test1);

//using map
//map takes in an array, processes it and nondestructively returns a new array
//arr.map(callback[, thisArg])

var maptrip = arr1.map(function(num) {
	return num * 3;
});