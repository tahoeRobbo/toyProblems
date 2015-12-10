//Using the JavaScript language, have the function DashInsertII(str) insert dashes ('-') between each two odd numbers and insert asterisks ('*') between each two even numbers in str. For example: if str is 4546793 the output should be 454*67-9-3. Don't count zero as an odd or even number. 

function DashInsertII(str){
	var splitStr = str.toString().split('');
	console.log(splitStr, 'b4 loop')
	for(var i = 0; i < splitStr.length; i++) {
//		if((/[2468]/.test(splitStr[i])) && (/[2468]/.test(splitStr[i+1]))){
//			splitStr.splice(splitStr[i], 0, '*');
//		}
		
		if(/[2468]/.test(splitStr[i]) && /[2468]/.test(splitStr[i+1])){
			console.log('matched two evens', i);
			splitStr.splice(i + 1, 0, '*');
			i++;
		}
		
		if(/[13579]/.test(splitStr[i]) && /[13579]/.test(splitStr[i+1])){
	console.log('matched two odds odd', i);
			splitStr.splice(i + 1, 0, '-');
			i++;
		}		
//		if(/![013579]/.test(splitStr[i]) && /![013579]/.test(splitStr[i+1])){
//			splitStr.splice(splitStr[i], 0, '*');
//		}
	}
		console.log(splitStr);
}



DashInsertII(3175944);

DashInsertII(2424);


///finally! damn.. first challenge of the day, made hella mistakes
//was putting splitStr[i + 1] in splice 
//forgot to i++ after..





//take two!... action

function DashInsertII (str) {
	var splitStr = str.toString().split('');
	
	for(var i = 0; i < splitStr.length; i++) {
		if(/[2468]/.test(splitStr[i]) && /[2468]/.test(splitStr[i + 1])){
			splitStr.splice(i + 1, 0 , '*');
			i++;
		}
		
		if(/[13579]/.test(splitStr[i]) && /[13579]/.test(splitStr[i + 1])){
			splitStr.splice(i + 1, 0, '-');
			i++;
		}
	}
	
	return splitStr.join('');
}


//all cases were correct >^.^<


//chrisgolex's code

//done without using splices, -- created a new string, tested
//even or odd using modulus, added to new string, returned that string

//function DashInsertII(num) { 
//var str = String(num);
//dashInsert ="";
//for (var i= 0; i<str.length; i++){
//if(i == 0 && Number(str[i]) % 2 ==0 && Number(str[i+1]) % 2 ==0 && Number(str[i+1])!=0){
//dashInsert = dashInsert + str[i] + "*";
//}else if(i == 0 && Number(str[i]) % 2 !=0 && Number(str[i+1]) % 2 !=0 && i!=str.length-1){
//dashInsert = dashInsert + str[i] + "-";
//}else if(i != 0 && i!=str.length-1 && Number(str[i]) % 2 ==0 && Number(str[i+1]) % 2 ==0 && Number(str[i])!=0 && Number(str[i+1])!=0){
//dashInsert = dashInsert + str[i] + "*";
//}else if(i != 0 && i!=str.length-1 && Number(str[i]) % 2 !=0 && Number(str[i+1]) % 2 !=0){
//dashInsert = dashInsert + str[i] + "-";
//}else if(i!= 0 && i==str.length-1){
//dashInsert = dashInsert + str[i];
//}else { 
//dashInsert = dashInsert + str[i];
//
//}
//
//
//}
//
//  return dashInsert; 
//         
//}
//   
//
//DashInsertII(readline());  