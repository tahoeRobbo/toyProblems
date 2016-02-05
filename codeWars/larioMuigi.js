//Issue
//
//Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
//
//The pipes connecting your level's stages together need to be fixed before you recieve any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.
//
//Task
//
//Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.
//
//Example:
//
//Input: 1,3,5,6,7,8
//
//Output: 1,2,3,4,5,6,7,8

//doesn't work..
function pipeFix(numbers){
  var res = [];
  res.length = (numbers[numbers.length-1] - numbers[0]);
  console.log(res);
  res.map((x,i) =>  i);
  console.log(res);
  
}

//ah, good ole colby did what I was trying to do
const pipeFix = numbers => {
  numbers = numbers.slice(0).sort((a, b) => a - b);
  let min = numbers[0],
      max = numbers[numbers.length - 1];
  return [...Array(max - min + 1)].map((v, i) => i + min);
}

pipeFix([1,2,4,9]);

function pipeFix(nums){
  var res = [];
  var start = nums[0];
  var stop = nums[nums.length-1];
  
  while(stop >= start){
    res.push(start);
    start +=1;
  }
  
  return res;
}