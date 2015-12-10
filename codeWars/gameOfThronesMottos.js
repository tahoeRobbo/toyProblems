// Add the Houses to the array
var houses = [
  {name: "Targaryen", motto: "Fire and Blood"},
  {name: "Stark",     motto: "Winter is Coming"},
  {name: "Bolton",    motto: "Our Blades Are Sharp"},
  {name: "Greyjoy",   motto: "We Do Not Sow"},
  {name: "Tully",     motto: "Family, Duty, Honor"},
  {name: "Arryn",     motto: "As High as Honor"},
  {name: "Lannister", motto: "Hear Me Roar!"},
  {name: "Tyrell",    motto: "Growing Strong"},
  {name: "Baratheon", motto: "Ours is the Fury"},
  {name: "Martell",   motto: "Unbowed, Unbent, Unbroken"}
];
console.log(houses);
console.log(houses.length);

// Implement the function
function motto(name) {
  for(var i = 0; i < houses.length; i++) {
		console.log(houses[i]);
    if(houses[i].name.toLowerCase() === name.toLowerCase()){
      return houses[i].motto;
    }	
  }
	return '';
}

motto("stark");