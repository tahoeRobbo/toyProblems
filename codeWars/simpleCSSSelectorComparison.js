//Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup language. A style sheet consists of a list of rules. Each rule or rule-set consists of one or more selectors, and a declaration block. Selector describes which element it matches.
//
//Sometimes element is matched to multiple selectors. In this case, element inherits multiple styles, from each rule it matches. Rules can override each other. To solve this problem, each selector has it's own 'specificity' - e.g. weight. The selector with greater specificity overrides the other selector.
//
//Your task is to calculate the weights of two selectors and determine which of them will beat the other one.
//
//compare("body p", "div"); // returns "body p"
//compare(".class", "#id"); // returns "#id"
//compare("div.big", ".small"); // returns "div.big"
//compare(".big", ".small"); // returns ".small" (because it appears later)
//For simplicity, all selectors in test cases are CSS1-compatible, test cases don't include pseudoclasses, pseudoelements, attribute selectors, etc. Below is an explanation on how to weight two selectors. You can read more about specificity here.
//
//The simplest selector type is tagname selector. It writes as a simple alphanumeric identifier: eg body, div, h1, etc. It has the least weight. If selectors have multiple elements - the selector with more elements win. For example, body p beats div, because it refers to 2 (nested) elements rather than 1.
//
//Another simple selector is .class selector. It begins with dot and refer to element with specific class attribute. Class selectors can also be applied to tagname selectors, so div.red refer to <div class="red"> element. They can be grouped, for example, .red.striped. Class selector beats tagname selector.
//
//The most weighted selector type in stylesheet is #id selector. It begins with hash sign and refer to element with specific id attribute. It can also be standalone, or applied to an element. Id selector beats both selector types.
//
//And the least weighted selector is *, which has no specificity and can be beat by any other selector.
//
//Selectors can be combined, for example, body #menu ul li.active refers to li element with class="active", placed inside ul element, placed inside element width id="menu", placed inside body.
//
//Specificity calculation is simple.
//
//Selector with more #id selectors wins
//If both are same, the winner is selector with more .class selectors
//If both are same, selector with more elements wins
//If all of above values are same, the winner is selector that appear last
//For example, let's represent the number of #id , .class, tagname selectors as array (in order from worst to best):

//first solution.. meh -- has to be a better way
const compare = function(a,b) {
	let calcSpec = function(selectors) {
		let count = 0;
		selectors = selectors.split('');
		for(let i = 0, len = selectors.length; i < len; i++){
			if(/\w/.test(selectors[i]) && (!selectors[i-1] || selectors[i-1] === ' ')){count += 1}
			if(/[.]/.test(selectors[i])){count += 10}
			if(/[#]/.test(selectors[i])){count += 10000}
		}
		return count;
	}
	return calcSpec(a) > calcSpec(b) ? a : b;
}



