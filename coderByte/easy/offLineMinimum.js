//Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E means take out the smallest integer currently in the whole set. When finished, your program should return that new set with integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5. 


//misread question -- this function will return the smallest
//num in the spaces BETWEEN the E's, not the smallest
//total number when E is hit
function OffLineMinimumBetween (strArr) {
	var sepArr = strArr.join('').split('E');
	var res = [];
	for (var i = 0; i < sepArr.length; i++) {
		if(sepArr[i]) {
			var orderedSub = sepArr[i].split('').sort(function(a,b){return a-b;});
			res.push(orderedSub[0]);
		}
	}
	return res.join(',');
}

//
//1. When the input was ("5","4","6","E","1","7","E","E","3","2") your output was incorrect.
//2. When the input was ("1","2","E","E","3") your output was incorrect.
//3. When the input was ("4","E","1","E","2","E","3","E") your output was incorrect.
//4. When the input was ("1","2","3","E") your output was incorrect.
//5. When the input was ("1","2","3","E","E") your output was incorrect.
//6. When the input was ("1","2","E","3","E","5","4","6") your output was incorrect.
//7. When the input was ("3","5","E","6","E","1","4","2","E") your output was incorrect.
//8. When the input was ("4","1","5","E","E","E") your output was incorrect.
//9. When the input was ("6","5","1","2","3","4","E","E","E") your output was incorrect.
//10. When the input was ("6","5","1","E","3","4","E","2","E") your output was incorrect.

//correct answer
OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"]);

function OffLineMinimum(strArr) {
	var numArr = [];
	var res = [];
	
	for(var i = 0; i < strArr.length; i++){
		if(/[0-9]/.test(strArr[i])){
			numArr.push(strArr[i]);
		}
		
		if(strArr[i] === 'E'){
			numArr = numArr.sort(function(a,b){return a - b;});
			
			res.push(numArr.shift());
		}
	}
	
	return res.join(',');
}

// All test outputs were correct >^.^<

//chrisgolex's code -- seems inefficient. writes like a dick
//but it doesn't create a separate array for the nums.. hmm

//function OffLineMinimum(strArr) {
//  var a= strArr; var res =[];
//  for(var i=0; i<a.length; i++){
//    if(a[i] == "E"){
//  var t = a.splice(0,i+1);
//    t.pop();
//	t = t.sort();
//	  res.push(t.shift());
//   for(var j=0; j<t.length; j++){
//        a.splice(0,0,t[j]);
//		  console.log(a);
//      }
//      i-=2;        
//    }        
//  }
// 
//  return res.join(",");          
//}
//OffLineMinimum(readline());   
