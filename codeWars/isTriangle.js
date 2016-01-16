//Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.
//
//(In this case, all triangles must have surface greater than 0 to be accepted).

const isTriangle = (a,b,c) => {
	let sides = [a, b, c].sort((a,b) => a - b);
	
	return (sides[0] + sides[1] > sides[2]);
};

//another cool one -- doesn't require a new array or a sort
function isTriangle(a,b,c)
{
   return a+b>c&&a+c>b&&b+c>a;
}