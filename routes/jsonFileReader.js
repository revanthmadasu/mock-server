module.exports = {
    getFile(fileName) {
        const fs = require('fs');
        const path = require('path');
        let rawdata = fs.readFileSync(path.resolve('./routes/mock-data', fileName));
        return rawdata;
    }
}