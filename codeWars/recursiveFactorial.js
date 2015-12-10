function factorial(num, total){
	if(!total){
		total = num;
	}
	if(num === 1) {
		return total;
	}
	
	total*= (num - 1);
	return factorial(num - 1, total);
	
}	