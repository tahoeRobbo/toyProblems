//Given: an array containing hashes of names
//
//Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
//
//Example:
//
//list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
//// returns 'Bart, Lisa & Maggie'
//
//list([ {name: 'Bart'}, {name: 'Lisa'} ])
//// returns 'Bart & Lisa'
//
//list([ {name: 'Bart'} ])
//// returns 'Bart'
//
//list([])
//// returns ''
//Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.


const list = names => {
	let len = names.length;
	
	if(len === 0){return ''};
  if(len === 1){return names[0].name};
	
	let res = `${names[len-2].name} & ${names[len-1].name}`;
	
	for(let i = len-3; i > 0; i--){
		res = `${names[i].name}, `.concat(res);
	}
	
	return res;
};

//computerguy's
function list(a) {
  return a.map(e => e.name).join(', ').replace(/,(?!.*,)/, ' &');
}

//top solution
function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }

//another good one using reduce
function list( names ){
  return names.reduce(function(prev, curr, i, arr){
    return prev + curr.name + (i<arr.length-2?', ':i==arr.length-2?' & ':'');
  }, '');
}