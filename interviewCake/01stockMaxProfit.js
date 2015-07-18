//Write a function that takes in an array of stock prices at 
//the minute interval and tells you the maximum profit that 
//could have been made from ONE BUY and ONE SELL.  Cannot 
//short the stock (must buy before you sell)


//this is a greedy solution that sets a minPrice as the 
//initial price and a maxProfit of the difference between 
//the first two intervals.  it then loops forward through 
//all the values checking for the potentialProfit by 
//finding the difference between the current price and the 
//minPrice.  if the currentPrice is less than the minPrice 
//it becomes the new minPrice to check against going 
//forward.  if the potentialProfit of the currentPrice less 
//the minPrice is greater than the maxProfit, it becomes 
//the new maxProfit going forward.  Once all values have 
//been looped through once, the final maxProfit is 
//returned, representing the largest profit from one single 
//trade.


var getMaxProfit = function(priceArray) {
	//check to make sure the array is two or more prices
	// as you can't buy and sell the same interval
	if(priceArray.length < 2) {
		return "Array must have two or more prices";
	}
	
	//assign minPrice to initial value
	var minPrice = priceArray[0];
	//assign maxProfit to second value minus first value
	var maxProfit = priceArray[1] - minPrice;
	
	//starting at second value, loop through values finding potential profit from subtracting minPrice from currentPrice  
	for(var i = 1; i < priceArray.length; i++) {
		var potentialProfit = priceArray[i] - minPrice;
		
		//if potentialProfit > maxProfit, set potentialProfit to maxProfit.
		if(potentialProfit > maxProfit) {
			maxProfit = potentialProfit;
		}

			//if currentPrice < minPrice, set currentPrice to minPrice. 
		if(priceArray[i] < minPrice) {
			minPrice = priceArray[i];
		}
		
	}//end for loop
	
	//after looping through values, return maxProfit
	return maxProfit;
	
	
};// end getMaxProfit

var results = [];

results.push(getMaxProfit([1,2,3,2,4,5]));//4
results.push(getMaxProfit([3,4,5,2,4,7]));//5;
results.unshift('key - 4, 5');

console.log(results);


//