//Given an array containing only numbers, add all the elements and return the binary equivalent of that sum.
//
//Note:The binary equivalent should be in string and the array should contain only number otherwise return false.
//
//arr2bin(1,2) == '11'
//arr2bin(1,2,'a') == false

function arr2bin(arr){
  if(arr.length > 0){
  	return arr.reduce(function(prev, curr){
  		if(typeof prev === 'number' && typeof curr === 'number'){
  			return prev + curr;
  		}
      else {return false;}
  	}).toString(2);
  }
  else {return '0';}
}

