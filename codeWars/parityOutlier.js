//Description:
//
//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The integers in the array are either entirely odd or entirely even except for a single integer N. Write a method that takes the array as an argument and returns N.
//
//For example:
//
//[2, 4, 0, 100, 4, 11, 2602, 36]
//
//Should return: 11
//
//[160, 3, 1719, 19, 11, 13, -21]
//
//Should return: 160

const findOutlier = function(arr){
	let odd = arr.filter(num => num % 2 !== 0);
	let even = arr.filster(num => num % 2 === 0);
	
	return (even.length > odd.length) ? odd[0] : even[0];

};

//giacomo's solutions.. still trying to figure out wtf is going on
function findOutlier(integers){
  return integers.filter(a=>integers.slice(0,3).map(a=>a%2).reduce((a,b)=>Math.abs(a)+Math.abs(b))<2 ? (a%2==1 || a%2==-1) : a%2==0)[0]
}