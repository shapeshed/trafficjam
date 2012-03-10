var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (queryData.delay) {
    setTimeout(function(){ 
      response.end("Response from Traffic Jam with " + queryData.delay + 'ms delay');
    }, queryData.delay);
  } else {
    response.end("Response from Traffic Jam \n");
  }
});

server.listen(8000);
