//Using the JavaScript language, have the function ThirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within in. So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters. 

function ThirdGreatest(strArr) {
		
	var first = strArr[0];
	var second = strArr[1];
	var third = strArr[2];
	
	for(var i = 0; i < strArr.length; i++) {
		if(strArr[i].length > first.length) {
			if(second.length > third.length){
			third = second;
			}
			second = first;
			first = strArr[i];
			console.log(first, second, third, ' within > first');
			
			}
		else if (strArr[i].length > second.length){
			third = second;
			second = strArr[i];
		}
		else if (strArr[i].length > third.length) {
			third = strArr[i];
		}
		
		}
		return third;
	}

ThirdGreatest(['aaaa', 'bbbbbb', 'cc']);

ThirdGreatest(["hello", "world", "before", "all"]);



//1. When the input was ("aaaa","bbbbbb","cc") your output was incorrect.
//2. When the input was ("battt","catt","mat") your output was incorrect.