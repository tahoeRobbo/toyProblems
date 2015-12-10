function processData(input) {
    var input = input.split('\n');
    var length = input[0];
    var numArr = input[1].split(' ');
    //console.log(length, 'length', numArr, 'numArr');
    var pos = [];
    var neg = [];
    var zs = [];
    var posRatio;
    var negRatio;
    var zeroRatio;
    
    for(var i = 0; i < length; i++){
        if(numArr[i] < 0){
            neg.push(numArr[i]);
        } else if(numArr[i] > 0){
            pos.push(numArr[i]);
        }else {
            zs.push(numArr[i]);
        }
    }
    
    posRatio = (pos.length / length).toFixed(3);
    negRatio = (neg.length / length).toFixed(3);
    zeroRatio = (zs.length / length).toFixed(3);
    
	
		//es6 not supported :/
		//console.log(`${posRatio}\n${negRatio}\n${zeroRatio}`);
	
    console.log(posRatio + '\n' + negRatio + '\n' + zeroRatio);
    
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});


//**second answer using a pos neg and zero count, instead of array -- saves memory
//process.stdin.on("end", function () {
//   processData(_input);
//});
//
//function processData(input) {
//    //Enter your code here
//    input = input.split("\n");
//    var n = input.shift();
//    input = input.shift().split(' ');
//    var len = input.length;
//    
//    var neg = 0.0;
//    var zero = 0.0;
//    var pos = 0.0;
//    
//    input.forEach(function (num) {
//        num = parseInt(num);
//        if (num < 0) { neg++ }
//        else if (num > 0) { pos++ }
//        else { zero++ }
//    });
//
//    console.log((pos / len).toPrecision(3));
//    console.log((neg / len).toPrecision(3));
//    console.log((zero / len).toPrecision(3));
//} 
//
//process.stdin.resume();
//process.stdin.setEncoding("ascii");
//_input = "";
//process.stdin.on("data", function (input) {
//    _input += input;
//});
//
//process.stdin.on("end", function () {
//   processData(_input);
//});
