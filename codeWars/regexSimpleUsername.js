//Write a simple regex to validate a username.
//
//Allowed characters are:
//
//-lowercase letters -numbers - underscore
//
//length shoould be between 4 and 16 characters.

//aww yeaaa, same solution as colby and zozo
const validateUrl = (username) =>
	/^[a-z0-9_]{4,16}$/.test(username);