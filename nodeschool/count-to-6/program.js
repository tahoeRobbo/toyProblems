//Step 1 -- console log HELLO ES6

//console.log('HELLO ES6');



//Step 2!
/*You will be given a name as the first argument to your program (process.argv[2]). You should output a two-line message, first greeting that person, and then telling them their name in lowercase. For example, if the name was "Domenic", you would output:

    Hello, Domenic!
    Your name lowercased is "domenic".

You can start by doing this using ES5 constructs if you like, but the correct solution should use a single ES6 template string, and not use the + operator.*/

/*var foo (name) {
	return `"Hello, " + $name + "!"
					"Your name lowercased is" + '"' + $name.toLowerCase() '"'
				
}*/

/*var name = process.argv[2];

var message = `Hello, ${name}!
Your name lowercased is "${name.toLowerCase()}".`

console.log(message);*/

//Step 3!!

/*var inputs = process.argv.slice(2);
var result = inputs.map( x => x.charAt(0)).reduce((p,c) => p + c);
var message = `[${inputs}] becomes "${result}"`;
console.log(message);*/

//Step 4!!

/*
var foot = {
	kick : function() {
		this.yelp = "Ouch!";
		setImmediate(() => console.log(this.yelp));
	}
};

foot.kick();
*/

//step 5

var input = process.argv.slice(2);
var min = Math.min(...input);
console.log(`The minimum of [${input}] is ${min}`);






























