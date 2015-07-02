//Week 2 Thursday Toy Problem
//take in an array, replace all odd numbers with 'o'
var oddReplacer = function(array) {
	var noOdds = array.slice();
	for(var i = 0; i < array.length; i++) {
		if(array[i] % 2 === 1) {
			noOdds[i] = 'O';
		};
	}return noOdds;
};

var nums = [1,2,3,4,5,6,7,8,9];

oddReplacer(nums);

//for each
//map
//filter
//reduce

//passing a functino into another function, then the function will call it


//Week 3 Day 2
//Doesn't work
var simpleSymbols = function(string) {
	var result = false;
	if(!string) {
		console.log('Not A String')
		return false;
	} else {
			for(var i = 0; i < string.length; i++) {
				if(string[i] !== '+' && string[i] !== '=')  {
					if(string[i - 1] === '+' && string[i + 1] === '+'){
					result =  true;
					};
				};console.log('doesnt have plusses')
					return false;
			};
	};return result;
	
};


simpleSymbols("+d+==+d+==+c+");

//doesn't work
var simpleSymbols2 = function(string) {
	var result = false;
	for(var i = 0; i < string.length; i++) {
		if(string[i] !== '=' && string[i] !== '+'){
			if(string[i - 1] === '+' && string[i + 1] === '+') {
				result = true;
			}; return false;
		};
	};
	return result;
};

simpleSymbols2("+d+==+d+==+c+");
/*var firstNonRepeatedChr = function(string) {
	for(var i = 0; i< string.length; i++) {
		if(string[i-1] && string[i] !== string[i-1]) {
			return string[i];
		}
	}	
}*/

//write a functino that returns the first non-repeated character in an array;
//ALLOWS TEST THREE PASSES, NOT QUITE RIGHT

var firstNonRepeatedChr2 = function(string) {
	for(var i = 0; i < string.length; i++) {
		if(string.indexOf(string[i], (i + 1))   === -1) {
			return string[i];
		};	
	};
};
firstNonRepeatedChr2('ABA');

firstNonRepeatedChr2('AABCABD');
	
firstNonRepeatedChr2('AABBCCDD');



//write a function that takes in a string and returns the longest word in the string
var longestWordInString = function(string) {
	var wordArray = string.split(' ');
	console.log(wordArray)
	var longestWord = ''
	for(var i = 0; i < wordArray.length; i++) {
		if(longestWord.length < wordArray[i].length) {
			longestWord = wordArray[i];
			
		}
	}
	return longestWord;
};

longestWordInString('The longest word should be butthole but its not the last word'); // butthole


longestWordInString('I like to snowboard and smoke weed'); // snowboard





var curryTest = function(x, y, z) {
	console.log(x + y + z);
};


curryTest.call(null, "steve", null, "Perry");

curryTest.call(null, "steve", "perry", "Stinkybitch");




replace(/\s/g, '')


// create a function called ABChecker that takes in a string and returns true if the character 'a'
// is exactly three characters before the character 'b';

//need to account for b before a



var ABChecker = function(string) {
	var cleanedString = string.replace(/\s/g, '');
	for(var i = 0; i < cleanedString.length; i++) {
		if(cleanedString[i] === 'a' && cleanedString[i+3] === 'b') {
			return true;
		};
		
	};
	return false;
};

var test1 = ABChecker('akdcljf');
var test2 = ABChecker('lane borrowed');
var test3 = ABChecker('akfbkdl');
console.log(test1);
console.log(test2);
console.log(test3);


var ABCheck = function(str) {
	if(/a...b/.test(str) || /b...a/.test(str)) {
		return true;
	} else {
		return false;
	};
};


var ABCheck = function(str) {
	return str.match(/a...b/g) !== null;
}

//write a function that takes in a number and determines if it is part of the fib sequence
var fibChecker = function(num) {
	var num1 = 0;
	var num2 = 1;
	var fibSeq = [];
	for(var i = 0; i < 1474; i++) {
		fibNum = num1 + num2;
		fibSeq.push(fibNum);
		num1 = num2;
		num2 = fibNum;
	};
	console.log(fibSeq);
	for(var j = 0; j < fibSeq.length; j++) {
		if(num === fibSeq[j]){
			return 'yes';
		}
	}return 'no'
};

fibChecker(2);
fibChecker(7);
fibChecker(13);

//Mark's solution

var fibSeq = function(num) {
	var arr = [0,1];
	for(var i = 2; i < 100; i++) {
		arr.push(arr[i - 1] + arr[i - 2]);
	}
	if(arr.indexOf(num) !== -1) return 'yes';
	return 'no';
};

fibSeq(13);


app.directive('tokenName', function() {
	return{
		link: function(scope, element, attrs) {
			element.on('mouseleave', function() {
				alert('hello beautiful world!')
			})
		}
	}
})

//function that console logs nums 1-100, multiples of 3, print fizz, multi 5 print buzz, multi 3 and 5 print fizz buzz

var fizzBuzzer = function() {
	for(var i = 1; i <= 100; i++) {
		if(i % 3 === 0 && i % 5 === 0){
			console.log(i + 'Thizzzzzzzz buzz');
		}
		else if(i % 3 === 0) {
			console.log(i + 'THEEEEIIIIZZZZZZZZZZZZZZ' );
		}else if(i % 5 ===0) {
			console.log(i + 'buzz');
		} else {
			console.log(i);
		}
	}
};

fizzBuzzer();



function ExOh(str) { 
  var lwrStr = str.toLowerCase();
  var x = 0;
  var o = 0;
  for(var i = 0; i < str.length; i++) {
    if(str[i] === 'x') {
      x.push(str[i]);
    } else if (str[i] === 'o') {
      o.push(str[i]);
    };
	}
	if( x.length === o.length) {
    return true
  } return false;
};
   
//mean finder
var meanFinder = function(arr) {
	var total = 0;
	//if(typeof arr === 'number')
	for(var i = 0; i < arr.length; i++){
		total = arr[i] + total;
	};
	var mean = total / arr.length;
	return mean;
};

var arr1 = [2,4,6,8];
var arr2 = [1,2,3];
var arr3 = [10,55,89,96,48];

meanFinder(arr1);//5
meanFinder(arr2);
meanFinder(arr3);



//median finder
var medianFinder = function(arr) {
	var sorted = arr.sort(function(a, b){return a-b});
	var median = sorted[Math.round(sorted.length / 2) - 1];
	return median;
}
var unsorted1 = [9,3,5,69,420,3];
var unsorted2 = [1,2,3,4,5]
medianFinder(unsorted1);








function MeanMode(arr) { 
  var total = 0;
  var sorted = arr.sort(function(a, b) {return a-b});
  for(var i = 0; i < arr.length; i++) {
    total = arr[i] + total;
    }
  var mean = total / arr.length;
  var mode = sorted[Math.round(sorted.length / 2) - 1];
  if(mean === mode) return 1;
  return 0;
         
}


//DOESNT WORK -- FIGURE OUT HOW TO RETURN THE TWO BETTER
function SecondGreatLow(arr) { 
	var sortedArr = arr.sort(function(a, b) {return a -b});
  	 return (sortedArr[1], sortedArr[sortedArr.length-1]);
}
   
var test1 = [1,2,3,4]

SecondGreatLow(test1);


//DOESNT WORK
function DashInsert(str) { 
	var splitStr = str.split('');
	for(var i = 0; i < splitStr.length; i++) {
      if(splitStr[i] !== 0 && splitStr[i] % 2 !== 0 && splitStr[i + 1] !== 0 && splitStr[i + 1] !== 0 && splitStr[i + 1]) {
				splitStr.splice(i+1, 0, '-')
				console.log(splitStr);
			}
	}
		return splitStr;
}

DashInsert('1233455');


var recursiveFib = function(num) {
	var fibValue = 0;
	if (num === 0) {
		return fibValue;
	} else {
		fibValue = fibValue + num;
		recursiveFib(num - 1);
	}
};

//Mark's recursive
var nthFib = function(n){
	if(n < 2) {
		return n
	} else {
		return nthFib(n-2) + nthFib(n-1);
	}
};


//call slice on arguments

function argSlice() {
	arguments.map(function(arguments){
		
	})
argSlice(1,2,3,4,5);


//
	function argSlice() {
		return Array.prototype.slice.call(arguments);
		
	}

//Write a functino that determines if a number is a prime 
	
var primeFinder = function(num) {
	if(num > 0 && num <= 3) {return true};
	if(num > 3 && num % 2 !==0 && num % 3 !== 0) {
		return true;
	}return false;
};
	
	var test1 = primeFinder(3);
	var test2 = primeFinder(5);
	var test3 = primeFinder(7);
	var test4 = primeFinder(9);
	var test5 = primeFinder(97);

console.log(test1, test2, test3, test4, test5);

//Write a functino that will give you all the prime numbers up to a given prime
	
	var allPrimes = function(num) {
		var primes = [];
		for(var i = 0; i < num; i++) {
			if(num[i] > 0 && num[i] <= 3) {primes.push(num[i])};
			if(num[i] > 3 && num[i] % 2 !== 0 && num[i] % 3 !== 0) {
				primes.push(num[i]);
			}
		};
		console.log(primes);
		return primes;
	};

	
	var test1 = allPrimes(69);
	
	
	// write a functnio that takes in a string and capitalizes the 
	//first letter of each word
	
	
/*	FROM INTARNET -- finds the first character without whitespace after it, 
		capitalizes it, the lowercases the rest.*/
	
//	    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

function LetterCapitalize(str) { 
	var words = str.split(' ');
	var corrected = []
	for(var i = 0; i < words.length; i++){
		corrected.push(words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase());
}
	return corrected.join(' '); 
};

LetterCapitalize('Fucking sniffing packet packet sniffers');



	var symbols = function(str) {
  	var splStr = str.split('');
		for(var i = 0; i < splStr.length; i++) {
			splStr
		}
         
}



















