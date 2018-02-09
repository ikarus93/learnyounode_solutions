const getData = require("./module");

getData(process.argv[2], process.argv[3], function(err, data) {
    if(err) console.error(err);
    
    data.forEach( file => {
        console.log(file);
    });
})