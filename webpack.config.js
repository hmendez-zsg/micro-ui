const path = require('path');

module.exports = {
  //environment the code will be compiled for.
  target: 'web',
  mode: 'development',
  //File to be compiled.
  entry: {
    app: './app/index.tsx',
    /**
    |--------------------------------------------------
    | Webpack can only output JS code. Thus, we use css.js file to import
    | all the brand specific .scss and let the loaders handle the rest.
    |--------------------------------------------------
    */
    styles: `./app/theme/css.ts`
  },
  //Compiled file name and folder.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:3001/dist'
  },
  module: { 
    rules: [
      {
        //Babel should transpile any file ending in the following extensions.
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      //sass-loader compiles to css, then css-loader allows importing css in js.
      //style-loader then injects the css in the DOM.
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '/fonts',
              publicPath: `http://localhost:3001/dist/fonts`
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        loader: 'url-loader?limit=1000'
      }
    ]
  },
  resolve: {
    //Ommit the following extensions from imports.
    extensions: ['.js', '.ts', '.tsx', '.css', '.scss']
  },
  //Setup client webserver.
  devServer: {
    //Allow CORS
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: './',
    //Change host so that docker container can direct traffic from configured port.
    host: '0.0.0.0',
    //Use available port from docker-compose file.
    port: '3001'
  }
}