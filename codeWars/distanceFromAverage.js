//Description:
//
//Given a starting list/array of data, it could make some statistical sense to know how much each value differs from the average.
//
//If for example during a week of work you have collected 55,95,62,36,48 contacts for your business, it might be interesting to know the total (296), the average (59.2), but also how much you moved away from the average each single day.
//
//For example on the first day you did something less than the said average (55, meaning -4.2 compared to the average), much more in the second day (95, 35.8 more than the average and so on).
//
//The resulting list/array of differences starting from [55, 95, 62, 36, 48] is thus [4.2, -35.8, -2.8, 23.2, 11.2].
//
//Assuming you will only get valid inputs (ie: only arrays/lists with numbers), create a function to do that, rounding each difference to the second decimal digit; extra points if you do so in some smart, clever or concise way :)

//awww yeaaa, matched the top solution's logic, but I used function 
//rather than an arrow. refactord

const distancesFromAverage = (arr) => {
	let avg = arr.reduce((prev,curr) => prev + curr) / arr.length;
	return arr.map(num => (avg - num).toFixed(1));
};

const distancesFromAverage = function(arr){
  let avg = arr.reduce((prev,curr) => prev + curr) / arr.length;
  return arr.map(num => +(avg - num).toFixed(2));
};

distancesFromAverage([55, 95, 62,36,48]);