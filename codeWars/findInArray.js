function inArray(str, arr){
	if(arr.indexOf(str) >=0){
		return true;
	}
	return false;
}
inArray("hello", ["bye bye","hello"]);
inArray("bitchTits", ["bye bye","hello"]);

//even more concise solution - 

function find(str, arr){
	return arr.indexOf(str) >= 0;
}

find("hello", ["bye bye","hello"]);