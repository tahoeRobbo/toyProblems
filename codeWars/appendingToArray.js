//Your task is to write a function named addWord that appends a string to an array. The original array should be modified and then returned.
//
//Example:
//
//var list = [];
//addWord(list, 'hello'); // list should be ["hello"]
//addWord(addWord(list, 'how are you'), 'goodbye'); // list should be ["hello","how are you","goodbye"]

function addWord(array, string) {
  array = array || [];
  return array[array.length] = string, array;
}

