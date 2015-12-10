//Using the JavaScript language, have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas and 4 significant digits after the decimal place. For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". The output must contain a number in the one's place even if it is a zero. 

function FormattedDivision(num1, num2) {
	var div = (num1 / num2).toFixed(4).toString().split('');
	console.log(div);
	var digits = [];
	var whole;
	for(var i = 0; i < div.length; i++){
		if(div[i] !== '.'){
			digits.push(div[i]);
			div.shift();
			i--;

		}
		if(div[i] === '.'){
			break;
		}
	}
	
	if(digits.length > 3){
		for(var j = digits.length - 3; j > 0; j = j-3){
		digits.splice(j, 0, ',');
		}
	}

	

	
 	whole = digits.join('') + div.join('');
	return whole;
}

FormattedDivision(123456789, 100000);



function FormattedDivision(num1, num2) {
	var div = (num1 / num2).toFixed(4).toString().split('');
	var digits = [];
	var whole;
	
	for(var i = 0; i < div.length; i++){
		if(div[i] !== '.') {
			digits.push(div[i]);
			div.shift();
			i--;
		}
		if(div[i] === '.') {
			break;
		}
	}
	
	for(var j = digits.length - 3; j > 0; j = j-3){
		digits.splice(j, 0, ',');
	}
	
	whole = digits.join('') + div.join('');
	return whole;
}


//trying to figure out how to not use two loops
function FormattedDivision(num1, num2) {
	var div = (num1 / num2).toFixed(4).toString().split('.');
	var digits = div[0];
	var whole;
	
	for(var i = digits.length - 3; i > 0; i = i - 3){
		digits.splice(i, 0, ',');
	}
	
	whole = digits.join('') + div[1];
	
	console.log(whole);
	
}

FormattedDivision(123456789, 100000);


//jackgeek's code

//function FormattedDivision(num1,num2) { 
//  var res = Math.round((num1 / num2) * 10000) / 10000;
//  var bits = res.toString().split('.');
//  var ints = bits[0].split('').reverse().join('');
//  var n = '';
//  for (var i = 0; i < ints.length; i++) {
//    if (i > 0 && i % 3 == 0) {
//      n += ',';
//    }
//    n += ints[i];
//  }
//  n = n.split('').reverse().join('');
//  var d = bits[1];
//  if (typeof d === 'undefined') { 
//    d = '0';
//  }
//  d = d + (new Array(5-d.length).join('0'));
//  n = n + '.' + d;
//  return n;
//}
