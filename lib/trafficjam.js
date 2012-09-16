var http = require('http'),
    url = require('url'),  
    port = process.env.PORT || 3000;

var server = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  if (queryData.delay) {
    if (isNaN(queryData.delay)) {
      response.statusCode = 422;
      response.end("delay must be a number");
    } else {
      setTimeout(function(){ 
        response.end("Response from Traffic Jam with " + queryData.delay + 'ms delay');
      }, queryData.delay);
    }
  } else {
    response.end("Response from Traffic Jam");
  }
});

server.listen(port);
