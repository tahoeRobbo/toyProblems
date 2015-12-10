function tug_o_war(teams) {
  var team1 = teams[0];
  var team1Str = 0;
  var team2 = teams[1];
  var team2Str = 0;
  
  for(var i = 0;  i < team1.length; i++){
    team1Str += team1[i];
    team2Str += team2[i];
  }
  if(team1Str > team2Str){return "Team 1 wins!";}
  else if(team2Str > team1Str){return "Team 2 wins!";}
  else if(team1Str === team2Str){
    if(team1[0] > team2[4]){return "Team 1 wins!";}
    else if (team2[4] > team1[0]){return "Team 2 wins!";}
    else{return "It's a tie!";}
  }
  
}