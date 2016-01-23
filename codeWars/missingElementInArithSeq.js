//An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: Exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.
//
//You have to write the function findMissing (list) , list will always be atleast 3 numbers.
//
//Example :
//
//findMissing ([1,3,5,9,11]) == 7
//PS: This is a sample question of the facebook engeneer challange on interviewstreet. I found it quite fun to solve on paper using math , derive the algo that way. Have fun!
//	

//first solution -- works, but there's gotta be a more efficient way
var findMissing = function (list) {  
  var c = 0;
	var fullArr = [list[0]];
  ((list[1] - list[0]) === (list[2] - list[1])) ?
    c = list[1] - list[0] : c = list[list.length - 1] - list[list.length - 2];
	
	
	for(var i = 1; i < list.length + 1; i++){
		fullArr[i] = fullArr[i - 1] + c;
	}
	
	console.log(fullArr);
	
	for(var j = 0; j < fullArr.length; j++){
		if(list.indexOf(fullArr[j]) < 0){
			return fullArr[j];
		}
	}

  
};

findMissing([1,3,5,9,11])