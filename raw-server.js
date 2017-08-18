var net = require('net');
//var request = require('request');

var server = net.createServer();  
server.on('connection', handleConnection);

server.listen(9000,'0.0.0.0', function() {  
  console.log('server listening to %j', server.address());
});

function handleConnection(conn) {  
  var remoteAddress = conn.remoteAddress + ':' + conn.remotePort;
  console.log('new client connection from %s', remoteAddress);

  conn.setEncoding('utf8');

  conn.on('data', onConnData);
  conn.once('close', onConnClose);
  conn.on('error', onConnError);

  function onConnData(d) {
    console.log('connection data from %s: %j', remoteAddress, d);
    //request.post('http://localhost:3000/blinks', {form:{device_identity:'azxx',device_signal:"on"}})
    conn.write(d);
  }

  function onConnClose() {
    console.log('connection from %s closed', remoteAddress);
  }

  function onConnError(err) {
    console.log('Connection %s error: %s', remoteAddress, err.message);
  }
}