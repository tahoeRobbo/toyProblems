//Description:
//
//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
//If the function is passed a valid PIN string, return true, else return false.
//
////eg:
//validatePIN("1234") === true
//validatePIN("12345") === false
//validatePIN("a234") === false

//final
const validatePIN = (pin) =>
	/^(\d{4}|\d{6})$/.test(pin);

//commonJS
function validatePIN (pin) {
  return /^\d{4}$|^\d{6}$/.test(pin);
}

//first solution
const validatePIN = (pin) => 
	/^\d{4}$|^\d{6}$/.test(pin);

//ole colby dauph's solutiion -- lets you take out a ^
const validatePIN = pin => /^(\d{4}$|\d{6}$)/.test(pin);

//-- seems like you could take out the other $?
//yep -- final at top


