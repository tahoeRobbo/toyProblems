//Task:
//
//You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
//
//Note:Returning the pattern is not the same as Printing the pattern.
//Rules/Note:
//
//If n < 1 then it should return "" i.e. empty string.
//There are no whitespaces in the pattern.
//Pattern:
//
//(n)(n-1)(n-2)...4321
//(n)(n-1)(n-2)...432
//(n)(n-1)(n-2)...43
//(n)(n-1)(n-2)...4
//...............
//..............
//(n)(n-1)(n-2)
//(n)(n-1)
//(n)
//Examples:
//
//pattern(4):
//
//4321
//432
//43
//4
//pattern(11):
//
//1110987654321
//111098765432
//11109876543
//1110987654
//111098765
//11109876
//1110987
//111098
//11109
//1110
//11

const pattern = (n) => {
  'use strict';
  let str = '';
  let i = 1;
  
  while(n >= i){
    for(let x = n; x >= i; x--){
      str += x;
    }
    str += '\n';
    i += 1;
  }
  
  return str;
}
pattern(11);