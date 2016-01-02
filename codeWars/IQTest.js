//Description:
//
//Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//
//! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
//
//Examples :
//
//iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
//
//iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(str){
	var splitStr = str.split(' ');
	var even = [];
	var odd = [];
	
	for(var i = 0; i < splitStr.length; i++){
		
		if(splitStr[i] % 2 === 0){
			even.push(splitStr[i]);
		} else {
			odd.push(splitStr[i]);
		}
	}
	return even.length === 1 ? splitStr.indexOf(even[0]) + 1: splitStr.indexOf(odd[0]) + 1;
}

//rewritten using a ternary

function iqTest(str){
	var splitStr = str.split(' ');
	var even = [];
	var odd = [];
	
	for(var i = 0; i < splitStr.length; i++){
		
		(splitStr[i] % 2 === 0) ? even.push(splitStr[i]) :
															odd.push(splitStr[i]);
		}
	return even.length === 1 ? splitStr.indexOf(even[0]) + 1: splitStr.indexOf(odd[0]) + 1;
}

//using a regex
function iqTest(str){
	var splitStr = str.split(' ');
	var even = [];
	var odd = [];
	
	for(var i = 0, len = splitStr.length; i < len; i++){
		/\d*[13579]$/.test(splitStr[i]) ? odd.push(splitStr[i]) : 
																			even.push(splitStr[i]);
	}

	return even.length === 1 ? splitStr.indexOf(even[0]) + 1: splitStr.indexOf(odd[0]) + 1;
}

//top voted solution -- going to start using filter more!
//wonder if it has to use two loops through the numbers twice
//and is less efficient?  gonna look up more about filter

function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}

