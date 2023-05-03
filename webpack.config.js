import path, { dirname } from 'path';

module.exports = {
    entry: './custom.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};