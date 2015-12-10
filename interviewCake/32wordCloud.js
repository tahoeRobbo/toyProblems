//You want to build a word cloud, an infographic where the size of a word 
//corresponds to how often it appears in the body of text.

	function wordCloud(str) {
		var words =str.toLowerCase().match(/[A-z\s]/g);
		var wordsArr = [];
		var word = '';
		var wordsToCount = {};

		for(var i = 0; i < words.length; i++){
			if(words[i] !== ' '){
				word = word + words[i];
			}
			if(words[i] === ' ' && word){
				wordsArr.push(word);
				word = '';
			}
			
		}
		console.log(wordsArr);
		
		for(var j = 0; j < wordsArr.length; j++){
			console.log('inside j loop', wordsArr[j])
			for(var key in wordsToCount) {
				if(wordsArr[j] === key){
					console.log('wordsj === key', key, wordsToCount[key]);
					
					wordsToCount[key] = (wordsToCount[key] + 1);
				}
				else if(wordsArr[j] !== key) {
					wordsToCount[wordsArr[j]] = 1;
				}
			}
		}

		console.log(wordsToCount, ' wordsToCount');
		console.log(wordsToCount['tits']);
		return wordsToCount;
	}

	wordCloud('tits i love tits Tits tits, and i - love Ass');
