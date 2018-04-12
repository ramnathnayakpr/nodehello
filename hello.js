var http = require("http");

http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/html'});
   response.end('<h1>Hello World</h1>\n');

}).listen(80);

// Console will print the message
console.log('Server running port 80');
