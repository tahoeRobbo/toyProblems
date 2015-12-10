//Given an array of numbers, find the largest pair sum in the array.
//
//For example
//
//[10,14,2,23,19] should return 42 (i.e. sum of 23,19)
//
//[99,2,2,23,19] should return 122 (i.e. sum of 99,23)
//
//Input array contains minimum two elements and every element is a number.

function largestSumOfTwo(arr){
	arr = arr.sort(function(a,b){return a - b;});

	
	return((arr[arr.length-1]) + (arr[arr.length-2]));

}

var negArr = [-10, -8, -16, -18, -19];
largestSumOfTwo(negArr);