function validPhoneNumber(phoneNumber){
	
  return /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);
}
