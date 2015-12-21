//Beta
//Find the next perfect square!
//
//You might know some pretty large perfect squares. But what about the NEXT one?
//
//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
//If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.
//
//Examples:
//
//findNextSquare(121) --&gt; returns 144
//findNextSquare(625) --&gt; returns 676
//findNextSquare(114) --&gt; returns -1 since 114 is not a perfect

function findNextSquare(num){
	return (Math.sqrt(num) % 1 === 0) ? Math.pow(Math.sqrt(num) + 1, 2) : -1; 
}

//glad I learned ternary conditionals.  dem ishes are cool