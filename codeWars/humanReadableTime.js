//Description:
//
//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
//HH = hours, padded to 2 digits, range: 00 - 99
//MM = minutes, padded to 2 digits, range: 00 - 59
//SS = seconds, padded to 2 digits, range: 00 - 59
//The maximum time never exceeds 359999 (99:59:59)
//
//You can find some examples in the test fixtures.

function humanReadable(time){
	var humanReadableTime = [];
	for(var i = 0; i <= 1; i++){
		(time % 60 > 9) ? (humanReadableTime.unshift(time % 60)) : (humanReadableTime.unshift('0' + time % 60));
		time = Math.floor(time / 60);
	}
	
	(time > 9) ? humanReadableTime.unshift(time) : humanReadableTime.unshift('0' + time);
	return humanReadableTime.join(':');
}

humanReadable(75);
humanReadable(86399);

//another good one -- 
function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}

//SGMartinau's code..

function humanReadable(seconds) {
  var cool = [];
  var hours = Math.floor(seconds / 3600);
  seconds = seconds - (hours * 3600);
  var mins = Math.floor(seconds / 60);
  seconds = seconds - (mins * 60);
  if (hours === 0) {
    cool.push('00');
  } else if (hours < 10) {
    cool.push('0' + hours.toString());
  } else {
    cool.push(hours.toString());
  }
  if (mins === 0) {
    cool.push('00');
  } else if (mins < 10) {
    cool.push('0' + mins.toString());
  } else {
    cool.push(mins.toString());
  }
    if (seconds === 0) {
    cool.push('00');
  } else if (seconds < 10) {
    cool.push('0' + seconds.toString());
  } else {
    cool.push(seconds.toString());
  }
  return cool.join(':');
}