// API key for accessing the YouTube Data API
var API_KEY = 'AIzaSyBlZjp8U8AMUE2y8KFSSfAaKnm4Gz-Gcrc';

// Initialize the API client
function init() {
  gapi.client.setApiKey(API_KEY);
  gapi.client.load('youtube', 'v3', function() {
    console.log('API client loaded for YouTube Data API');
  });
}

// Get the oldest video from a YouTube channel
function getOldestVideo() {
  // Get the channel ID from the input field
  var channelLink = document.getElementById('channelLink').value.trim();
  var channelId = '';}

  // Extract the channel ID from the link
  if (channelLink.match(/youtube\.com\/(user\/\w+|channel\/\w+)/)) {
    channelId = RegExp.$1.split('/').pop();
  } else if (channelLink.match(/youtube\.com\/(c\/\w+)/)) {
    channelId = RegExp.$1.split('/').pop();
  } else {
    document.getElementById('error').innerHTML = 'Please enter a valid YouTube channel link.';
    return;
  }

  // Make the API request to get the oldest video in the channel
  var request = gapi.client.youtube.search.list({
    part: 'snippet',
    channelId: channelId,
    type: 'video',
    order: 'date',
    maxResults: 1
  });


