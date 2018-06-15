function ipform(ipstr) {
	return ipstr.split('.').map(x => x.padStart(3, '-')).join('.');
}
var http = require('http');
var https = require('https');
var util = require('util');
var b64 = require('./b64');
var datajs = {
	path: '/proxydat',
	/*head: {
		'x-forwarded-for': new Function('req', 'return req.connection.remoteAddress.split("::ffff:")[1];'),
		'x-forwarded-proto': new Function('req', 'return req.connection.encrypted ? "https" : "http";'),
	},*/
	head: {
		host: new Function('req', 'return "github.com";'),
	},
	headmode: 'add',
	hostname: 'github.com',
	port: 443,
	proto: 'https',
	chead: '',
	cfhead: '',
	shead: '',
	sfhead: '',
};
http.createServer(function (req, res) {
	try {
		console.log('[' + new Date().toISOString() + '] ' + ipform(req.connection.remoteAddress) + ' ' + (req.connection.encrypted ? 'https' : 'http ') + ' ' + req.method + ' ' + req.url);
		if (req.connection.remoteAddress == '::ffff:127.0.0.1') {
			if (req.url == datajs.path) {
				let data = fs.readFileSync('websites/indexredirect.html');
				res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
				res.write(data.toString().replace('{path}', datajs.path));
				res.end();
				return;
			} else if (req.url == (datajs.path + '/index.html')) {
				let data = fs.readFileSync('websites/index.html');
				res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
				res.write(data);
				res.end();
				return;
			} else if (req.url == (datajs.path + '/chead.txt')) {
				res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
				res.write(datajs.chead);
				res.end();
				return;
			} else if (req.url == (datajs.path + '/cfhead.txt')) {
				res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
				res.write(datajs.cfhead);
				res.end();
				return;
			} else if (req.url == (datajs.path + '/shead.txt')) {
				res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
				res.write(datajs.shead);
				res.end();
				return;
			} else if (req.url == (datajs.path + '/head.json')) {
				let ps = {}
				for (var i in datajs.head) {
					let hs = datajs.head[i].toString();
					ps[i] = hs.substring(23, hs.length - 2);
				}
				res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
				res.write(JSON.stringify(ps));
				res.end();
			} else if (req.url.substr(0, datajs.path.length + 5) == (datajs.path + '/s?d=')) {
				let dat = b64.decode(req.url.substr(datajs.path.length + 5, Infinity));
				datajs.head = {};
				for (var i in dat.head) {
					datajs.head[i] = new Function('req', dat.head[i]);
				}
				datajs.headmode = dat.headmode;
				datajs.hostname = dat.hostname;
				datajs.port = dat.port;
				datajs.proto = dat.proto;
				res.writeHead(204);
				res.end();
				return;
			}
		}
		datajs.chead = util.inspect(req.headers);
		if (datajs.headmode == 'add') {
			for (var i in datajs.head) {
				req.headers[i] = datajs.head[i](req);
			}
		} else if (datajs.headmode == 'rep') {
			req.headers = {};
			for (var i in datajs.head) {
				req.headers[i] = datajs.head[i](req);
			}
		}
		datajs.cfhead = util.inspect(req.headers);
		let reqs;
		if (datajs.proto == 'http') {
			reqs = http.request({'hostname' : datajs.hostname, 'port' : datajs.port, 'method' : req.method, 'path' : req.url, 'headers' : req.headers}, function (resp) {
				datajs.shead = util.inspect(resp.headers);
				res.writeHead(resp.statusCode, resp.headers);
				resp.pipe(res);
			});
		} else if (datajs.proto == 'https') {
			reqs = https.request({'hostname' : datajs.hostname, 'port' : datajs.port, 'method' : req.method, 'path' : req.url, 'headers' : req.headers}, function (resp) {
				datajs.shead = util.inspect(resp.headers);
				res.writeHead(resp.statusCode, resp.headers);
				resp.pipe(res);
			});
		}
		reqs.on('error', (err) => {
			console.log('Error: ' + err.message);
			res.writeHead(503, {'Content-Type':'text/plain; charset=utf-8'});
			res.write('Error: ' + err.message);
			res.end();
		});
		req.pipe(reqs);
	} catch (e) {
		console.log('Error (proxy): ' + e.stack);
		res.writeHead(503, {'Content-Type':'text/plain; charset=utf-8'});
		res.write('Error (proxy): ' + e.stack);
		res.end();
	}
}).listen(80);