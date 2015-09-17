//Given an array_of_ints, find the highest_product you can get from three of the integers.
//The input array_of_ints will always have at least three integers.


//initial solution -- doesn't account for two negs = pos
//also takes more time bc of sort
function highestProductOfThree(arr) {
	var sorted = arr.sort(function(a,b) {return a-b});
	
	var top3 = arr.splice(arr[arr.length-4], 3);
	console.log(top3, ' top3', arr, ' arr');
	
	var total = 1;
	for(var i = 0; i < top3.length; i++) {
		total = total * top3[i];
	}
	
	return total;
	
}

highestProductOfThree([1,2,3,4,5,6]);

//greedy try -- also accounts for negative numbers

//in order to account for negative numbers, must keep track
//of highest, lowest, highest of two, lowest of two, and highest of three;
//if a current negative * the lowest is greater than the highestOfThree 
//it's the new highest of three.


function hPT2(arr) {
	var highest;
	var lowest;
	var highestOfTwo;
	var lowestOfTwo;
	var highestOfThree;
	
	if(arr.length < 3) {
	 return "Must be longer than three numbers ya big dumb!"
	}
	
	//check between first two numbers, assign to highest or lowest
	if(arr[0] >= arr[1]){
		highest = arr[0];
		lowest = arr[1];
	}
	if(arr[1] >= arr[0]) {
		highest = arr[1];
		lowest = arr[0];
	}
	
	//initiate both hOTwo to first two numbers
	highestOfTwo = arr[0] * arr[1];
	lowestOfTwo = arr[0] * arr[1];
	highestOfThree = arr[0] * arr[1] * arr[2];
	
	
	//loop through the numbers once, check hOThree first,
	//checking against both hOTwo incase current number is neg
	
	//then check if current * high or low is new hOTwo
	
	//then check if current is new high or low single num
	for(var i = 2; i < arr.length; i++) {
		if(arr[i] * highestOfTwo > highestOfThree){
			highestOfThree = arr[i] * highestOfThree;
		}
		if(arr[i] * lowestOfTwo > highestOfThree) {
			highestOfThree = arr[i] * lowestOfTwo; 
		}
		
		if(arr[i] * highest > highestOfTwo){
			highestOfTwo = arr[i] * highest;
		}
		if(arr[i] * lowest > highestOfTwo) {
			highestOfTwo = arr[i] * lowest;
		}
		
		if(arr[i] * highest < lowestOfTwo) {
			lowestOfTwo = arr[i] * highest;
		}
		if(arr[i] * lowest < lowestOfTwo) {
			lowestOfTwo = arr[i] * lowest;
		}
		
		if(arr[i] > highest) {
			highest = arr[i];
		}
		if(arr[i] < lowest) {
			lowest = arr[i];
		}
		
	}
	
	return highestOfThree;
}

hPT2([1, 10, -5, 1, -100]);//5000
hPT2([1,2,3,4,5]);//120

//costs O(n) time and O(1) additional space
