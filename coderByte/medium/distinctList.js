//Using the JavaScript language, have the function DistinctList(arr) take the array of numbers stored in arr and determine the total number of duplicate entries. For example if the input is [1, 2, 2, 2, 3] then your program should output 2 because there are two duplicates of one of the elements. 

function DistinctList(arr) {
	var overflow = [];
	var unique = [];
	
	for(var i = 0; i < arr.length; i++){
		if(unique.indexOf(arr[i]) === -1) {
			unique.push(arr[i]);
		}
		else {overflow.push(arr[i]);}
	}
	return overflow.length;
}

DistinctList([1, 2, 2, 2, 3]);//2