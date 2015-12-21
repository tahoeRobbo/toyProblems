//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
//
//Examples:
//
//// returns "theStealthWarrior"
//toCamelCase("the-stealth-warrior") 
//
//// returns "TheStealthWarrior"
//toCamelCase("The_Stealth_Warrior")

function toCamelCase(str){
	var camel = '';
	
	for(var i = 0; i < str.length; i++){
		/[\-\_]/.test(str[i]) ? (camel +=  str[i+1].toUppercase && i++) : camel += str[i];
	}
		return camel;
}
		
toCamelCase("test-test");

function toCamelCase(str){
	var camel = '';
	
	for(var i = 0, x = str.length; i < x; i ++){
		if(/[\-\_]/.test(str[i])){
			camel += str[i + 1].toUpperCase();
			i++;
		}			
		else {
			camel += str[i];
		}
	}
	
	return camel;
	
}

toCamelCase("test-test");