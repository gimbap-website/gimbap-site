const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Where files should be sent once they are bundled
  entry: {
    index: './src/index.tsx',
  },
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'index.bundle.js'
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
   port: 3000,
 },
  // Rules of how webpack will take our files, complie & bundle them for the browser
 module: {
   rules: [
    {
       test: /\.(ts|tsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
    },
     {
       test: /\.css$/,
       use: ['style-loader', 'css-loader']
     }
   ]
 },
 resolve: {
  extensions: ['.ts', '.tsx', '.js', '.svg', '.png']
},
 plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}


