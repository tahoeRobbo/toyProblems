//Terminal game move function
//
//In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice times 2.
//
//Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

const move = (position, roll) => position + (roll * 2);

function move (position, roll) {
  return position + (roll * 2);
}

//well that was lame :/