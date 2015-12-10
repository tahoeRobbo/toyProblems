//Description:
//
//You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.
//
//Subsequent calls to the resulting function should have no effect (and should return undefined).
//
//For example:
//
//logOnce = once(console.log)
//logOnce("foo") // -> "foo"
//logOnce("bar") // -> no effect

	function once(func){
		return function(input){
				var res = func(input);
				func = null;
				return res;
			}

	}

	var onceLog = once(console.log);
	onceLog("test");

function test (num){
	return function(){
		console.log(num);
	};
}
var six = test(6);

//this pattern works -- having trouble passing in a function to call
function once(){
	var count = 1;
	return function(){
		if(count){
			count -=1;
			return "Hello!";
		}
	};
}

var test = once();
test();

function foo(str){
	return console.log(str);
}

function once(fn){
	var count = 1;
	return function(input){
		if(count){
			var res = fn(input);
			count -= 1;
			return res;
		}
	};
}

var onceLog = once(foo);
onceLog("test");

function once(fn){
	console.log(fn);
	var count = 1;
	return function(input){
		if(count){
			var res = fn.call(this, input);
			count -= 1;
			return res;
		}
	};
}
