//Implement String#to_seconds, which should parse time expressed as HH:MM:SS, or nil otherwise.
//
//Any extra characters, or numbers of minutes/seconds higher than 59, should result in nil being returned.


//first solution -- seems to be best/most popular way
String.prototype.toSeconds=function(){
	var times = this.match(/^([0-9][0-9]):([0-5][0-9]):([0-5][0-9])$/);
	return (times) ? (+times[1] * 3600) + (+times[2] * 60) + (+times[3]) : null;
}

"01:02:03".toSeconds();

//Zozo's solution

String.prototype.toSeconds=function(){
  return (this.match(/^(\d\d):([0-5]\d):([0-5]\d)$/)||[]).slice(1).reduce((secs,part) => secs*60+~~part, null )
}