var logText = function() {
	var text = "outerText";
	return function(text) {
		console.log(text);
		var text = "innerText";
	};
};