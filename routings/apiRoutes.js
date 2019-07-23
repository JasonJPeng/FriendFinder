var path = require("path");
// var fs = require('fs');
var friends = require(path.join(__dirname, "..", "app", "data", "friends.js"));

//
// Find the most matched friend,and return JSON
// calculate the score for each friends
//   score calculation:
//     score = absolue_value(diff (friend_array [] - me_array[]) )
//     arrScores = array of all friends sacores
//
function matchFriends(me, others) {
    var arrScores = []; //
    friends.forEach( e => {
      var score = e.scores.map((e,i)=>{return Math.abs((e - me.scores[i]))}).reduce((x,y)=>x+y, 0);
      arrScores.push(score);
    })
    // console.log(arrScores);
    var minScore = Math.min(...arrScores);
    var i = arrScores.indexOf(minScore);
  
     return others[i];
  }
  
  //
  // If me is a new object, add to the friends list;
  // otehrwise, replace the existing
  // based on the first 20 characters of the name
  function add2List(me, friends) {
     var myName = me.name.substring(0, 20).toLowerCase();
  
     for (var i=0; i<friends.length; i++) {
         if (myName === friends[i].name.substring(0,20).toLowerCase()) {
            friends[i] = me;
            return;
         } 
     }
     friends.push(me);
  }
  


// var friends = [];
// fs.readFile( __dirname + "/../app/data/friends.js", "utf8", function(err, data) {
//     // console.log(__dirname);
//      friends = JSON.parse(data);
// });

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var mySurvey = req.body;  
      //   newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
           
        res.json(matchFriends(mySurvey, friends));
      
        add2List(mySurvey, friends);
      
        // friends.push(mySurvey);
      });

   
}    