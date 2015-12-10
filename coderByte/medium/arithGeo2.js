//Using the JavaScript language, have the function ArithGeoII(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

function ArithGeoII(arr) {
	
	var arithmetic = true;
	var geometric = true;
	
	for(var i = 1; i < arr.length; i++){
	if(arr[i] - arr[i - 1] !== arr[1] - arr[0]){
		arithmetic = false;
	}
	
	if(arr[i] / arr[i - 1] !== arr[1] / arr[0]){
		geometric = false;
	}
	}
	
	if(arithmetic){
		return "Arithmetic";
	}
	
	if(geometric){
		return "Geometric";
	}
	return -1;
}

ArithGeoII([1,2,3,4,5,10,20]);
ArithGeoII([2, 6, 18, 54]);
ArithGeoII([2, 4, 6, 8]);


//when only testing the first three outputs, these failed.
//added the loop through all, all passed.
//1. When the input was (1,2,3,4,5,10,20) your output was incorrect.
//2. When the input was (1,2,3,4,5,6,7,88,2) your output was incorrect.
//3. When the input was (10,110,210,310,410,511) your output was incorrect.