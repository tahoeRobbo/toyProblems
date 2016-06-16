//Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.
//
//flatten([1,2,3]) // => [1,2,3]
//flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
//flatten([[[1,2,3]]]) // => [[1,2,3]]

//solution 1

function flatten(array) {
  var flattened = [];
  
  for(var i = 0, len = array.length; i < len; i++){
    if(array[i] instanceof Array) {
      for(var j = 0, innerLen = array[i].length; j < innerLen; j++) {
        flattened.push(array[i][j]);
      }
    } else {
        flattened.push(array[i]);
      }
  }
  return flattened;
}


function flatten(arr) {
  var flat = [];
  
  for(var key in arr) {
    flat = flat.concat(arr[key]);
  }
  
  return flat;
}