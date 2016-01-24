//The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he made a mistake. Could you help him?
//
//if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149
//
//The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg. Should the last donation be a non positive number (<= 0) John wants us to throw an error (return Nothing in Haskell) so that he clearly sees that his expectations are not great enough.
//
//Notes:
//
//all donations are numbers, arr can be empty.
//See examples below to see which error is to be thrown.

function newAvg(arr, newavg) {
  if(!arr.length){return newavg};
  if(newavg * (arr.length + 1) - arr.reduce((prev, curr) => prev + curr) < 0){throw Error();}
  
  return Math.ceil(newavg * (arr.length + 1) - arr.reduce((prev, curr) => prev + curr));
}
//zozo's solution
function newAvg(arr, newavg) {
    let res = ( Math.ceil((arr.length+1)*newavg - arr.reduce((s,v)=>s+v,0)) );
    if ( res < 0 ) throw new RangeError("Positive only, please");
    return res
}