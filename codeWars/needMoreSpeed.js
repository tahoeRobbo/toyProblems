//function reverse(arr)
//that will take in any array and reverse it. 
//
//Sounds simple doesn't it? 
//
//NOTE: Array should be reversed in place!

function reverse(arr) {
	var temp;
   	for(var i = 0, len = arr.length - 1; i < len / 2; i++){
			temp = arr[i];
			arr[i] = arr[len - i];
			arr[len - i] = temp;
		}
	return arr;
}


	
