//Your quirky boss found out that you're a programmer and has a weird request about something they've been wondering for a long time.
//
//Write a function that, given:
//
//an amount of money
//a list of coin denominations
//computes the number of ways to make amount of money with coins of the available denominations.
//
//Example: for amount=44 (44¢) and denominations=[1,2,3][1,2,3] (11¢, 22¢ and 33¢), your program would output 44—the number of ways to make 44¢ with those denominations:
//
//1¢, 1¢, 1¢, 1¢
//1¢, 1¢, 2¢
//1¢, 3¢
//2¢, 2¢

//try 1

function makeChange(amt, coins) {
	var count = 0;
	
	var temp = 0
	for(var i = 0; i < coins.length; i++) {
		while(temp <= amt) {
			temp += coins[i];
		}
		count += 1;
	}
	
}


//joe's question

var testArr = [[[1,3,4], true, 2], "test", false, 7];

function count (arr) {
  arr = arr.toString().split(",");
	console.log(arr);
  var count = 0;

  arr.forEach(function (item) {
    var num = Number(item);
    if (num) count = count + num;
  })

  return count;
}

count(testArr);

var test2 = [1,2,[[3,[2,1]], 1],2];

function flatten(arr){
	var res = [];
	arr = arr.toString();
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] )
		res[i] = Number(arr[i]);
	}
	
	return res;
	
}

flatten(test2);


function flatten2 (arr) {
	var res = [];
	
	for(var i = 0; i < arr.length; i++) {
		
	}
}