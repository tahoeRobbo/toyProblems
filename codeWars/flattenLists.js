//Flattening Lists
//
//In this Kata you will create a function that takes a list of lists as an input and returns a flat list.
//
//Example:
//
//flatten([[1,2],[3,4]]) == [1,2,3,4]
//flatten([[1],[2],[3],[4]]) == [1,2,3,4]

//this solution fully flattens a list -- problem written poorly	
function flatten(arr, list){
	var flat = list || [];
	
	for(var i = 0; i < arr.length; i++){
		if(arr[i] instanceof Array){
			flatten(arr[i], flat);
		}
		else {flat.push(arr[i]);}
	}
	return flat;
}

//problem with the kata -- apparently only wants us to flatten one layer of the array

//first round 
function flatten(arr){
	var flat = [];
	
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i]);
		if(arr[i] instanceof Array) {
			flat = flat.concat(arr[i]);
		}
		else {
			flat.push(arr[i]);
		}
	}
	
	return flat;
}

//second round -- no need for push vs concat
function flatten(arr){
	var flat = [];
	
	for(var i = 0; i < arr.length; i++){
		flat = flat.concat(arr[i]);
	}
	
	return flat;
}

//more concise solution using reduce
function flatten(arr) {
	return arr.reduce(function(prev, curr){
		return prev.concat(curr);
	});
}

//cool super concise es2015 solution from the answers
let flatten = (l) => [].concat(...l);
