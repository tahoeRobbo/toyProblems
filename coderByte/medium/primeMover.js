//Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 

//doesn't work -- allows multiples of primes							
function primeMover(num) {
	 var firstSort = [1,2,3];
	 
	 for(var i = 4; i < 10000; i++) {
		 
		 if(i % 2 !== 0 && i % 3 !== 0){
				primeArray.push(i);
				}
	 }
	
	for(var j = 0; j < firstSort.length; j++){
		for(var k = 0; k < firstSort.length; k++) {
			
		}
	}
	 
	console.log(primeArray);
	
	 return primeArray[num - 1];
 }

function Employee(name, job) {
	this.name = name;
	this.job = job;
}

// bullshit constructor test
var rob = new Employee('Rob', 'hunter');
console.log(rob);
rob.dickSize = 'huge';
console.log(rob);

//take 2 -- using the sieve of erastathones
function primeMover(num){
	
	function sOE(n){
		var tempArray = [];
		var outputArray = [];
		var upperLimit = Math.sqrt(n);
		
		for(var i = 0; i < n; i++){
			tempArray.push(true);
		}
		
		for(var j = 2; j <= upperLimit; j++){
			if(tempArray[j]){
				for(var k = j*j ; k < n; k += j){
					tempArray[k] = false;
				}
			}
		}
		
		for(var l = 2; l < n; l++){
			if(tempArray[l]){
				outputArray.push(l);
			}
		}
		
		return outputArray;
	}
	

	var primes = sOE(10000);
		console.log(primes);
	
	return primes[num - 1];
}


function primeMover(num){
	function sOE(n){
		var tempArray = [];
		var outputArray = [];
		var upperLimit = Math.sqrt(n);
		
		for(var i = 0; i < n; i++){
			tempArray.push(true);
		}
		
		for(var j = 2; j <= upperLimit; j++){
			if(tempArray[j]){
				for(var k = j*j; k < n; k +=j){
					tempArray[k] = false;
				}
			}
		}
		
					
			for(var l = 2; l < n; l++) {
				if(tempArray[l]){
					outputArray.push(l);
				}
			}
		
		return outputArray;
	}
	
	var primes = sOE(100000);
	
	return primes[num - 1];
}

//all correct!

//chris golex's code.. wtf?

//function PrimeMover(num) { 
//var prime = 3;var found;var position = 1;if (num == 1){found =2;
//}else if (num == 0){found =0;}else{for (var i =prime; i<=10000; i++){
//var check1= true;var check2= true;for (var j= 1; j<i; j++){
//if ( j!=1 && j!=i && i%j ==0){check1 = false;}else if(j!=1 && j!=i && i%j !=0){
//check2 = true;}}if (check1 == true && check2 == true){position++;
//if(position == num){found = i;i= 10001;}}}}return found;    
//}
//PrimeMover(readline());     

//matt larsh's code... again, wtf?

//function PrimeMover(num) { 
//  var primes = [];
//  for(var i=2;i<10000;i++){
//    for(var j=2;j<i;j++){
//      if(i%j===0) j=j+10000;
//    }
//    if(j<10000)primes.push(i);
//    if(primes.length === num) return i;
//  }
//}
//   
