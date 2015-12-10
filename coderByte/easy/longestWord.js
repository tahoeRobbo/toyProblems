//Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

function LongestWord(sen){
	var letters = sen.match(/[A-z\s]/g);
	var word = '';
	var words = [];
	var longestWord = '';
	
	console.log(letters);
	
	for(var j = 0; j < letters.length; j++){
		if(/[A-z]/.test(letters[j])){
			word = word + letters[j];
		}
		
		if(letters[j] === ' ' || !letters[j +1]){
			words.push(word);
			word = '';
		}
	}
	
	console.log(words);
	
	for(var i = 0; i < words.length; i++){
		if(words[i].length > longestWord.length){
			longestWord = words[i];
		}
	}
	
	return longestWord;
}

 
 // don't like it has two for loops... 
 function LongestWord(sen) {
	 var letters = sen.match(/[A-z\s]/g);
	 var words = [];
	 var word = '';
	 var longestWord = '';
	 
	 for(var i = 0; i < letters.length; i ++){
		 if(/[A-z]/.test(letters[i])){
				word = word + letters[i];
				}
		 
		 if(letters[i] === ' ' || !letters[i + 1]){
			 words.push(word);
			 word = '';
		 }
	 }
	 
	 for(var j = 0; j < words.length; j++) {
		 if(words[j].length > longestWord.length){
			 longestWord = words[j];
		 }
		
	 }
	
	 return longestWord;
	 
 }

 LongestWord("THIS. POOp is STINKY!!!")

//jackgeeks code
//FUCK of course i could just use regEx word characters...
//
function LongestWord(sen) {

  var words = sen.match(/(\w+)/g);
		console.log(words);
  var longest = '';
  for (var i=0; i < words.length; i+=1) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  // code goes here  
  return longest; 
         
}

 LongestWord("THIS. POOp is STINKY!!!")
 
 
 //third and final answer... (i want to be a millionaire)
 

 
  function LongestWord(sen) {
	 var words = sen.match(/[A-z]+/g);
	 var longestWord = '';
 
	 for(var i = 0; i < words.length; i++) {
		 if(words[i].length > longestWord.length){
			 longestWord = words[i];
		 }
		
	 }
	
	 return longestWord;
	 
 }

 LongestWord("THIS. POOp is STINKY!!!")
