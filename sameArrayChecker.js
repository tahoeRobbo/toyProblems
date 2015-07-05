var sameArrayChecker = function(arr1, arr2) {
	if(arr1.length !== arr2.length) {
		return false;
	}
	
	if(arr1.length === arr2.length) {
		for(var i = 0; i < arr1.length; i++) {
			if(arr1[i] !== arr2[i]){
				return false;
			}
		}
		return true;
	}
};

var results = [];
results.push(sameArrayChecker([1,2,3], [4,5,6]));//false
results.push(sameArrayChecker([1,2,3], [1,2,3]));//true
results.push(sameArrayChecker([1,2,3], [1,2,3,4]));//false
results.unshift("**key** 1-false, 2-true, 3-false");

console.log(results);