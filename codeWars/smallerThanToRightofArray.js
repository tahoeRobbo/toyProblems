//Description:
//
//Write
//
//function smaller(arr)
//that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.
//
//For example:
//
//smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
//smaller([1, 2, 0]) === [1, 1, 0]
//If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?

const smaller = (nums) => {
	return nums.map((num, i) => nums.slice(i).filter(num2 => num2 < num).length);
};

//first pass -- want to get rid of the second loop -- working on map/filter solution
function smaller(nums){
	'use strict';
	let res = [];
	
	for(let i = 0; i < nums.length; i++){
		let count = 0;
		for(let j = i + 1; j < nums.length ; j++){
			if(nums[j] < nums[i]) {count += 1;}
		}
		res[i] = count;
	}
	return res;
}

