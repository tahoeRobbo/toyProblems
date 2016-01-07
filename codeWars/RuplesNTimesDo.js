//Congratulations, you've been selected to join the RuplesJS team at work. The goal of RuplesJS is to create a library to get Ruby developers a little more comfortable with Javascript.
//
//Your first task is to create a times method for numbers. Ruby has something like the following:
//
//5.times do
//  puts "hello"
//end
//In Javascript, create a method for numbers called times that takes a callback function and runs it n times, where n is the number the method is attached to. For example:
//
//(10).times(function() {
//  console.log('hello');
//});
//Should output 'hello' 10 times to the console. If the number is a decimal, round to the nearest integer. Negative numbers should do nothing. If you're not passed a function, you should throw an error.
//
//Good luck!

//good idea to add error handling

Number.prototype.times = function(fn){
	if(typeof fn !== 'function'){
		throw new Error('Needs to take in a function.');
	}
	
	let i = 0, n = Math.round(this);
	while(i++ < n){
		fn();
	}
};

//sweeeeeet --1st solution
Number.prototype.times = function(cb){
	let i = 0;
	while(i < Math.round(this)){
		cb();
		i++;
	}
};

//cool solution to shorten the while a bit, also cache's Math.round(this) -- very similar though.  Colby
Number.prototype.times = function(fn) {
  let i = 0, n = Math.round(this);
  while (i++ < n) fn();
};

