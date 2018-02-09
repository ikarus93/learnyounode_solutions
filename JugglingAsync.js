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