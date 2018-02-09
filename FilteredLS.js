const fs = require('fs');

fs.readdir(process.argv[2], (err,list) => {
    if (err) console.error(err);
    let query = "." + process.argv[3];
    
    let fileList = list.filter( (item) => { return item.endsWith(query)});
    
    fileList.forEach( (item) => {
        console.log(item);
    })
})