var request = require('request');

console.log("\nHey there!\n\nWelcome to the GitHub Avatar Downloader!\n")

function getRepoContributors(repoOwner, repoName, cb){

}

getRepoContributors("jquery", "jquery", function(err, result){
  console.log("Errors: ", err);
  console.log("Result: ", result);

});