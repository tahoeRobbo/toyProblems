	function fibChecker (num){

		console.log(Math.sqrt((5 * num * num) - 4));
		
		if(/^\d+$/.test(Math.sqrt((5 * num * num) - 4)) || /^\d+$/.test(Math.sqrt((5 * num * num) +4 ))) {
			return true;
		} 
		
	 
		return false;

	}

	fibChecker(4);
fibChecker(5);
fibChecker(13);

// all cases passed

//JackGeek's  code
//
//function FibonacciChecker(n) { 
//  return ((Math.sqrt(5*Math.pow(n,2)+4) % 1 === 0) || (Math.sqrt(5*Math.pow(n,2)-4) % 1 === 0))
//    ? 'yes' : 'no';
//}