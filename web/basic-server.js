var http = require("http");
var handler = require("./request-handler");
var initialize = require("./initialize.js");

// Why do you think we have this here?
// HINT: It has to do with what's in .gitignore
initialize();

var port = 8080;
var ip = "127.0.0.1";
var server = http.createServer(handler.handleRequest);

if (module.parent) { // if being loaded by another script
  module.exports = server;
  console.log("MODULE PARENT: Listening on http://" + ip + ":" + port);
} else {
  server.listen(port, ip);
  console.log("Listening on http://" + ip + ":" + port);
}

