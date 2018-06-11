var request = require('request');
var gitHubToken = require('./secret.js')

console.log("\nHey there!\n\nWelcome to the GitHub Avatar Downloader!\n")

function getRepoContributors(repoOwner, repoName, cb){

  var options ={
    url: 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'request',
      'Authorizataion': 'token ' + gitHubToken.GITHUB_TOKEN
    }
  };

  request(options, function(err, res, body){
    cb(err, JSON.parse(body));



  });

}

getRepoContributors("jquery", "jquery", function(err, result){
  console.log("Errors: ", err);
  console.log("Result: ", result);

});