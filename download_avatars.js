var request = require('request');

console.log("\nHey there!\n\nWelcome to the GitHub Avatar Downloader!\n")

function getRepoContributors(repoOwner, repoName, cb){
  var url = 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  request(url, function(err, res, body){
    cb(err, body);
  });

}

getRepoContributors("jquery", "jquery", function(err, result){
  console.log("Errors: ", err);
  console.log("Result: ", result);

});