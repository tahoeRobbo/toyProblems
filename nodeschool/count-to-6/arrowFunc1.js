var inputs = process.argv.slice(2);

//var result = inputs.map(function(word){
//	return word.charAt(0);
//}).reduce(function(prev, next){
//	return prev + next;
//});

//console.log(`${inputs} turns into ${})


//one solution
var result = inputs.map(word => word[0]	)
	.reduce((prev, next) =>  prev + next);

console.log(`[${inputs}] becomes "${result}"`);


//another solution
var results = inputs.map(word => word[0])
	.reduce((prev, next) => `${prev}${next}`);

console.log(`[${inputs}] becomes "${results}"`);

//reference solution from exercise
    var inputs = process.argv.slice(2);
    var result = inputs.map(s => s[0])
                       .reduce((soFar, s) => soFar + s);
    
    console.log(`[${inputs}] becomes "${result}"`);

