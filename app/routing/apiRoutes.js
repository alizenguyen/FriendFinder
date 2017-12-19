// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friend");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests

  app.get("/api/friend", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests

  app.post("/api/friend", function(req, res) {
    
    // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    var newUserScore = req.body.scores;
    var results = [];
    var match = 0;
    var besties;

    //pushes user to friendsArray
    friendsData.push(req.body);

    console.log(friendsData)
    
    //Goes through friendsArray, compares scores, and pushes the difference of each comparison to results array
    for (var i=0; i<friendsData.length; i+=1) {
      var difference = 0;
      //Goes through newUserScore array and compares each score with each individual user in the array
      for (var j=0; j<newUserScore.length; i+=1) {
        difference += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newUserScore[j])))
      };
      //pushes to results array
      results.push(difference);
    }

    //Goes through the results array
    for (var i=0; i<results.length; i+=1) {
      //Compares if the difference is less than or equal to the first result index, if less or equal match gets reassigned and compared again until loop is complete
      if(results[i] <= results[match]) {
        match = i
      }
    };

    //new variable get assigned the best match and gets sent out
    besties = friendsData[bestMatch]; 
    console.log(besties);
    res.json(besties);
  });

};