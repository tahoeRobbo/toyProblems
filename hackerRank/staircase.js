function staircase (num) {
	var stairs = '';
	
	for(var i = num; i > 0; i--){
		var spaceCt = i - 1;
		var stepCt = num - spaceCt;
		var temp = '';

		while(spaceCt > 0){
			temp += ' ';
			spaceCt --;
		}
		while(stepCt > 0){
			temp += '#';
			stepCt --;
		}
		stairs += temp + '\n';

	}
	return stairs;
}

staircase(4);

//after looking at other solutions found an idea for a much better one
//--can just log each line, no need to do everything at once and 
//send back a single string

function stairs2 (num){
	for(var i = 0; i < num; i++){
		var spaces = new Array(num - i);
		var hashes = new Array(2 + i);
		console.log(spaces.join(' ') + hashes.join('#'));
	}
}