const http = require('http');
const url = require('url');

const server = http.createServer( (req,res) => {
  
    if (req.method === 'GET') {
        const reqUrl = url.parse(req.url, true);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let d = new Date(reqUrl.query.iso);
        if (reqUrl.pathname === '/api/parsetime') {
            
            res.end(JSON.stringify({ hour: d.getHours(), minute: d.getMinutes(), second: d.getSeconds() }));
        } else if (reqUrl.pathname === '/api/unixtime') {
            
            res.end(JSON.stringify({unixtime: d.getTime()}));
        }

    }
}).listen(process.argv[2] || 8000);