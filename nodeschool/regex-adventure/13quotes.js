module.exports = function(str) {
	return str.match(/"[^"]*"/g);
};