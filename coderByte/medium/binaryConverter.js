//Using the JavaScript language, have the function BinaryConverter(str) return the decimal form of the binary value. For example: if 101 is passed return 5, or if 1000 is passed return 8.

function BinaryConverter(str) {
	var strArr = str.toString().split('');
	var power = 1;
	var total = 0;
	
	for(var i = strArr.length - 1; i >=0; i--) {
		if(strArr[i] === '1') {
			total = total + (1 * power);
		}
		power = power * 2;
	}
	
	return total;
}

BinaryConverter(111);


function BinaryConverter(str) {
	var strArr = str.toString().split('');
	var power = 1;
	var total = 0;
	
	for(var i = strArr.length - 1; i >= 0; i--){
		if(strArr[i] === '1') {
			total = total + (1 * power);
		}
		power = power * 2;
	}
	
	return total;	
}

function BinaryConverter(str){
	var strArr = str.toString().split('');
	var total = 0;
	var power = 1;
	
	for(var i = strArr.length - 1; i >=0; i--){
		if(strArr[i] === '1') {
			total = total + (1 * power);
		}
		power = power * 2;
	}
	return total;
}

//chrisgolex's code... maaaaan

//parsing an interger out of a base 2 system.. friggin smart
//function BinaryConverter(str) { 
// 
// var decimal = parseInt(str, 2);
//   
//  return decimal; 
//         
//}