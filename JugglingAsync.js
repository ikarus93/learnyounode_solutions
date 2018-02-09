/*  ## JUGGLING ASYNC (Exercise 9 of 13)  
   
  This problem is the same as the previous problem (HTTP COLLECT) in that  
  you need to use http.get(). However, this time you will be provided with  
  three URLs as the first three command-line arguments.  
   
  You must collect the complete content provided to you by each of the URLs  
  and print it to the console (stdout). You don't need to print out the  
  length, just the data as a String; one line per URL. The catch is that you  
  must print them out in the same order as the URLs are provided to you as  
  command-line arguments.  
    */



const http = require('http');

const finalCallback = list => {
    list.forEach( item => {
        console.log(item);
    })
}

http.get(process.argv[2], res => {
    res.setEncoding('utf-8');
    let list = [];
    let output = "";

    res.on('data', chunk => {
        output += chunk;
    });
    
    res.on("error", console.error);
    res.on("end", () => {
        list.push(output);
        http.get(process.argv[3], res => {
            res.setEncoding('utf-8');
            output = "";
            res.on('data', chunk => {
                output += chunk;
            })
            res.on("error", console.error);
            res.on("end", () => {
                list.push(output);
                http.get(process.argv[4], res => {
                    res.setEncoding('utf-8');
                    output = "";
                    res.on("data", chunk => {
                        output += chunk;
                    })
                    res.on("error", console.error);
                    res.on("end", () => {
                        list.push(output);
                        finalCallback(list);
                    })
                }).on("error", console.error);
            })
        }).on("error", console.error);
    })
}).on("error", console.error);