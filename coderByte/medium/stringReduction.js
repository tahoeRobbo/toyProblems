//Using the JavaScript language, have the function StringReduction(str) take the str parameter being passed and return the smallest number you can get through the following reduction method. The method is: Only the letters a, b, and c will be given in str and you must take two different adjacent characters and replace it with the third. For example "ac" can be replaced with "b" but "aa" cannot be replaced with anything. This method is done repeatedly until the string cannot be further reduced, and the length of the resulting string is to be outputted. For example: if str is "cab", "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc"). The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then "ab" reduces to "c", and the final string "ac" is reduced to "b" so the output should be 1. 

//recursive.. only loops once per call but if it got big 
//could be costly
function StringReduction(str){
	var splitStr = str.split('');
	var initLength = splitStr.length;
	
	for(var i = 0; i < splitStr.length; i++) {
		if(splitStr[i] === 'a' && splitStr[i+1] === 'b' || splitStr[i] === 'b' && splitStr[i+1] === 'a'){
			splitStr.splice(i, 2, 'c');
			i--;
		}
		if(splitStr[i] === 'b' && splitStr[i+1] === 'c' || splitStr[i] === 'c' && splitStr[i+1] === 'b') {
			splitStr.splice(i, 2, 'a');
			i--;
		}
		if(splitStr[i] === 'a' && splitStr[i+1] === 'c' || splitStr[i] === 'c' && splitStr[i+1] === 'a'){
			splitStr.splice(i, 2, 'b');
			i--;
		}
	}
	console.log(splitStr);
	if(splitStr.length === initLength){
		return initLength;
	}
	return StringReduction(splitStr.join(''));
}

StringReduction("abcabc");

//all cases correct tho

//jackgeek's solution -- don't get it yet..
//
//var rabc = [
//  /(bc)|(cb)/gi,
//  /(ac)|(ca)/gi,
//  /(ab)|(ba)/gi
//  ];
//function reduce(s) {
//  var n = [];
//  for (var i = 0; i < 3; i++) {
//    var ns = s.replace(rabc[i], String.fromCharCode(97 + i));
//    if (ns.length < s.length) {
//      ns = reduce(ns);
//    }
//    n.push(ns);
//  }
//  var smallest = n[2];
//  if (smallest.length > n[1].length) {
//    smallest = n[1];
//  }
//  if (smallest.length > n[0].length) {
//    smallest = n[0];
//  }
//  return smallest; 
//}
//function StringReduction(str) { 
//  return reduce(str).length;
//}
//StringReduction(readline());     