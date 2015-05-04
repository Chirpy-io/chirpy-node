var http = require('http');

var trackEvent = function (eventName, queue) {

  if (typeof queue === 'undefined') { 
    queue = false; 
  };

  var data = {
    event: eventName,
  };

  var trackId = module.exports.trackId;
  var path = (queue) ? '/' + trackId + '/queue' : '/' + trackId;

  var userString = JSON.stringify(data);

  var headers = {
    'Content-Type': 'application/json',
    'Content-Length': userString.length
  };

  var options = {
    host: 'www.chirpy.io',
    port: 3000,
    path: path,
    method: 'POST',
    headers: headers
  };

  var req = http.request(options, function(res) {
    res.setEncoding('utf-8');

    var responseString = '';

    res.on('data', function(data) {
      responseString += data;
    });

    res.on('end', function() {
      var resultObject = JSON.parse(responseString);
    });
  });

  req.on('error', function(e) {
    console.log('Error tracking event'+ e)
  });

  req.write(userString);
  req.end();

}

module.exports = {
    id: "",
    track: trackEvent
}