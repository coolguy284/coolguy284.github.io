net = require('net');
net.createServer((c) => {
	c.on('data', (dat) => {
		c.write(dat);
		c.end();
	});
}).listen(80, () => {console.log('on');});