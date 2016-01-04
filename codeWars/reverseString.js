//Create a function that will reverse a string.
//
//You might have to convert the string into an array first before you are able to reverse it.
//
//Your final answer must also be a string.
//
//Some functions you might find useful to solve this problem are: String.split() Array.reverse() Array.join()

const reverseString = str =>
	str.split('').reverse().join('');

//very cool variation, didn't know you could turn a str into an array like this --
const reverseString = str => [...str].reverse().join('');





