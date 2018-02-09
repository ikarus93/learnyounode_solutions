/*  ## TIME SERVER (Exercise 10 of 13)  
   
  Write a TCP time server!  
   
  Your server should listen to TCP connections on the port provided by the  
  first argument to your program. For each connection you must write the  
  current date & 24 hour time in the format:  
   
     "YYYY-MM-DD hh:mm"  
   
  followed by a newline character. Month, day, hour and minute must be  
  zero-filled to 2 integers. For example:  
   
     "2013-07-06 17:42"  
   
  After sending the string, close the connection.   */


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