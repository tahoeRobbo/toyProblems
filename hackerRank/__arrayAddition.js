process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = '';
var input_stdin_array = [];

process.stdin.on('data', function(data){
	input_stdin +=data;
});

process.stdin.on('end', function() {
	input_stdin_array = input_stdin.split("\n");
	main();
});

function readLine() {
	return input_stdin_array[input_currentline++];
}

	function arrayAdder (N, arr) {
		var numArr = arr.split(' ');
		var total = 0;
		for(var i = 0; i < N; i++){
			total = total + parseInt(numArr[i], 10);
		}

		return total;

	}

function main() {
	
	var N = parseInt(input_stdin_array[0]);
	var arr = String(input_stdin_array[1]);
	
	var res = arrayAdder(N, arr);
	
	console.log(res);
}


var arr = [1,2,3];

var newArr = arr.map(x => x+1);

console.log(arr, 'arr', newArr, 'nA');