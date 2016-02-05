//Create a function that returns twice the supplied value unless it is a tricky double.
//
//The trick: if the number passed in is a double, simply return the value that was passed.
//
//Examples of a double number include:
//
//44
//77
//3333
//8787
//100100
//In the example 8787, the number 87 is doubled (appears twice).
//
//trickyDoubles(15)   // should return 30
//trickyDoubles(100)  // should return 200
//trickyDoubles(4343) // should return 4343

function trickyDoubles(n){
  let splitUp = n.toString();
  return splitUp.slice(0, (splitUp.length / 2)) === splitUp.slice((splitUp.length/2), splitUp.length) ? n : n * 2;
}

const trickyDoubles = (n) => {
	let numStr = n.toString();
	
	return numStr.slice(0, (numStr.length / n)) === numStr.slice((numStr.length/2), numStr.length) ? 
			n : n * 2;
};