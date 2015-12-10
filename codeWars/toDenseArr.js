function toDense (sparse){
	var dense = [];
	for(var i = 0; i < sparse.length; i++){
		if(sparse[i] || sparse[i] === 0){
			dense.push(sparse[i]);
		}
	}
	return dense;
}


//better solution using filter, doesn't need to loop -- 

function toDense(sparse){
  return sparse.filter(function (arg) { return arg || arg === 0; });
}