const http = require('http');
const through2map = require('through2-map');


const server = http.createServer( (req,res) => {
    if (req.method === "POST") {
        req.pipe(through2map( chunk => {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
}).listen(process.argv[2] || 8000);