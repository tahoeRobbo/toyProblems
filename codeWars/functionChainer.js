//Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for ruby). Return the final value after execution is complete.
//
function add(num) {
  return num + 1
}

function mult(num) {
  return num * 30
}


//// returns 90;

function chain(num, funcArr){
	for(var i = 0; i < funcArr.length; i++){
		num = funcArr[i](num);
	}
	return num;
}

chain(2, [add, mult]);

//best solution -- uses reduce, as do most top answers.
//time to look up reduce!

function chain(v, fns) {
  return fns.reduce(function(v, fn) { return fn(v) }, v);
}