//Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345". 


// only got 2?!  don't trust toLocaleString
function DivisionStringified(num1, num2) {
	var res = num1 / num2;
	

	var splitRes = res.toString().split('');
	console.log(splitRes, ' sR top');
	console.log(splitRes.length, ' sr.length')
	if(splitRes.length > 3){
		console.log(' inside if hit');
		for(var i = splitRes.length - 3; i >0 ; (i = i-3)){
			console.log(i);
			splitRes.splice(i, 0, ",");
			console.log(splitRes);
			
		}
		
	}
	
	return splitRes.join('');
		
}
//phew.. finally got it! that was a toughy for some reason...

DivisionStringified(9999999999999, 3);
DivisionStringified(2, 3);



//for timed test
function DivisionStringified(num1, num2) {
	var res = Math.Round(num1 / num2);
	
	var splitRes = res.split('');
	
	if(splitRes > 3) {
		for(var i = splitRes.length - 3; i > 0; i = i - 3) {
			splitRes.splice(i, 0, ',');
		}
	}
	
	return splitRes.join('');
}


//chrisgolex's code

//more verbose but avoids splits and joins.. guess to save cost?

//function DivisionStringified(num1,num2) { 
//var divide2;
//var str ="";
//var count = 0;
//  var div;
//function trunc(x) {
//  return x < 0 ? Math.ceil(x) : Math.floor(x);
//}
//
//divide = num1 / num2;
//conc = Math.round(divide);
//div = Math.round(divide);
//divide2 = String(conc);
//
//
//if(conc < 1000){
//
//str = div;
//}else if (conc < 10000){
//for (var i = 0; i<divide2.length; i++){
//if (i == 0){
//str = str + divide2[i] +",";
//
//}else{
//str = str + divide2[i];
//}
//
//}
//
//}else if (conc > 9999){
//if (divide2.length %2 != 0){
//for (var j = divide2.length-1; j>=0; j--){
//count++;
//str = divide2[j] + str;
//if (count == 3 && j != 0){
//str = "," + str;
//count = 0;
//}
//}
//}else if(divide2.length %2 == 0){
//for (var j = divide2.length-1; j>=0; j--){
//count++;
//str = divide2[j] + str;
//if (count == 3 && j != 0){
//str = "," + str;
//count = 0;
//}
//
//}
//
//}
//
//}
//
//  // code goes here  
//  return str; 
//         
//}