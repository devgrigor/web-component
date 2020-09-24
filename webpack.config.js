const path = require('path');

module.exports = {
    context: path.resolve(__dirname, ''),
    devtool: 'inline-source-map',
    entry: './src/MainComponent.ts',
    mode: 'development',
    watch: true,
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
};