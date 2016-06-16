//Description:
//
//Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.
//
//This Kata is similar to the Valid Parentheses Kata, but introduces four new characters. Open and closed brackets, and open and closed curly braces. Thanks to @arnedag for the idea!
//
//All input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.
//
//What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace. 
//For example:
//'(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.
//
//Examples: 
//validBraces( "(){}[]" ) => returns true 
//validBraces( "(}" ) => returns false 
//validBraces( "[(])" ) => returns false 
//validBraces( "([{}])" ) => returns true 

//fails at '(})' -- need to account for a closing without an open
function validBraces (str){
	console.log(str);
	var open = [];
	
	for(var i = 0; i < str.length; i++){	
		if(/[\(\{\[]/g.test(str[i])){
			open.push(str[i]);
		}	
		
		if(str[i] === ')' && open[open.length - 1]  === '(' && open.length > 0){
			open.pop();
		}
		if(str[i] === ']' && open[open.length - 1] === '[' && open.length > 0){
			open.pop();
		}
		if(str[i] === '}' && open[open.length - 1]  === '{' && open.length > 0){
			open.pop();
		}
		
		console.log(open, 'open after if tests')

		
	}

	if(open.length === 0){
		return true;
	}
	
	return false;
}

validBraces('(){}[');

//can't return out of ternary ifs.. will make an unbalanced count (or bool);
function validBraces (str){
	console.log(str);
	var open = [];
	
	for(var i = 0; i < str.length; i++){	
		if(/[\(\{\[]/g.test(str[i])){
			open.push(str[i]);
		}	
		
		if(str[i] === ')'){ 
			 (open[open.length - 1]  === '(' && open.length > 0) ? 
				 open.pop() : return false;
		}
	
		if(str[i] === ']'){ 
			 (open[open.length - 1]  === '[' && open.length > 0) ? 
				 open.pop() : return false;
		}
	
		if(str[i] === '}'){ 
			 (open[open.length - 1]  === '{' && open.length > 0) ? 
				 open.pop() : return false;
		}	
		
		console.log(open, 'open after if tests')

		
	}

	if(open.length === 0){
		return true;
	}
	
	return false;
}


//my submitted solution -- function validBraces (str){
function validBraces (str){
	var open = [];
  var unbalanced = 0;
	
	for(var i = 0; i < str.length; i++){	
		if(/[\(\{\[]/g.test(str[i])){
			open.push(str[i]);
		}	
		
		if(str[i] === ')'){ 
			 (open[open.length - 1]  === '(' && open.length > 0) ? 
				 open.pop() : unbalanced++;
		}
	
		if(str[i] === ']'){ 
			 (open[open.length - 1]  === '[' && open.length > 0) ? 
				 open.pop() : unbalanced++;
		}
	
		if(str[i] === '}'){ 
			 (open[open.length - 1]  === '{' && open.length > 0) ? 
				 open.pop() : unbalanced++;
		}	
		
	}

	if(open.length === 0 && unbalanced === 0){
		return true;
	}
	
	return false;
}


//could also use a bool -- takes out a few calculations --
function validBraces (str){
	var open = [];
  var unbalanced = false;
	
	for(var i = 0; i < str.length; i++){	
		if(/[\(\{\[]/g.test(str[i])){
			open.push(str[i]);
		}	
		
		if(str[i] === ')'){ 
			 (open[open.length - 1]  === '(' && open.length > 0) ? 
				 open.pop() : unbalanced = true;
		}
	
		if(str[i] === ']'){ 
			 (open[open.length - 1]  === '[' && open.length > 0) ? 
				 open.pop() : unbalanced = true;
		}
	
		if(str[i] === '}'){ 
			 (open[open.length - 1]  === '{' && open.length > 0) ? 
				 open.pop() : unbalanced = true;
		}	
		
	}

	if(open.length === 0 && !unbalanced){
		return true;
	}
	
	return false;
}

// overwhelmingly voted best practice and clever
function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

//overwhelmingly clever solution 
function validBraces(braces){
  while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
    braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
  }
  return braces.length == 0;
}
function Braces(values) {
    console.log(values.length);
    var res = [];
    
    for(var i = 0, end = values.length - 1; i <= end; i++ ){
        console.log(values[0])
        var bracesToTest = values[i];
        console.log(bracesToTest, 'bracesToTest');
        var open = [];
        var unbalanced = false;


        for(var j = 0; j < bracesToTest.length; j++){
            if(/[\(\[\{]/g.test(bracesToTest[j])){
                open.push(bracesToTest[j]);
            }

            if(bracesToTest[j] === ')'){
                (open[open.length - 1] === '(')?
                    open.pop() : unbalanced = true;
            }

            if(bracesToTest[j] === '}'){
                (open[open.length - 1] === '{')?
                    open.pop() : unbalanced = true;
            }

            if(bracesToTest[j] === ']'){
                (open[open.length - 1] === '[')?
                    open.pop() : unbalanced = true;
            }
        }

        
        console.log(open, 'open')
       res.push( (open.length === 0 && !unbalanced) ? 'YES' : 'NO' );
    }
    
   return res;
}

function foo1()
{
  return {
    bar: "hello"
  };
}

function foo2()
{
  return 
  {
    bar : "hello"
  };
}

function Braces(values) {
    var res = [];
    
    for(var i = 0, end = values.length - 1; i <= end; i++ ){
        var bracesToTest = values[i],
            open = [],
            unbalanced = false;


        for(var j = 0, len = bracesToTest.length; j < len; j++){
            if(/[\(\[\{]/g.test(bracesToTest[j])){
                open.push(bracesToTest[j]);
            }

            if(bracesToTest[j] === ')'){
                (open[open.length - 1] === '(')?
                    open.pop() : unbalanced = true;
            }

            if(bracesToTest[j] === '}'){
                (open[open.length - 1] === '{')?
                    open.pop() : unbalanced = true;
            }

            if(bracesToTest[j] === ']'){
                (open[open.length - 1] === '[')?
                    open.pop() : unbalanced = true;
            }
        }

       res.push( (open.length === 0 && !unbalanced) ? 'YES' : 'NO' );
        
    }
    
   return res;
    
}
