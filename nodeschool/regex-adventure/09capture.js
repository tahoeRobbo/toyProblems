module.exports = function(str) {
	var match = /x=(\d+)/.exec(str);
	return match ? match[1] : null;
};