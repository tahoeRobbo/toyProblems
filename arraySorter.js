//write a function that takes in an array of random numbers, orders from low to high


//NEITHER WORK
var arraySorter = function(arr) {
	var roughSorted = [];
	var sorted = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i].length === 1) { roughSorted.unshift(arr[i])};
		if(arr[i].length > 1) {}
	}
};

var arraySorter2 = function(arr) {
	var newArr = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] > arr[i + i]) {
			
		}
	}
};

function arraySorter3 (arr) {
	return arr.sort(function(a, b){return a - b;});
}

let arraySorter4 = (arr) =>
	arr.sort((a,b) => a-b);
