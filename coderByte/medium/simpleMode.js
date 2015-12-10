//Using the JavaScript language, have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty. 

function SimpleMode(arr){
	var initArrStr = arr.join('');
	var sortedArr = arr.sort(function(a,b){return a - b;});
	console.log(initArrStr, 'initArr');
	console.log(sortedArr, 'sorted');
	var mode = -1;
	var count = 1;
	
	var currentCount = 1;
	var currentNum = sortedArr[0];
	
	
	
	for(var i = 1; i < sortedArr.length; i++) {
		if(sortedArr[i] === currentNum){
			currentCount +=1;
			
			if(currentCount > count) {
				count = currentCount;
				mode = currentNum;
			}
			
			console.log(arr.indexOf(currentNum), ' arrIO cN', arr.indexOf(mode), 'arrIO m');
			if(currentCount === count && initArrStr.indexOf(currentNum) < initArrStr.indexOf(mode)){
				mode = currentNum;
			}
		}
		if(sortedArr[i] !== currentNum){
			currentCount = 1;
			currentNum = sortedArr[i];
			console.log(currentNum, 'cN win if i != cN');
		}

	}

	return mode;
}

SimpleMode([10, 5, 10, 6, 5])

// all cases correct -- took 48 min tho :/
//mine's greedy - like that it only loops once
function SimpleMode(arr) {
	var initArrStr = arr.join('');
	var sortedArr = arr.sort(function(a,b) {return a - b;});
	
	var mode = -1
	var count = 1;
	
	var currentCount = 1;
	var currentNum = sortedArr[0];
	
	for(var i = 1; i < sortedArr.length; i++){
		if(sortedArr[i] === currentNum) {
			currentCount +=1;
			
			if(currentCount > count){
				mode = currentNum;
				count = currentCount;
			}
			
			if(currentCount === count && initArrStr.indexOf(currentNum) < initArrStr.indexOf(mode)){
				mode = currentNum;
			}
		}
		
		if(sortedArr[i] !== currentNum) {
			currentNum = sortedArr[i];
			currentCount = 1;
		}
	}
	
	return mode;
	
}


//all correct >^.^<

//superdewd's code -- him and a bunch of others use nested for loops
//
//function SimpleMode(arr) { 
//
//  var mc = 0,
//      m = -1;
//  
//  for (var i = 0; i < arr.length; i++) {
//    var c = 0;
//    for (var j = 0; j < arr.length; j++) {
//      if (arr[i] == arr[j]) {
//        c++;
//      }
//    }
//    
//    if (c > 1 && c > mc) {
//      mc = c;
//      m = arr[i];
//    }
//  }
//  
//  // code goes here
//  return m; 
//            
//}














