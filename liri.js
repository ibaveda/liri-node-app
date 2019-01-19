require("dotenv").config();
//pseudo code for liri.js
//make some variables
//import packages and keys
var keys = require("./keys");
//go to apis to get data and console log by using command line arguments

//LIRI will search Spotify for song/artists - music data
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify);
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

var command = process.argv(2);
var title = process.argv(3);

spotify.search();

console.log(command);
console.log(title);

//Request npm call
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

//Bands in Town for concert, get concert info


//OMDB for movies - get movie