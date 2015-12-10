//Using the JavaScript language, have the function MultipleBrackets(str) take the str parameter being passed and return 1 #ofBrackets if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello [world])(!)", then the output should be 1 3 because all the brackets are matched and there are 3 pairs of brackets, but if str is "((hello [world])" the the output should be 0 because the brackets do not correctly match up. Only "(", ")", "[", and "]" will be used as brackets. If str contains no brackets return 1. 


// all tests correct >^.^<
function MultipleBrackets(str) {
	var openers = [];
	var count = 0;
	
	for(var i = 0; i < str.length; i++){
		if(/[\(\[]/.test(str[i])){
			openers.push(str[i]);
			count += 1;
		}
		if(openers.length === 0) {
			if(str[i] === ')' || str[i] === ']') {
				return 0;
			}
		}
		
		if(str[i] === ')' && openers[openers.length - 1] === '(') {
			openers.pop();
		}
		if(str[i] === ']' && openers[openers.length -1 ] === '['){
			openers.pop();
		}
	}
	
	if(openers.length === 0){
		return 1 + ' ' + count;
	}
	
	return 0;
}

MultipleBrackets("(c([od]er)) b(yt[e])"); // 1 5

//JackGeeks solution
//
//function MultipleBrackets(str) { 
//  var str = str.replace(/[^\(\)\[\]]/g, '');
//  var o = '';
//  var c = -1;
//  while (o != str) {
//    o = str;
//    str = str.replace(/(\(\))|(\[\])/, '');
//    c += 1;
//  }
//  if (str === '') {
//    return '1 ' + c;
//  }
//  return '0';
//}
//MultipleBrackets(readline());  