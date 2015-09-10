//Using the JavaScript language, have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false. 

function PowersofTwo(num) {
	if((Math.sqrt(num) % 1) === 0 ){
		return true;
	}
	return false;
}

PowersofTwo(4);
PowersofTwo(5);



//1. When the input was 2 your output was incorrect.
//2. When the input was 8 your output was incorrect.
//3. When the input was 9 your output was incorrect.
//4. When the input was 128 your output was incorrect.
//5. When the input was 2048 your output was incorrect.

//ooooooh, haha not if it is a number to the power of two.. if it's a 2^n.. gotcha



function recPow2(num) {
	if(num === 2) {
		return true;
	}
	var halvedNum = (num / 2);
	if(halvedNum % 2 !== 0){
		return false;
	}
	
	return recPow2(halvedNum);
}

var results = [];
results.push(recPow2(2));
results.push(recPow2(8));
results.push(recPow2(9));
results.push(recPow2(128));
results.push(recPow2(2048));

console.log(results, 'true, true, false, true, true');