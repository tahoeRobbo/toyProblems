//Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 

function processTime(time) {
	var splitTime = time.split(':');
	var hours = splitTime.shift();
	var mins = splitTime.shift();
	console.log(hours, ' h', mins, ' m');
	
	if(mins[mins.length-2] === 'p'){
		hours = +hours + 12;
	}
	console.log(hours, ' h', mins, ' m');
	mins = mins.split(/[ap]/);
	console.log(mins);
}

processTime('1:00pm')


function CountingMinutesI(str) {
	var splitTimes = str.split('-');
	var time1 = splitTimes.shift();
	var time2 = splitTimes.shift();
	var hours1 = time1.split(':').shift();
	var minutes1 = time1.shift();
	
	console.log(hours1, ' h1', minutes1, 'm1')

}



CountingMinutesI('1:00pm-10:00am');