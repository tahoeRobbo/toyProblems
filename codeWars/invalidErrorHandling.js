//Invalid Input - Error Handling #1
//
//Error Handling is very important in coding. Most error handling seems to be overlooked or not implemented properly.
//Task
//
//Your task is to implement a function which is expected to take a string and return an object containing the properties vowels and consonants The vowels property must contain the total count of vowels ('y' in this case is not a vowel), and consonants are any other letters, you must also trim any spaces. Don't forget to handle invalid input, though you must always return valid output.
//
//Input
//
//The input you are expecting is any random string you must then discern what are vowels and what are consonants and sum their total occurances in an object. However you may also receieve inputs that are not strings. If this happens, then you must return an object with the vowel and consonant total of 0 because the input was NOT a string. Refer to the Example section for a more visual representation of what inputs you may receive and the outputs expected. :)
//
//Example:
//
//Input: getCount('test')
//Output: {vowels:1,consonants:3}
//
//Input: getCount('tEst')
//Output: {vowels:1,consonants:3}
//
//Input getCount('    ')
//Output: {vowels:0,consonants:0}
//
//Input getCount()
//Output: {vowels:0,consonants:0}
//C#
//
//A Counter class has been put in the preloaded section taking two parameters Vowels and Consonants this must be the Object you return!

function getCount (str){
  if(!str || typeof str !== "string"){
    return {'vowels' : 0, 'consonants' : 0};
  }
  
	var vowels = str.match(/[aeiou]/ig) || 0;
	var consonants = str.match(/[^aeiou\W_]/ig) || 0;
	
	return {'vowels' : vowels.length || 0,
				 	'consonants' : consonants.length || 0};
}

//I like this one - little less verbose -- 
function getCount(words) {
  let f = typeof words === 'string';
  return {
    vowels: f ? words.replace(/[^aeiou]/gi,'').length : 0,
    consonants: f ? words.replace(/[^bcdfghjklmnpqrstvwxyz]/gi,'').length : 0
  }
}

