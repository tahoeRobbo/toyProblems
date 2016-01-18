//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


//has to be a more efficient way 
//for 20, takes 6748.732ms
const smallestDivisibleThru20 = () => {
	'use strict';
	let found = false;
	let i = 21;
	while(!found){
		if((i%2 + i%3 + i%4 + i%5 + i%6 + i%7 + i%8 + i%9 + i%10 + i%11 + i%12 + i%13 + i%14 + i%15 + i%16 + i%17 + i%18 + i%19 + i%20) === 0){found = true; return i};
		i++;
	}
};
//232792560

//solution for any input num
//oh yeah, way quicker -- for 20, takes x: 3791.995ms
	const smallestDivisibleThruNum = (num) => {
		'use strict';
		let found = false;
		let i = 21;

		while(!found){
			for(let j = 2; j <= num; j++){
				if(i % j !== 0){break;}
				if(j === num){found = true; return i};
			}
			i++;
		}
	};

console.time('x');
smallestDivisibleThruNum(20);
console.timeEnd('x');