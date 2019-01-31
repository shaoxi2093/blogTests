var path = require("path");
module.exports = {
    entry: path.join(__dirname, 'entry.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'chunk-no-babel.js'
    },
};