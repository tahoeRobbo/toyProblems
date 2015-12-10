//Using the JavaScript language, have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.


//passed all tests
function BracketMatcher(str){
	var opener = [];
	
	for(var i = 0; i < str.length; i++) {
		if(/[\(]/.test(str[i])){
			opener.push(str[i]);
		}
		
		if(/[\)]/.test(str[i]) && opener.length === 0){
			return 0;
		}
		
		if(/[\)]/.test(str[i]) && opener.length >=1 ){
			opener.pop();
		}
		
			console.log(opener);
	}
	

	
	if(opener.length === 0){
		return 1;
	}
	return 0;
}

BracketMatcher("(c(oder)) b(yte)");


//jackGeek's solution.. that somebitch!

//function BracketMatcher(str) { 
//  var len = str.length + 1;
//  while (str.length < len) {
//    len = str.length;
//    str = str.replace(/([^\(\)])|(\([^\(\)]*\))/g, '');
//  }
//  return str.length === 0 ? 1 : 0;      
//}
//BracketMatcher(readline());      