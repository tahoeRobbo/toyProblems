//Make a program that filters a list of strings and returns a list with only your friends name in it. All your friends only have four letter in their name.
//
//Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]


function friend(arr){
	var friends = [];
	for(var i = 0, len = arr.length; i < len; i++){
		if(/^\b[A-z]{4}\b$/.test(arr[i])){
			friends.push(arr[i]);
		}
	}
	return friends;
}


//better, more concise solution using the Array.prototype.filter method combined with es2015 syntax
//-- kata was letting non-letter chars pass.  added in a test for [A-z] to verify
let friend = friends => friends.filter(friend => (friend.length == 4 && /[A-z]/.test(friend)));