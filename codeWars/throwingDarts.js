//Description:
//
//You've just recently been hired to calculate scores for a Dart Board game! 
//
//Scoring specifications:
//0 points - radius above 10
//5 points - radius between 5 and 10 inclusive
//10 points - radius less than 5
//
//If all radiuses are less than 5, award 100 BONUS POINTS!
//
//Write a function that accepts an array of radiuses (can be integers and/or floats), 
//and returns a total score using the above specification.
//An empty array should return 0.
//
//Examples:
//scoreThrows( [1, 5, 11] ) => returns 15 
//scoreThrows( [15, 20, 30] ) => returns 0 
//scoreThrows( [1, 2, 3, 4] ) => returns 140

//my first soluiton -- need to check efficiency of using filters instead
//of a loop
const scoreThrows = (radiuses) => {
	return (radiuses.filter(r => r < 5).length === 4) ? 140 : 
		radiuses.filter(r => r >= 5 && r <= 10).length * 5 +
		radiuses.filter(r => r < 5).length * 10;
};

//computer guy's solution
function scoreThrows(radiuses){
  return radiuses.map(function (r) {
    return r > 10 ? 0 : r < 5 ? 10 : 5;
  }).reduce(function (a, b) {
    return a + b;
  }, 0) + (radiuses.length == 0 || radiuses.filter(function (r) {
    return r >= 5;
  }).length ? 0 : 100);
}

//top solution
function scoreThrows(radiuses){

  if (radiuses.length <= 0) { return 0 }
  
  var score = 0
  var award = true
  for(var i = 0; i < radiuses.length; i++) {
    if      (radiuses[i] < 5)   { score += 10 }
    else if (radiuses[i] <= 10) { score += 5; award = false }
    else                        { award = false }
  }
  
  if (award) { score += 100 }
  
  return score;
}