//Description:
//
//Mrs. Frizzle is beginning to plan lessons for her science class next semester, and wants to encourage friendship amongst her students. To accomplish her goal, Mrs. Frizzle will ensure each student has a chance to partner with every other student in the class in a series of science projects.
//
//Mrs. Frizzle does not know who will be in her class next semester, but she does know she will have n students total in her class.
//
//Specifications
//
//Create the function projectPartners with the parameter n representing the number of students in Mrs. Frizzle's class. The function should return the total number of unique pairs she can make with n students.
//
//projectPartners(2)
//  --> returns 1
//
//projectPartners(4)
//  --> returns 6
//Remarks
//
//your solution should not contain any arrays or objects that are used similar to an array. Note that Haskell will use rather large numbers, such as 10^40, so any list-based solution will autmatically fail the test.
//your function will only recieve a single number that is greater than or equal to 2 -- you do not need to worry about input validation.

function projectPartners(n){
	var res = 0;
	while(n > 1){
		res += n-1;
		n--;
	}
	return res;
}



//best solution -- much better, no looping, no added vars
function projectPartners(n){
	return n * (n-1) / 2; //equation simplification
}


projectPartners(5);