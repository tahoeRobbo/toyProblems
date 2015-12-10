//Simplified number to money converter.
//
//You will always get a positive number below 10,000 with at least two trailing digits.
//
//Note: You do not need to round the number, just truncate to 2 decimal places.
//
//Examples:
//
//2546.2562 --> '2,546.25'
//
//1500.342626 --> '1,500.34'
//
//100.2134 --> '100.21'
//
//Taken from 'Formatting a number as price' (Kyu 5)

function numToMoney(num){
	
	num = num.toString().match(/(\d*)(.\d{2})/)[0].split('');
//	num = group[0];
	console.log(num, ' num');
	if(num.length > 6){
		
		for(var i = num.length - 6; i > 0; i -=3){
			num.splice(i, 0, ',');
			i--;
		}

	}
	
	if(num[num.length - 1] == 0){
		num[num.length-1] = null;
	}
	console.log(num[num.length-1])
	return num.join('');
}

numToMoney(1456.204);

// 'best practice'  trying to figure out what's going on in the regex
//the Math.floor(n * 100) / 100 is a great way to get to 2 decimals tho
function numberToMoney(n) {
  return String(Math.floor(n * 100) / 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}