var args = process.argv.slice(2);
var res = 0;
for(var i = 0; i < args.length; i++){
	res += parseInt(args[i], 10);
}

console.log(res);

//their answer -- instead of making args var, start @ 2 and go
//through process.argv length;
//
//   var result = 0
//    
//    for (var i = 2; i < process.argv.length; i++)
//      result += Number(process.argv[i])
//    
//    console.log(result)