/*  ## HTTP UPPERCASERER (Exercise 12 of 13)  
   
  Write an HTTP server that receives only POST requests and converts  
  incoming POST body characters to upper-case and returns it to the client.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  */


const http = require('http');
const through2map = require('through2-map');


const server = http.createServer( (req,res) => {
    if (req.method === "POST") {
        req.pipe(through2map( chunk => {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
}).listen(process.argv[2] || 8000);