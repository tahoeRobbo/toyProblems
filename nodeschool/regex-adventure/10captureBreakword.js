module.exports = function(str) {
	var match = /\bx=(\d+)\b/.exec(str);
	return match ? match[1] : null;
};