// //
// // Find the most matched friend,and return JSON
// // calculate the score for each friends
// //   score calculation:
// //     score = absolue_value(diff (friend_array [] - me_array[]) )
// //     arrScores = array of all friends sacores
// //
// function matchFriends(me, others) {
//   var arrScores = []; //
//   friends.forEach( e => {
//     var score = e.scores.map((e,i)=>{return Math.abs((e - me.scores[i]))}).reduce((x,y)=>x+y, 0);
//     arrScores.push(score);
//   })
//   // console.log(arrScores);
//   var minScore = Math.min(...arrScores);
//   var i = arrScores.indexOf(minScore);

//    return others[i];
// }

// //
// // If me is a new object, add to the friends list;
// // otehrwise, replace the existing
// // based on the first 20 characters of the name
// function add2List(me, friends) {
//    var myName = me.name.substring(0, 20).toLowerCase();

//    for (var i=0; i<friends.length; i++) {
//        if (myName === friends[i].name.substring(0,20).toLowerCase()) {
//           friends[i] = me;
//           return;
//        } 
//    }
//    friends.push(me);
// }


// fs.readFile("./app/data/friends.js", "utf8", function(err, data) { obj = JSON.parse(data); console.log(obj)});
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// var fs = require('fs');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

// var friends = [];
// fs.readFile( __dirname + "/app/data/friends.js", "utf8", function(err, data) {
//     // console.log(__dirname);
//      friends = JSON.parse(data);
// });


// Routes
// =============================================================
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname , "public/", "home.html"));
//   });

require(path.join(__dirname, "routings", "htmlRoutes.js") )(app);  
require(path.join(__dirname, "routings", "apiRoutes.js") )(app); 
//   app.get("/:page", function(req, res) {
//     var page = req.params.page;  
//     res.sendFile(path.join(__dirname , "public/", page));
//   });  

// Basic route that sends the user first to the AJAX Page
// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname , "public/", "survey.html"));
//   });



// Displays all possible friends
// app.get("/api/friends", function(req, res) {
//   return res.json(friends);
// });


// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname , "public/", "home.html"));
//   });

// Create New Characters - takes in JSON input
// app.post("/api/friends", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var mySurvey = req.body;  
// //   newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
     
//   res.json(matchFriends(mySurvey, friends));

//   add2List(mySurvey, friends);

//   // friends.push(mySurvey);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

