//Using the JavaScript language, have the function LookSaySequence(num) take the num parameter being passed and return the next number in the sequence according to the following rule: to generate the next number in a sequence read off the digits of the given number, counting the number of digits in groups of the same digit. For example, the sequence beginning with 1 would be: 1, 11, 21, 1211, ... The 11 comes from there being "one 1" before it and the 21 comes from there being "two 1's" before it. So your program should return the next number in the sequence given num. 

function LookSaySequence(num){
	var res = '';
	var count = 1;
	
	var numArr = num.toString().split('');
	var currentNum = numArr[0];
	
	if(num < 10){
		return '1' + num;
	}
	
	for(var i = 1; i < numArr.length; i++){
		if(numArr[i] === currentNum){
			count +=1;
		}
		if(numArr[i] !== currentNum || !numArr[i + 1]){
			res = res + count + currentNum;
			count = 1;
			currentNum = numArr[i];
		}
		
		console.log(res);
	}
	
	return res;
}

LookSaySequence(3441);
//
//1. When the input was 3441 your output was incorrect.
//2. When the input was 1221 your output was incorrect.
//3. When the input was 12 your output was incorrect.

//incorrect when a double heading into the last num.
//lets it bank the previous num, not bank itself
//fix by making it loop once past arr length -- will
//always be undefined.  plus dont need to make 
// || i + 1 -- just needs to be i.  will always be undef



function LookSaySequence(num){
	var res = '';
	var count = 1;
	
	var splitArr = num.toString().split('');
	var currentNum = splitArr[0];
	
	if(num < 10) {
		return '1' + num;
	}
	
	for(var i = 1; i < splitArr.length + 1; i ++) {
		if(splitArr[i] === currentNum){
			count +=1;
		}
		
		if(splitArr[i] !== currentNum || !splitArr[i]){
			res = res + count + currentNum;
			currentNum = splitArr[i];
			count = 1;
		}
	}
	
	return res;
	
}
//all outputs were correct >^,^>











