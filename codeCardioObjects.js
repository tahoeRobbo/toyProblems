function getPerson(){
	var person = {
		name : "Dick",
		age : 69
	};
	return person;
}

var newCar = function(make, model) {
	var car = {
		make : make,
		model : model
	}
	return car;
};

console.log(newCar('mercury', 'cougar'));

var canDrive = function(personObj){
	if(personObj.age >= 16) {
		return personObj.name + " is old enough to drive.";
	}
	return personObj.name + " is not old enough to drive.";
};

var testPerson = {
	name : "dick",
	age : 14
};

console.log(canDrive(testPerson));

var changeEmail = function(userObj, newEmail) {
	userObj.email = newEmail;
	return userObj;
};

console.log(changeEmail({email:'tits'}, 'ass'));


var addRole = function(userObj, role) {
	userObj.role = role;
	return userObj;
};

console.log(addRole({name: "rob"}, 'OG'));

var removeRole = function(userObj) {
	delete userObj.role;
	return userObj;
};

console.log(removeRole({name: 'rob', role: 'OG'}));

var unknownPerson = function(personObj) {
	for(var key in personObj) {
		personObj[key] = 'Unknown';
	}
	return personObj;
};

console.log(unknownPerson({name: 'rob', role: 'OG'}));

var truthyObject = function(userObj) {
	for(var key in userObj) {
		if(!userObj[key]) {
			delete userObj[key];
		}
	}
	return userObj;
};

console.log(truthyObject({name : '', age : 69}));