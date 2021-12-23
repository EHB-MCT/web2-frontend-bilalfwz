const path = require('path');

module.exports = {
    entry: [
        './src/script.js',
        './src/all.js',
        './src/backend.js',
        './src/myList.js',
        './src/popular.js',
        './src/popup.js',
        './src/main.js',
        './src/render.js',

    ],



    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
    },
    mode: 'production',
    watch: true
};