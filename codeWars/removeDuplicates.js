//Return the array/list passed into the function with all duplicates removed.
//
//The items in the returned array should be sorted alphabetically, with numbers before strings.
//
//The function should remove any null, undefined and invalid values from the array (in JS: all falsey values (NaN, false, undefined, null etc.) have to be removed). If the variable is not an array/list, the function should return a string “Not an array”.

const arrayDeDup = function(arr){
	let res = [];
	
	if(!(arr instanceof Array)){return "Not an array";}
	
	for(let i = 0, len = arr.length; i < len; i++){
		if(arr[i] && res.indexOf(arr[i]) < 0){
			res.push(arr[i]);
		}
	}
	
	return res.sort((a,b) => a-b);
};

//some other user solutions
function arrayDeDup (array) {
  return Array.isArray(array) ? 
    array.filter(function(e, i) { return e && array.lastIndexOf(e) === i }).sort() :
    "Not an array";
}

let arrayDeDup = arr=> arr.filter ? Array.from(new Set(arr)).filter(i=>i).sort() : 'Not an array';

const arrayDeDup = (xs) => !Array.isArray(xs) ? 'Not an array' : require('lodash')(xs)
  .uniq()
  .compact()
  .sort()
  .value();