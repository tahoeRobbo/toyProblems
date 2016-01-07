Description:

//You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:
//
//nextBigger(12)==21
//nextBigger(513)==531
//nextBigger(2017)==2071
//If no bigger number can be composed using those digits, return -1:
//
//nextBigger(9)==-1
//nextBigger(111)==-1
//nextBigger(531)==-1

//Final Working Solution >^.^<
function nextBigger(n){
	var arr = n.toString().split('');
	var subArr = [];
	
	for(var i = arr.length -1; i > 0; i--){
		//when it finds a lower number to the left, it searches through 
		//numbers to the right (pushed into the subArr) and finds the 
		//next largest number, then swaps places. it then breaks out of 
		//the 'next greatest' check, and breaks from the 'left less than 
		//right' check
		if(arr[i-1] < arr[i]){
			subArr.unshift(arr.pop());
			subArr.sort((a,b) => a-b);
			for(var j = 0; j < subArr.length; j++){
				if(subArr[j] > arr[i-1]){
					var temp = subArr[j];
					subArr[j] = arr[i-1];
					arr[i-1] = temp;
					break;
				}
			}
			break;
		}
		//if left !< right, pop right into the subArr
		else {
			subArr.unshift(arr.pop());
		}
	}

	//if the arr+subArr is > than original n, return it,
	//otherwise return -1
  return  (+arr.concat(subArr).join('') > n) ? 
            +arr.concat(subArr).join('') : -1;

}


//wellp, that's not right
function nextBigger(n){
	var arr =  n.toString().split('');
	var lastDigit = arr.pop();
	var subArr = [];
	if(arr.length > 2 && arr[0] !== arr[1]){
		for(var i = arr.length - 1; i > 0; i--){
			debugger;
			console.log(subArr, 'sA', arr, ' arr')
			if(arr[i] < lastDigit){
				subArr.unshift(arr[i]);
				arr[i] = lastDigit;
				subArr.sort((a,b) => a-b);
				return arr.concat(subArr);
			}
			subArr.unshift(arr.pop());
		}
	} else {
			return [lastDigit, arr.toString()];
		}
	return -1;
	
}

//almost works.. need to add once i-1 > i, find smallest # > i-1 to right;
function nextBigger(n){
  console.log(n);
	var arr = n.toString().split('');
	var subArr = [];
	
	
	
	for(var i = arr.length -1; i > 0; i--){
		if(arr[i-1] < arr[i]){
			var temp = arr[i-1];
			arr[i-1] = arr[i];
			arr[i] = temp;
			subArr.unshift(arr.pop());
			break;
		}
		else {
			subArr.unshift(arr.pop());
		}
	}

  return  (+arr.concat(subArr.sort((a,b) => a-b)).join('') > n) ? 
            +arr.concat(subArr.sort((a,b) => a-b)).join('') : -1;

}

//some cool solutions -- top voted
const sortedDigits = n => { let arr = n.toString().split(''); arr.sort((a, b) => b - a); return arr; };

function nextBigger(n){
  
  let arr = sortedDigits(n);
  let max = parseInt(arr.join(''), 10);
  
  for(var i = n + 1; i <= max; i++){
    if(sortedDigits(i).every((x, j) => x === arr[j])){
      return i;
    }
  }
  
  return -1;
}

//similar to mine, uses while and splice.  still makes two arrays, 
//maybe more time efficient by making less push/pop calls?
//does create more vars tho.

function nextBigger(n){
  console.log(n);
  var chars = n.toString().split('');
  var i = chars.length-1;
  while(i > 0) {
    if (chars[i]>chars[i-1]) break;
    i--;
  }
  if (i == 0) return -1;
  var suf = chars.splice(i).sort();
  var t = chars[chars.length-1];
  for (i = 0; i < suf.length; ++i) {
    if (suf[i] > t) break;
  }
  chars[chars.length-1] = suf[i]
  suf[i] = t;
  var res = chars.concat(suf);
  var num = parseInt(res.join(''));
  console.log("->" +num);
  return num;
}