//Write a function get_products_of_all_ints_except_at_index() that takes an array of integers and returns an array of the products.

//For example, given:

//  [1, 7, 3, 4]

//your function would return:

//  [84, 12, 28, 21]



//first try  -- works!  has nested loop though, bet can be more efficient

function getProductAllOthers(arr) {
	var productOfOthers = 1;
	var res = [];
	
	for(var i = 0; i < arr.length; i++) {
		for(var j = 0; j < arr.length; j++) {
			if(j  === i) {
				productOfOthers = productOfOthers * 1;
			}
			else{
				productOfOthers = productOfOthers * arr[j];
			}
		}
		res.push(productOfOthers);
		productOfOthers = 1;
	}
	
	return res;
}

getProductAllOthers([1, 7, 3, 4]); // [84, 12, 28, 21]


//yep, can do better, reduce run time
//We’re redoing multiplications when instead we could be storing the results! This would be a great time to use a greedy ↴ approach. We could store the results of each multiplication highlighted in blue, then just multiply by one new integer each time.

//Can we break our problem down into subproblems so we can use a greedy approach?


//second, more efficient approach
//loops through initial array twice, not expontential

function getProductAllOthers(arr) {
	var productSoFar = 1;
	var productBeforeArr = [];
	
	var productAfter = 1;
	
	for(var i = 0; i < arr.length; i++) {
		productBeforeArr[i] = productSoFar;
		productSoFar = productSoFar * arr[i];
		}
	
	for(var k = arr.length-1; k >= 0; k--) {
		productBeforeArr[k] = productBeforeArr[k] * productAfter;
		productAfter = productAfter * arr[k];
	}
	
	return productBeforeArr;
}

getProductAllOthers([1, 7, 3, 4]); // [84, 12, 28, 21]



//Ruby Solution

//  def get_products_of_all_ints_except_at_index(int_array)
//
//    # we make an array with the length of the input array to
//    # hold our products
//    products_of_all_ints_except_at_index = [1] * int_array.length
//
//    # for each integer, we find the product of all the integers
//    # before it, storing the total product so far each time
//    product = 1
//    i = 0
//    while i < int_array.length
//        products_of_all_ints_except_at_index[i] = product
//        product *= int_array[i]
//        i += 1
//    end
//
//    # for each integer, we find the product of all the integers
//    # after it. since each index in products already has the
//    # product of all the integers before it, now we're storing
//    # the total product of all other integers
//    product = 1
//    i = int_array.length - 1
//    while i >= 0
//        products_of_all_ints_except_at_index[i] *= product
//        product *= int_array[i]
//        i -= 1
//    end
//
//    return products_of_all_ints_except_at_index
//end
//	
