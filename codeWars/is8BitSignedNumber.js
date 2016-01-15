//Implement String.eight_bit_signed_number? (Ruby), String.eightBitSignedNumber() (Python) or eight_bit_signed_number() (JS), which should return true/True if given object is a number representable by 8 bit signed integer (-128 to -1 or 0 to 127), false/False otherwise.
//
//It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.

String.prototype.signedEightBitNumber=function(){
  if(Number(this).toString() !== this.toString()){return false};
  return (Number(this) >= -128 && Number(this) < 128 ) ? true : false
}

//giocomo's
String.prototype.signedEightBitNumber=function(){
  return this.length>0 && this.replace(/^-/,"").replace(/\d/g,"")=="" && (""+ +this)==this && (i=>i>=-128 && i<=127)(+this)
}

//cool regex solution
String.prototype.signedEightBitNumber = function() {
  return /^(-?([1-9]\d?|1[01]\d|12[0-7])|-128|0)$/.test(this)
}