/*NOT IN USE*/

/*"use strict";
const server = require('http').createServer();

var port = process.env.PORT || 3000;

const io = require('socket.io')(server, {
  path: '/test',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

console.log('Blinker Socket API server started on: ' + port);

server.listen(3000);*/