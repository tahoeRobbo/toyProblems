function int32ToIp (int32){
	//shift and mask -- part1 is the end of the number.  It takes the full 
	//int32 and uses the bit AND operator to 'mask' 8 bits down.
	//(255 translates to 00000000 00000000 00000000 11111111)
	//then shift the number 8 bits to the left and mask again, etc
	var part1 = int32 & 255;
	var part2 = ((int32 >> 8) & 255);
	var part3 = ((int32 >> 16) & 255);
	var part4 = ((int32 >> 24) & 255);
	
	return part4 + "." +part3+ "." +part2+ "." +part1;
}

//255 == 0xFF
//top voted
function int32ToIp(int32){

 return (
          ((int32 >> 24) & 0xFF) + "." +
          ((int32 >> 16) & 0xFF) + "." +
          ((int32 >>  8) & 0xFF) + "." +
          ((int32) & 0xFF)
        );
 
}