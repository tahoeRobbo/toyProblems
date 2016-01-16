//Implement String#digit?, which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function() {
  return /^\d$/.test(this) ? true : false;
};

//unnecessary ternary --
String.prototype.digit = function() {
  return /^\d$/.test(this);
};