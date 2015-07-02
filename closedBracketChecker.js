//write a functino that takes in a string of mixed brackets and checks to make sure they are all closed

//From Dan
function checker(string){
  var obj = {
    "()": 0,
    "{}": 0,
    "[]": 0,
    "<>": 0
  };
  for(var i = 0; i < string.length; i++){
    for(var key in obj){
      if(key.indexOf(string[i]) === 0){
        obj[key]++;
      } else if(key.indexOf(string[i]) === 1){
        obj[key]--;
        if(obj[key] < 0){
          return false;
        }
      }
    }
  }
  for(var item in obj){
    if(obj[item]){
      return false;
    }
  }
  return true;
}