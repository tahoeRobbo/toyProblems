//How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
//
//I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

function ROT13 (str){
	var decrypt = '';
	
	for(var i = 0, len = str.length; i < len; i++){
		if (/[A-Za-z]/g.test(str[i])){
			(str.charCodeAt(i) < 78 || (96 < str.charCodeAt(i) && str.charCodeAt(i) < 110))	?
				decrypt += String.fromCharCode(str.charCodeAt(i) + 13) :
				decrypt += String.fromCharCode(str.charCodeAt(i) - 13);
		}else {
			decrypt += str[i];
		}
	}
	return decrypt;
}
	

ROT13("Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf");

function ROT13 (str) {
	var decrypt = '';
	
	for(var i = 0, len = str.length; i < len; i++){
		if(/[A-Za-z]g/.test(str[i])){
			if(str.charCodeAt(i) < 78 || (96 < str.charCodeAt(i) && str.charCodeAt(i) < 110)){
				decrypt += String.fromCharCode(str.charCodeAt(i) + 13);
			}
			else{
				decrypt += String.fromCharCode(str.charCodeAt(i) - 13);
			}
		}
		else {
			decrypt += str[i];
		}
	}
	return decrypt;
}

ROT13("aZzA -_12 nNMm")
ROT13("Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'ffubrf");

//cool concise example -- didn't realize I could check < a letter

function rot13(str) {
  return str.replace(/[a-z]/ig, function(x){
    return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13: -13));
  });
}