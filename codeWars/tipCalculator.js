//Write a function, calculateTip(amount, rating) which calculates how much you need to tip based on the total amount of the bill and the service.
//
//You need to consider the following ratings:
//
//Terrible: tip 0%
//Poor: tip 5%
//Good: tip 10%
//Great: tip 15%
//Excellent: tip 20%
//The rating is case insensitive. If an unrecognised rating is input, then you need to return "Rating not recognised"
//
//Because you're a nice person, you always round up the tip, regardless of the service.

function tipCalculator(amount, rating){
	var tips = {
		terrible : 0,
		poor : 0.05,
		good : 0.10,
		great : 0.15,
		excellent : 0.20
	}

	
  if(isNaN(Math.ceil(amount * tips[rating.toLowerCase()]))){
    return "Rating not recognised";
  }
	return Math.ceil(amount * tips[rating.toLowerCase()]);
}

tipCalculator(420, 'good');

//cool ES2015 solution

const TIPS = {
  "terrible": 0.0,
  "poor": 0.05,
  "good": 0.1,
  "great": 0.15,
  "excellent": 0.2
};

const calculateTip = (amount, rating) => {
  rating = rating.toLowerCase();
  
  return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
};