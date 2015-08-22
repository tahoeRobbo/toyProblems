//I suspect the online poker game I'm playing shuffles cards by doing a single " riffle ↴ ."
//
//To prove this, let's write a function to tell us if a full deck of cards shuffled_deck is a single riffle of two other halves half1 and half2.
//
//We'll represent a stack of cards as an array of integers in the range 1..521..52 (since there are 5252 distinct cards in a deck).
//
//Why do I care? A single riffle is not a completely random shuffle. If I'm right, I can make more informed bets and get rich and finally prove to my ex that I am not a "loser with an unhealthy cake obsession" (even though it's too late now because she let me go and she's never getting me back).


//This is a recursive solution to the single riffle puzzle
var singleRiffleCheckerRecursive = function(shuffledDeck, half1, half2) {

	//console.log for debugging and to keep track of if or when the conditions fail.
	console.log(shuffledDeck, ' cl shuffledDeck', half1, ' half1', half2, ' half2');
	
	//base case for the recursive solution.  Once the shuffledDeck has a length of zero
//	the function will quit calling itself and return true, indicating that yes, it was a 
//	single riffle shuffle
	if(shuffledDeck.length === 0) {
		return true;
	}
	
	//compares lengths of the two halfs to set up the alternating check.  
	if(half1.length >= half2.length && shuffledDeck[0] !== half2[0]) {
		if(shuffledDeck[0] === half1[0]) {
			half1.shift();
			shuffledDeck.shift();
		return singleRiffleCheckerRecursive(shuffledDeck, half1, half2);
		}
	}

 else if (shuffledDeck[0] === half2[0]) {
	 half2.shift();
	 shuffledDeck.shift();
		return singleRiffleCheckerRecursive(shuffledDeck, half1, half2);
	} 
	
	//in case the half2 is the first riffled, switch half1 and half2 and retry 
	else if(half1.length >= half2.length && shuffledDeck[0] === half2[0])
	{
		console.log(half1, ' h1 from wIn elseIf', half2, ' h2 from wIn elseIf');
		return singleRiffleCheckerRecursive(shuffledDeck, half2, half1);
	}
	
	//if the cases ever fail, it is not a single riffle, return false
	else {
		return false;
	}
};// end singleRiffleCheckerRecursive

singleRiffleCheckerRecursive([1,2,3,4], [1,3], [2,4]);

