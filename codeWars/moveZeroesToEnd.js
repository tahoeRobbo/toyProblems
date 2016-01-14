//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


//first attempt -- saw solutions using filter -- super clever, making one 

const moveZeroes = (arr) => {
	return arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));
};


const moveZeros = (arr) => {
	var zeroes = [];
	
	for(let i = 0, len = arr.length; i < len; i++){
		if(arr[i] === 0){
			zeroes.push(arr.splice(i, 1));
		}
	}
	return arr.concat(zeroes);
};

//SG's code -- like the backwards loop and not having to make a new array
var moveZeros = function (arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr[arr.length] = 0;
    }
  }
  return arr;
};


//hybrid of the two styles of solution
var moveZeros = function (arr) {
  var zeroes = [];
  var withoutZeros = arr.filter(function(value){
    if(value === 0) {
      zeroes.push(0);
      return false;
    }
    return true;
  });
  
  return withoutZeros.concat(zeroes);
}