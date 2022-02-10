const testFolder = './';
const fs = require('fs');

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
        const ff = file.split('.').slice(0, -1).join('.');
      console.log(camelize(ff) + '_enum');

    });

});

