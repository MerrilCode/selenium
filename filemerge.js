fs = require('fs');

fs.stat('./reports/report.txt', function(err, fileStat) {
    if (err) {
        if (err.code == 'ENOENT') {
            console.log('Does not exist.');
        }
    } else {
        if (fileStat.isFile()) {
            console.log('File found.');
        } else if (fileStat.isDirectory()) {
            console.log('Directory found.');
        }
    }
});