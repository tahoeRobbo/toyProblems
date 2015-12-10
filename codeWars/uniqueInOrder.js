//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
//For example:
//
//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(input){
	input = input.toString();
	var uIO = [];
	
	for(var i = 0; i < input.length; i++){
		if(input[i] !== input[i-1]){
			uIO.push(input[i]);
		}
	}
	return uIO;
}

//interesting solution -- 
var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}	