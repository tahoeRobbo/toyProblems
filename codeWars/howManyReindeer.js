//Santa puts all the presents into the huge sack. In order to let his reindeers rest a bit, he only takes as many reindeers with him as he is required to do. The others may take a nap.
//
//Two reindeers are always required for the sleigh and Santa himself. Additionally he needs 1 reindeer per 30 presents. As you know, Santa has 8 reindeers in total, so he can deliver up to 180 presents at once (2 reindeers for Santa and the sleigh + 6 reindeers with 30 presents each).
//
//Complete the function reindeers(), which takes a number of presents and returns the minimum numbers of required reindeers. If the number of presents is too high, throw an error.
//
//Examles:
//
//reindeers(0); // must return 2
//reindeers(1); // must return 3
//reindeers(30); // must return 3
//reindeers(200); // must throw an error

function reindeers(presents) {
	if(presents < 0 || presents > 180){throw new Error("fucked");} 
	return (Math.ceil(presents / 30) + 2)
}


//coldBy Dauph's code -- alwasy nice to see our's are similar
function reindeers(presents) {
  if (presents > 180) throw 'Too many presents!';
  return Math.ceil(presents / 30) + 2;
}



//one's that don't work
//ternary doesn't play nice with the throwing of da error
function reindeers(presents) {
	return (presents < 0 || presents > 180) ?  throw new Error("fucked") : 
	(Math.ceil(presents / 30) + 2);
}


const reindeers = (presents) =>
	(presents < 0 || presents > 180) ?  throw new Error("fucked") : 
	(Math.ceil(presents / 30) + 2);
