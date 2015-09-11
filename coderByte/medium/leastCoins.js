//Using the JavaScript language, have the function CoinDeterminer(num) take the input, which will be an integer ranging from 1 to 250, and return an integer output that will specify the least number of coins, that when added, equal the input integer. Coins are based on a system as follows: there are coins representing the integers 1, 5, 7, 9, and 11. So for example: if num is 16, then the output should be 2 because you can achieve the number 16 with the coins 9 and 7. If num is 25, then the output should be 3 because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins. 

//recursive sol
var count = 0;
function CoinDeterminer(num) {
	if(num === 0){
		return count;
	}
	if(num >= 11) {
		num = num - 11;
		count +=1;
		console.log(num, 'inside >=11')
		return CoinDeterminer(num);
	}
	else if(num >=9) {
		num = num - 9;
		count +=1;
		console.log(num, 'inside >=9')
		return CoinDeterminer(num);
	}
	else if(num >=7) {
		num = num -7;
		count +=1;
		console.log(num, 'inside >=7')
		return CoinDeterminer(num);
		
	}
	else if(num >=5) {
		num = num - 5;
		count +=1;
		console.log(num, 'inside >=5')
		return CoinDeterminer(num);
	}
	else if(num >=1) {
		num = num - 1;
		count +=1;
		console.log(num, 'inside >=1')
		return CoinDeterminer(num);
	}
}

CoinDeterminer(25);



CoinDeterminer(6);//2
CoinDeterminer(16);//2

//1. When the input was 25 your output was incorrect.

//fails because 25 - 11 =14-11=3-1=2-1=1-1=0 //coins = 5
//shows larger interval between 5&1 -- 5-1=4, vs intervals of 
//2 everywhere else.  to solve, prevent num from ever being 4 or 3

//2. When the input was 37 your output was incorrect.
//3. When the input was 14 your output was incorrect.

var count = 0;
function CoinDeterminer2(num) {
	if(num === 0){
		return count;
	}
	if(num >= 11 && num !== 15 && num !== 14) {
		num = num - 11;
		count +=1;
		console.log(num, 'inside >=11')
		return CoinDeterminer2(num);
	}
	else if(num >=9) {
		num = num - 9;
		count +=1;
		console.log(num, 'inside >=9')
		return CoinDeterminer2(num);
	}
	else if(num >=7) {
		num = num -7;
		count +=1;
		console.log(num, 'inside >=7')
		return CoinDeterminer2(num);
		
	}
	else if(num >=5) {
		num = num - 5;
		count +=1;
		console.log(num, 'inside >=5')
		return CoinDeterminer2(num);
	}
	else if(num >=1) {
		num = num - 1;
		count +=1;
		console.log(num, 'inside >=1')
		return CoinDeterminer2(num);
	}
}

CoinDeterminer2(25);