
y = mx + b

var slope = (points[1][1] - points[0][1]) - (points)

var l1 = [[1,2], [7, 4], [22,9]];
var horiz = [[1, 2], [1, 4], [1, 7]];
var unorder = [[7,4], [1, 2], [22, 9]];
var repeatedPoint = [[1,1], [1,1]];


function onLine (points){
	if(points.length < 3){
		return true;
	}

	var m = (points[points.length -1 ][1] - points[0][1]) / (points[points.length - 1][0] - points[0][0]);
	var b = points[0][1] - (m * points[0][0]);
	console.log(m, 'm', b, 'b');
	if(m === Infinity || m === 0 || isNaN(m)){
		return true;
	}
	
	for(var i = 0; i < points.length; i++){
		console.log(m * points[i][0] + b, 'y from in loop')
		if(points[i][1] !== Math.round(m * points[i][0] + b)){
			return false;
		}
	}
	return true;
}


onLine(repeatedPoint);
onLine(unorder);
onLine(horiz);
onLine(l1);


//holy shniekies! dude covered every edge case! --prksingh


//top solution
function onLine(points) {
  if (points.length < 3) return true;
  var x = points.shift();
  var a = undefined;
  return points.
    filter (function(y) { return !(x[0] == y[0] && x[1] == y[1]) }).
    map    (function(y) { return a = (x[0] - y[0])/(x[1] - y[1]) }).
    every  (function(y) { return y == a });
}

//hmmm