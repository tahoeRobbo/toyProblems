//Did not work


var symbols = function(str) {
  	var splStr = str.split('');
		for(var i = 0; i < splStr.length; i++) {
			if(splStr[i] !== '+' && splStr[i] !== '+') {
				if(splStr[i - 1] === '+' && splStr[i + 1] === '+') {
					return true;
				}
			}
		}
    return false;     
};

