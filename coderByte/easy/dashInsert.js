//Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. 

function DashInsert(str) {
	var splitStr = str.split('');
	for(var i = 0; i < splitStr.length -1; i++) {
		
		if(splitStr[i] % 2 !== 0 && splitStr[i + 1] % 2 !== 0) {
			splitStr.splice(i + 1, 0, '-');
		i++;
		}
	}
	return splitStr.join('');
}

DashInsert("77993");
