//Using the JavaScript language, have the function TripleDouble(num1,num2) take both parameters being passed, and return 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2. For example: if num1 equals 451999277 and num2 equals 41177722899, then return 1 because in the first parameter you have the straight triple 999 and you have a straight double, 99, of the same number in the second parameter. If this isn't the case, return 0. 

function TripleDouble(num1, num2) {
	var splitNum1 = num1.toString().match(/\d/g);
	var splitNum2 = num2.toString().match(/\d/g);
	
	var currentNumber = splitNum1[0];
	var trip;
	
	for(var i = 0; i < splitNum1.length; i++) {
		console.log(splitNum1[i], i )
		if(splitNum1[i] === currentNumber && splitNum1[i + 1] === currentNumber && splitNum1[i + 2] === currentNumber) {
			console.log(' thre in a row')
				trip = currentNumber;
		}	
		
		if(trip) {
		for(var j = 0; j < splitNum2.length; j++){
			console.log( splitNum2[j])
			if(splitNum2[j] === trip && splitNum2[j+1] === trip && splitNum2[j + 2] !== trip){
				return 1;
			}
		}
	}
		
		else{
			currentNumber = splitNum1[i + 1];
		}
			
			
	}
	
	console.log(trip, ' trip');

	return 0;
}

TripleDouble(333, 33);


//all cases correct

//jackGeek's code
//
//function freq(num) {
//  var str = num.toString();
//  var res = [];
//  for (var i = 0; i < 10; i++) {
//    var digits = str.match(new RegExp(i.toString() + '*', 'g'));
//    var run = 0;
//    for (var o = 0; o < (digits === null ? 0 : digits.length); o++) {
//      run = Math.max(run, digits[o].length);
//    }
//    res.push(run);
//  }
//  return res;
//}
//
//function TripleDouble(num1,num2) { 
//  var f1 = freq(num1),
//      f2 = freq(num2);
//  for (var i = 0; i < 10; i++) {
//    if (f1[i] >= 3 && f2[i] >= 2) {
//      return 1;
//    }
//  }
//  return 0;
//}