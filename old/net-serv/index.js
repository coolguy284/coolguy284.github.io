//#include console thingos here
var datajs = require('./data');
var net = require('net');
var fs = require('fs');
var serv = net.createServer(function(c) {
  console.log('conn');
  c.on('data', function(data) {
    c.write(datajs.sr.replace('{dat}', data.toString()));
    c.end();
  });
});
serv.listen(8080, function() {
  console.log('Server listening on port 8080');
});
