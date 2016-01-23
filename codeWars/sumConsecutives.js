//You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.
//
//Extra credit if you solve it in one line. You can asume there is never an empty list/array and there will always be an integer.
//
//Same meaning: 1 == 1
//
//1 != -1
//
//Examples:
//
//[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]
//
//"""So as you can see sum of consecutives 1 is 1 
//sum of 3 consecutives 4 is 12 
//sum of 0... and sum of 2 
//consecutives 3 is 6 ..."""
//
//[1,1,7,7,3] # should return [2,14,3]
//[-5,-5,7,7,12,0] # should return [-10,14,12,0]

//first try through -- wonder if I can use map / reduce
function sumConsecutives(s) {
	var res = [];
	var temp = 0;
	
	for(var i = 0, len = s.length; i < len; i++){
		if(s[i] === s[i+1]){temp +=(s[i])}
		else if((temp !== 0) && (s[i] !== s[i+1])) {res.push(temp + s[i]);
																						 	temp = 0}
		else {res.push(s[i])}
	}
	
	return res;
}
sumConsecutives([1,4,4,4,0,4,3,3,1]);

//an interesting one from phatcabbage -- 
const sumConsecutives = a => a.reduce((acc, x, i) => ((x === a[i-1]) ? ((acc[acc.length-1] += x), acc) : acc.concat(x)), []);

//another cool one from kaanoczan
function sumConsecutives(s) {
    return s.reduce((prev, curr, index, arr) => {
      if(index > 0 && arr[index - 1] === curr){
        prev[prev.length - 1] = prev[prev.length - 1] + curr;
      } else {
        prev.push(curr);
      }
      
      return prev;
    }, []);
}
