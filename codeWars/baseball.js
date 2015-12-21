//
//Your school has hired you to keep track of the score at baseball games. Unfortunately you tend to be rather absent minded because most nights you stay up late playing video games and coding. Let's create a program that will keep track of the score for us.
//
//We'll need to create a constructor ScoreCard that has two public functions: addEntry and getScore.
//
//addEntry - Takes in the result of an at-bat. This result can be single, double, triple, homerun, or out.
//
//getScore - Returns the score in the format Home: [HOME_SCORE] Away: [AWAY_SCORE]
//
//To keep things simple, base runners will advance the amount of bases equal to that of the batter's hit (i.e. if the batter hits a double, each base-runner will advance two bases).
//
//A few important baseball rules:
//
//The Away team bats first.
//There are three outs in an inning.
//After three outs the opposing team hits.
//The hits single, double, triple and homerun correspond to the batter reaching bases first, second, third and home respectively.
//Base runners start at home and then cycle through the bases first, second, third and home.
//Runners score for their team after they reach home.
//For more information on baseball visit here: http://en.wikipedia.org/wiki/Baseball

function ScoreCard(){
	//private
	var atBat = 'away';
	var outs = 0;

	var onBase = {};
	var onBaseCt = 0;
	
	var homeScore = 0;
	var awayScore = 0;
	
	
	//test
	
	//public
	return {
		addEntry : function(action){
			switch(action.toLowerCase()){
				case "single" : onBase["runner" + (parseInt(++onBaseCt))] = {
													name : "runner" + (parseInt(onBaseCt)),
													base : 0
												};

												for(var runner in onBase){
													onBase[runner].base += 1;
													
													if(onBase[runner].base >= 4){
														atBat === 'away' ? awayScore += 1 : homeScore += 1;
														delete onBase[runner];
													}
												}
					break;
					
					case "double" : onBase["runner" + (parseInt(++onBaseCt))] = {
													name : "runner" + (parseInt(onBaseCt)),
													base : 0
												};
												for(var runner in onBase){
													onBase[runner].base += 2;
													
													if(onBase[runner].base >= 4){
														atBat === 'away' ? awayScore += 1 : homeScore += 1;
														delete onBase[runner];
													}
												}
					break;
					
				case "triple" : onBase["runner" + (parseInt(++onBaseCt))] = {
													name : "runner" + (parseInt(onBaseCt)),
													base : 0
												};
												for(var runner in onBase){
													onBase[runner].base += 3;
													
													if(onBase[runner].base >= 4){
														atBat === 'away' ? awayScore += 1 : homeScore += 1;
														delete onBase[runner];
													}
												}
					break;
					
					case "homerun" : onBase["runner" + (parseInt(++onBaseCt))] = {
													name : "runner" + (parseInt(onBaseCt)),
													base : 0
												};
					
												for(var runner in onBase){
														atBat === 'away' ? awayScore += 1 : homeScore += 1;
														delete onBase[runner];
													
												}
					break;
					
				case "out" : outs +=1;
					if(outs === 3){
						outs = 0;
						
						(atBat === 'away') ? atBat = 'home' : atBat = 'away';
						
						alert("The " +atBat+ " team is up to bat!");
						
						onBase = {};
						onBaseCt = 0;
					}
					break;
					
				default : alert("It's got to be a single, double triple, homerun, or out ya big dumb!");
					break;
			}
		},
		getScore : function(){
			return "Home: " + homeScore + " Away: " + awayScore;
		}
	};
	
	
}

var game1 = new ScoreCard();

game1.addEntry('single');

//rewrite using prototype declaration for the methods

function ScoreCard2 (){
	this.atBat = 'away';
	this.outs = 0;
	
	this.onBase = {};
	this.onBaseCt = 0;
	
	this.homeScore = 0;
	this.awayScore = 0;
}


ScoreCard2.prototype.addEntry = function(action){
	switch(action.toLowerCase()){
				case "single" : this.onBase["runner" + (parseInt(++this.onBaseCt))] = {
													name : "runner" + (parseInt(this.onBaseCt)),
													base : 0
												};

												for(var runner in this.onBase){
													this.onBase[runner].base += 1;
													console.log(this.onBase);
													
													if(this.onBase[runner].base >= 4){
														this.atBat === 'away' ? this.awayScore += 1 : this.homeScore += 1;
														delete this.onBase[runner];
													}
												}
					break;
					
					case "double" : this.onBase["runner" + (parseInt(++this.onBaseCt))] = {
													name : "runner" + (parseInt(this.onBaseCt)),
													base : 0
												};
												for(var runner in this.onBase){
													this.onBase[runner].base += 2;
													
													if(this.onBase[runner].base >= 4){
														this.atBat === 'away' ? this.awayScore += 1 : this.homeScore += 1;
														delete this.onBase[runner];
													}
												}
					break;
					
				case "triple" : this.onBase["runner" + (parseInt(++this.onBaseCt))] = {
													name : "runner" + (parseInt(this.onBaseCt)),
													base : 0
												};
												for(var runner in this.onBase){
													this.onBase[runner].base += 3;
													
													if(this.onBase[runner].base >= 4){
														this.atBat === 'away' ? this.awayScore += 1 : this.homeScore += 1;
														delete this.onBase[runner];
													}
												}
					break;
					
					case "homerun" : this.onBase["runner" + (parseInt(++this.onBaseCt))] = {
													name : "runner" + (parseInt(this.onBaseCt)),
													base : 0
												};
					
												for(var runner in this.onBase){
														this.atBat === 'away' ? this.awayScore += 1 : this.homeScore += 1;
														delete this.onBase[runner];
													
												}
					break;
					
				case "out" : this.outs +=1;
					if(this.outs === 3){
						this.outs = 0;
						
						(this.atBat === 'away') ? this.atBat = 'home' : this.atBat = 'away';
						
						alert("The " +this.atBat+ " team is up to bat!");
						
						this.onBase = {};
						this.onBaseCt = 0;
					}
					break;
					
				default : alert("It's got to be a single, double triple, homerun, or out ya big dumb!");
					break;
	}
}; //end ScoreCard2.prototype.addEntry

ScoreCard2.prototype.getScore = function() {
	return "Home: " + this.homeScore + " Away: " + this.awayScore;
};// end ScoreCard2.prototype.getScore


//some other cool solutions from other people
/*
* Scorecard Constructor
*/
var ScoreCard = function() {
  this.scores = {
    home: 0,
    away: 0
  }
  this.bases = [0,0,0,0];
  this.outs = 0;
  this.inTeam = 'away';
}

ScoreCard.basesToAdvance = {
  single: 1,
  double: 2,
  triple: 3,
  homerun: 4
}

ScoreCard.prototype.advancePlayers = function(bases) {
  for(var i = 0; i < bases; i++) {
    this.scores[this.inTeam] += this.bases.pop();
    this.bases.unshift(0);
  }
};

/*
* A public method accepting the result of an at-bat
* @param {string} entry - The result of an at-bat 
* Acceptable values: ('single', 'double', 'triple', 'homerun' or 'out') 
*/
ScoreCard.prototype.addEntry = function(entry) {
  if (entry === 'out') {
    this.outs++;
    if (this.outs === 3) {
      this.inTeam = (this.inTeam === 'home') ? 'away' : 'home';
      this.bases = [0,0,0,0];
      this.outs = 0;
    }
  } else {
    this.bases[0] = 1;
    this.advancePlayers(ScoreCard.basesToAdvance[entry]);
  }
};

/*
* A public method returning the current score
* Format: "Home: [HOME_SCORE] Away: [AWAY_SCORE]"
*/
ScoreCard.prototype.getScore = function() {
  return "Home: " + this.scores.home + " Away: " + this.scores.away;
};

