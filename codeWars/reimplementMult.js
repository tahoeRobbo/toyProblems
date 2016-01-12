//Description:
//
//Define a function mul(a, b) that takes two non-negative integers a and b and returns their product.
//
//You should only use the + and/or - operators. Using * is cheating!
//
//You can do this iteratively or recursively.

const mul = (a, b) => {
	let ans = 0;
	while(b > 0){
		ans += a;
		b--;
	}
	return ans;
};

function mul(a, b) {
  if (!a || !b) return 0;
  return Array.from(Array(b), n => a).reduce((a, b) => a + b, 0);
}


//recursive 
let mul = (a, b) => b ? a + mul(a, --b) : a - a;
	

function mul(a, b) {
  return Array.apply(0, Array(b)).map(_=>a).reduce((a,b)=>a+b,0);
}
