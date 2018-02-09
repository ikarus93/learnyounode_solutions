const fs = require('fs');
const path  = require('path');

module.exports = (dir, ext, callback) => {
    
    fs.readdir(dir, (err, list) => {
        if(err) return callback(err);
        ext = "." + ext;
        list = list.filter( item => { return path.extname(item) === ext});
        return callback(null, list);
    })
};