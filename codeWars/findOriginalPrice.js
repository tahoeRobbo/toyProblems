//We need to write some code to return the original price of type decimal, having discounted price and sale value handy of type decimal as well, original price must be rounded to two decimal places.
//
//For example:
//
//Given an item of final price $75 sold with a 25% discount, the function should return an original price of $100.

function discoverOriginalPrice(discountedPrice, salePercentage){
	return Math.round((discountedPrice * (100 / (100 - salePercentage)) * 100) / 100);
}

//to two decimals
function discoverOriginalPrice(discountedPrice, salePercentage){
	return (discountedPrice * (100 / (100 - salePercentage))).toFixed(2);
}

//beta kata, doesn't work so well


