//Description:
//
//In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).
//
//If all angles are less than 90°, this triangle is acute and function should return 1.
//
//If one angle is strictly 90°, this triangle is right and function should return 2.
//
//If one angle more than 90°, this triangle is obtuse and function should return 3.
//
//If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.
//
//Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).
//
//
//Acute
//
//Right
//
//Obtuse
//Examples:
//
//triangleType(2, 4, 6); // return 0 (Not triangle)
//triangleType(8, 5, 7); // return 1 (Acute, angles are approx. 82°, 38° and 60°)
//triangleType(3, 4, 5); // return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
//triangleType(7, 12, 8); // return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
//If you stuck, this can help you: http://en.wikipedia.org/wiki/Law_of_cosines. But you can solve this kata even without angle calculation.
//
//There is very small chance of random test to fail due to round-off error, in such case resubmit your solution.

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/

//my solution
function triangleType(a, b, c){

	const findAngle = (x, y, z) => {

		return Math.acos((x*x + y*y - z*z) / (2 * x *y)) * (180 / Math.PI);
	};

	let angles = [];
		angles[0] = findAngle(b, c, a);
		angles[1] = findAngle(a, c, b);
		angles[2] = findAngle(a, b, c);

	if(
		angles.filter(num => num === 180).length === 1 ||
		angles.filter(num => isNaN(num)).length >= 1
	){return 0};

	return angles.filter(angle => angle < 90).length === 3 ? 1 : 
		angles.filter(angle => Math.round(angle) === 90).length === 1 ?  2 : 3;
}
	triangleType(2,4,6);

//lots of variation on this one -- 
function triangleType(a, b, c){
  var result = triangleType.ACUTE,
      sides = [a,b,c].sort(function(a,b){return a-b});
  
  a = sides[0], b = sides[1], c = sides[2];
  
  if(a <= c - b) {
    result = triangleType.INVALID;
    
  } else if(c*c === a*a + b*b) {
    result = triangleType.RIGHT;
    
  } else if(c*c > a*a + b*b) {
    result = triangleType.OBTUSE;
  }
  
  return result;
}

triangleType.INVALID = 0;
triangleType.ACUTE = 1;
triangleType.RIGHT = 2;
triangleType.OBTUSE = 3;

function triangleType(a, b, c){
  var cmp, sides = [a, b, c].sort(function (a, b) { return a - b });
  a = sides[0]; b = sides[1]; c = sides[2];
  if (a && a + b > c) {
    cmp = a * a + b * b - c * c;
    if (cmp > 0) return 1;
    if (cmp == 0) return 2;
    if (cmp < 0) return 3;
  }
  return 0;
}

function triangleType(a, b, c){
  var max = Math.max(a,b,c);
  
  if (a+b+c <= 2*max) return 0;
  if (2*max*max == a*a+b*b+c*c) return 2;
  if (2*max*max >  a*a+b*b+c*c) return 3;
  return 1;
}

//really like the simplicity of this one -- all based on sides, never have to find
//angles
// sort the numbers, if the two smaller are smaller than the biggest, impossible
//if the two smallers are equal to each other -- right
//if the two smallest squared and added are smaller than the biggest squared -- obtuse
//if the two smallest squared and added are bigger than thh biggest squared -- acute
function triangleType(a, b, c) {
  var sides = [a, b, c].sort(function (a, b) { return a-b; });
  var v1 = sides[0] * sides[0] + sides[1] * sides[1],
      v2 = sides[2] * sides[2];
  
  if (sides[2] >= sides[0] + sides[1]) return 0; // Impossible
  if (v1 == v2) return 2; // Right angle
  return v1 < v2 ? 3 : 1;
}