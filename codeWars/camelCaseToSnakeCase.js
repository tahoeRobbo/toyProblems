//Description:
//
//Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.
//
//Examples:
//
////  returns test_controller
//toUnderscore('TestController');
//
//// returns movies_and_books
//toUnderscore('MoviesAndBooks');
//
//// returns app7_test
//toUnderscore('App7Test');
//
//// returns "1"
//toUnderscore(1);

//one line es2015 answer -- refactored from the one below;
const toUnderscore = (str) =>
  str.toString().split(/(?=[A-Z])/).join('_').toLowerCase();

//one line es2015 using replace
const toUnderScore = (str) =>
	str.toString().replace(/(.)([A-Z])/g, "$1_$2").toLowerCase();

//first take -- not so great but functional
const toUnderscore = function(str){
	let snakeCase = (typeof str === 'number') ? str : str[0].toLowerCase();
	
	for(let i = 1, len = str.length; i < len; i++){
		if(/[A-Z]/.test(str[i])){
			snakeCase += `_${str[i].toLowerCase()}`;
		} else {
			snakeCase += str[i]
		}
	}
	
	return snakeCase;
};

//much much much better solution -- I'm all tired and not thinking 
//well

//looks ahead at capitals, splits before (as to not delete them) //joins with _, lowercases it all
  toUnderscore = function(string) {
    return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
  };

//nat giacomo's solutions -- captures previous chrs and capital letter
//replaces them with 1st group + _ + 2nd group
//lowerCase the whole thing;
//faster / less costly-- doesn't split and join

function toUnderscore(string) {
  return string.toString().replace(/(.)([A-Z])/g, "$1_$2").toLowerCase();
}