//Let's say:
//
//'(', '{', '[' are called "openers."
//')', '}', ']' are called "closers."
//Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.
//
//Examples:
//
//"{ [ ] ( ) }" should return True
//"{ [ ( ] ) }" should return False
//"{ [ }" should return False

function bracketValidator(str) {
	var opener = [];
	
	for(var i = 0; i < str.length; i++) {
		//push all openers to opener array
		//keeps last open symbol on end
		if(/[\{\[\(]/.test(str[i])){
			opener.push(str[i]);
		}
		
		//test all closers to see if they pair with last open symbol
		//if it closes the last open, pop the opener from the array
		if(/[\}]/.test(str[i]) && opener.length > 0 && '{' === opener[opener.length - 1]){
			opener.pop();
		}
		if(/[\]]/.test(str[i]) && opener.length > 0 && '[' === opener[opener.length - 1]){
			opener.pop();
		}
		if(/[\)]/.test(str[i]) && opener.length > 0 && '(' === opener[opener.length - 1]){
			opener.pop();
		}
		
	}
	console.log(opener, ' op');
	if(opener.length === 0){
		return true;
	}
	return false
}

bracketValidator("{ [ ( ] ) }");


//Python Solution

//  def is_valid(code):
//    openers_to_closers_map = {
//        '(' : ')',
//        '{' : '}',
//        '[' : ']'
//    }
//
//    openers = openers_to_closers_map.keys()
//    closers = openers_to_closers_map.values()
//
//    openers_stack = []
//
//    for char in code:
//        if char in openers:
//            openers_stack.append(char)
//        elif char in closers:
//            if not openers_stack:
//                return False
//            else:
//                last_unclosed_opener = openers_stack.pop()
//                # if this closer doesn't correspond to the most recently
//                # seen unclosed opener, short-circuit, returning false
//                if not openers_to_closers_map[last_unclosed_opener] == char:
//                    return False
//
//    return openers_stack == []