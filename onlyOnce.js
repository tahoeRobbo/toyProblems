//write a function that can only be invoked once

var onlyOnce = function() {
	onlyOnce = null;
};

onlyOnce();
onlyOnce();//err;

//come back and add some more!!
/*var onlyOnce2 = function() {
	var count = 1;
	return function() {
		if(count === 1) {
		count -=1;
	}
		if (count !==1) {
			
		}
	}
};*/