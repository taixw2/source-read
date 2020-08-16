const path = require('path')
const Webpack = require('../../lib/index').webpack
// console.log("Webpack", Webpack)
// debugger
// console.log('321')

console.log("123")

console.log("4")

Webpack({
    mode: 'development',
    entry: '/source-analysis/example-react-app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    optimization: {
        minimize: false
    }
}, (err) => {
    console.log(err)
    console.log('null2');
})
