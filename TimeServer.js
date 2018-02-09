var net = require('net');


function makeDate() {
    
        function addZero(num) {
          if (num < 10) {
            return "0" + num;
          } else {
            return num;
          }
          
    }
    
    var d = new Date();
    return d.getFullYear()  + "-" + addZero(d.getMonth() + 1) + "-" + addZero(d.getDate()) + " " + d.getHours() + ":" +  d.getMinutes();
}


var server = net.createServer(function (socket) {  
        socket.end(makeDate() + "\n");
     })  
server.listen(process.argv[2]);  