//Using the JavaScript language, have the function SwapII(str) take the str parameter and swap the case of each character. Then, if a letter is between two numbers (without separation), switch the places of the two numbers. For example: if str is "6Hello4 -8World, 7 yes3" the output should be 4hELLO6 -8wORLD, 7 YES3. 

function SwapII(str) {
	var newStr = '';
	
	for(var i = 0; i < str.length; i++) {
		if(/[A-Z]/.test(str[i])) {
			newStr = newStr + str[i].toLowerCase();
		}
		else if(/[a-z]/.test(str[i])) {
			newStr = newStr + str[i].toUpperCase();
		}
		else {
			newStr = newStr + str[i];
		}		
	}
	
	var arr = newStr.split(' ');
	 console.log(arr, ' newStr pre j loop');
		for(var j = 0; j < arr.length; j++) {
			if(/\d[A-z]+\d/.test(arr[j])){
				var digits = /(\d)[A-z]+(\d)/.exec(arr[j]);
				console.log(digits, ' digits');
				var temp = arr[j].split('');
				temp[temp.indexOf(digits[1])] = digits[2];
				temp[temp.lastIndexOf(digits[2])] = digits[1];
				console.log(temp, ' temp')
				arr[j] = temp.join('');
			}
		}			
		console.log(arr, ' newStr after j loop');
	var res = arr.join(' ');
	return res;
}

SwapII("6Hello4 -8World, 7 yes3");


function SwapII(str) {
	var newStr = '';
	
	for(var i = 0; i < str.length; i++) {
		if(/[a-z]/.test(str[i])){
			newStr = newStr +  str[i].toUpperCase();
		}
		else if(/[A-Z]/.test(str[i])){
			newStr = newStr +  str[i].toLowerCase();
		}
		else{
			newStr = newStr + str[i];
		}
	}
		var arr = newStr.split(' ');
		for(var j = 0; j < arr.length; j++) {
			if(/\d[A-z]+\d/.test(arr[j])){
				var digits = /(\d)[A-z]+(\d)/.exec(arr[j]);
				var temp = arr[j].split('');
				
				temp[temp.indexOf(digits[1])] = digits[2];
				temp[temp.lastIndexOf(digits[2])] = digits[1];
				
				arr[j] = temp.join('');
				
			}
		}
		
		var res = arr.join(' ');
		return res;
	
}


function SwapII(str) {
	var newStr = '';
	
	for(var i = 0; i < str.length; i++) {
		if(/[A-Z]/.test(str[i])){
			newStr += str[i].toLowerCase();
		}
		else if(/[a-z]/.test(str[i])){
			newStr += str[i].toUpperCase();
		}
		else{
			newStr += str[i];
		}
	}
	
	var arr = newStr.split(' ');
	for(var j = 0; j < arr.length; j++) {
		if(/\d[A-z]+\d/.test(arr[j])){
			var digits = /(\d)[A-z]+(\d)/.exec(arr[j]);
			var temp = arr[j].split('');
			
			temp[temp.indexOf(digits[2])] = digits[1];
			temp[temp.lastIndexOf(digits[1])] = digits[2];
			arr[j] = temp.join('');
		}
	}
	
	return arr.join(' ');
	
}