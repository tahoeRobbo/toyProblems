//Using the JavaScript language, have the function NumberEncoding(str) take the str parameter and encode the message according to the following rule: encode every letter into its corresponding numbered position in the alphabet. Symbols and spaces will also be used in the input. For example: if str is "af5c a#!" then your program should return 1653 1#!. 

function NumberEncoding(str) {
	var encodedStr = '';
	
	str = str.toLowerCase();
	
	for(var i = 0; i < str.length; i++){
		if(/[a-z]/.test(str[i])){
			console.log(str.charCodeAt(i));
			encodedStr = encodedStr + (str.charCodeAt(i) - 96);
		}
		else {
			encodedStr = encodedStr + str[i];
		}
	}
	
	return encodedStr;
	
}

NumberEncoding("af5c a#!");


function NumberEncoding(str) {
	var encodedStr = '';
	
	str = str.toLowerCase();
	
	for(var i = 0; i < str.length; i++){
		if(/[a-z]/.test(str[i])){
			encodedStr = encodedStr + (str.charCodeAt(i) - 96);
		}
		else {
			encodedStr = encodedStr + str[i];
		}	
	}
	
	return encodedStr;
	
}

//all cases correct >^.^<


//JackGeeks code -- I actually like mine better on this one! huzzah!
//var alpha = /[a-z]+/i;
//function NumberEncoding(str) {
//  var a = str.toLowerCase().split('');
//  var r = [];
//  while (a.length > 0) {
//    var t = a.shift();
//    if (t >= 'a' && t <= 'z') {
//      r.push((t.charCodeAt(0)-96).toString());
//    } else {
//      r.push(t);
//    }
//  }
//  return r.join('');
//}