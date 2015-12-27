//The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.
//
//The following are examples of expected output values:
//
//rgb(255, 255, 255) // returns FFFFFF
//rgb(255, 255, 300) // returns FFFFFF
//rgb(0,0,0) // returns 000000
//rgb(148, 0, 211) // returns 9400D3


function rgb(r, g, b){
	
	function toHex(val){
		return (val < 0) ? '00' : 
			(val >= 0 && val <= 255) ? (val.toString(16).toUpperCase().length === 1) ?
				'0' + val : val 
															: 'FF';
		
	}

	return toHex(r) + toHex(g) + toHex(b);
}

rgb(255,255,255);

function rgb(r, g, b){
	var args = [].slice.call(arguments);
	
	return args.map(function(val){
		console.log(val);
		((val) <= 255) ? (val).toString(16).toUpperCase() : 'FF';
	});
}

rgb(255,255,255);


function rgb(r, g, b){
	r = (+r <= 255) ? (r).toString(16).toUpperCase() ?
			'0' + r : r
									: 'FF';
	g = (+g <= 255) ? (g).toString(16).toUpperCase() ? 
					'0' + g : g
									: 'FF';

	b = (+b <= 255) ? (b).toString(16).toUpperCase() ?
					'0' + b : g
									: 'FF';
	
	return r + g + b;
	
}

rgb(69,69,69)
rgb(300,300,300);

rgb(255,255,255);


function rgb(r, g, b){
	
	function toHex(val){
		return (val < 0) ? '00' : 
			(val >= 0 && val < 256) ? (val.toString(16).toUpperCase().length === 1) ?
				'0' + val.toString(16).toUpperCase() : val.toString(16).toUpperCase() 
															: 'FF';
		
	}

	return toHex(r) + toHex(g) + toHex(b);
}

// good best practice solution
//function rgb(r, g, b){
//  return toHex(r)+toHex(g)+toHex(b);
//}
//
//function toHex(d) {
//    if(d < 0 ) {return "00";}
//    if(d > 255 ) {return "FF";}
//    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
//}

////clever - similar solution but not as lazy and verbose and nested ternary

//function rgb(r, g, b){
//  var convert = function (num) {
//    var hex = Math.max(0, Math.min(num, 255)).toString(16).toUpperCase();
//    return hex.length < 2 ? '0' + hex : hex;
//  };
//  
//  return (convert(r) + convert(g) + convert(b));
//}