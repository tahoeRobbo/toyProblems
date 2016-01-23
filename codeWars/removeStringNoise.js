//Description:
//
//We have a broken message machine that introduces noise to our incoming messages. We know that our messages are written using a-zA-Z0-9, white characters (like spaces or tabs) and some punctuation chars. Unfortunately our machine introduces noise, which means that our message arrives with characters like: %$&/#·@|º\ª within our original message (noise can have only %$&/#·@|º\ª chars).
//
//Your mission is to write a function which removes this noise from the message.
//
//For example:
//
//removeNoise("h%e&·%$·llo w&%or&$l·$%d")
//// returns hello world

//for all noise, skimmed the prompt, didn't realize it was only supposed
//to remove a set of characters
function removeNoise(str){
	return str.replace(/[^a-z0-9\s]/gi, '');
}

//passes all tests, only removes those symbols
function removeNoise(str){
	return str.replace(/[%$&/#·@|º\\ª]/g, '');
}

const removeNoise = (str) =>
	str.replace(/[%$&/#·@|º\\ª]/g, '');