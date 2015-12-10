//Using the JavaScript language, have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols. 

function RunLength(str) {
	var currentLetter = str[0];
	var count = 1;
	var runLength = [];
	for(var i = 1; i < str.length + 1; i++) {
		if(str[i] === currentLetter){
			count += 1;
		}
		if(str[i] !== currentLetter){
			runLength.push(count, currentLetter);
			currentLetter = str[i];
			count = 1;
		}
		
	}
	console.log(runLength);
	return runLength.join('');
	
}

RunLength("wwwggopp");


function RunLength(str){
	var currentLetter = str[0];
	var runLength = [];
	var count = 1;
	
	for(var i = 1; i < str.length + 1; i++){
		if(str[i] === currentLetter) {
			count +=1
		}
		if(str[i] !== currentLetter) {
			runLength.push(count, currentLetter);
			currentLetter = str[i];
			count = 1;
		}
	}
	
return runLength.join('');
}

RunLength("wwwggopp");


function RunLength(str){
	var currentLetter = str[0];
	var runLength = [];
	var count = 1;
	
	for(var i = 1; i < str.length + 1; i++) {
		if(str[i] === currentLetter) {
			count +=1;
		}
		
		if(str[i] !== currentLetter) {
			runLength.push(count, currentLetter);
			currentLetter = str[i];
			count = 1;
		}
	}
	
	return runLength.join('');
}


//jackgeek's code -- very similar, except he built a string 
//rather than making an array then joining it at the end.
//more space efficient

//function RunLength(input) { 
//  var output = '';
//  var cc = 0;
//  var ch = input[0];
//  for (i = 0; i < input.length; i++) {
//    if (input[i] === ch) {
//      cc += 1;
//    } else {
//      output += cc + ch;
//      cc = 1;
//      ch = input[i];
//    }
//  }
//  output += cc + ch;
//  return output;
//}
  