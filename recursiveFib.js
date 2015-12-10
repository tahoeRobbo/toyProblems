var createFibSeq = function(num) {
	if(num === 0) {
		return total;
	}
	var total = (num - 1) + (num - 2);
	return createFibSeq(num - 1);
};

createFibSeq(4);

var fibSeq = [];
function recursiveFib (num) {
	if(num < 2) {
		return fibSeq.unshift(1);
	}
	return fibSeq.unshift(recursiveFib(num-2) + recursiveFib(num-1))
}
recursiveFib(4);
console.log(fibSeq);

var total = 0;
function recursiveFib2(num) {
	if(num < 2) {
		return total;
	}
	total = (num-2) + (num - 1);
	return recursiveFib2(num-1);
}

recursiveFib2(3);
recursiveFib2(4);