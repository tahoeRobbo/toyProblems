var fs = require('fs');
var dir = process.argv[2];
var path = require('path');


fs.readdir(dir, function cb (err, res) {
	if(res) {
		for(var i = 0; i < res.length; i++) {
			if(path.extname(res[i]) === '.' + process.argv[3]){
				console.log(res[i]);
			}
		}
	}

});

//solution -- uses forEach instead of a for loop

//  var fs = require('fs')
//    var path = require('path')
//    
//    fs.readdir(process.argv[2], function (err, list) {
//      list.forEach(function (file) {
//        if (path.extname(file) === '.' + process.argv[3])
//          console.log(file)
//      })
//    })
//



