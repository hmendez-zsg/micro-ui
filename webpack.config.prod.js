const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyFilesPlugin = require("copy-webpack-plugin");
// const MoveFilesPlugin = require("move-copy-chunk-webpack-plugin");
const RemoveFilesPlugin = require("remove-files-webpack-plugin");

// const REGION = process.env.npm_config_region;
// const BRANDS = process.env.npm_config_brands;

module.exports = {
  //environment the code will be compiled for.
  target: 'web',
  mode: 'production',
  //File to be compiled.
  entry: { 'micro-ui': './app/index.tsx', 'micro-ui.style': './app/theme/css.ts' },
  //Compiled file name and folder.
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new RemoveFilesPlugin({
      after: {
        root: './public',
        include: [
            'micro-ui.style.bundle.js'
        ]
      }
    })
  ],
  module: { 
    rules: [
      // Loader for linting ts.  Eventually this should be updated to use eslint-loader instead given
      // that tslint is being deprecated.
      // {
      //   test: /\.(js|ts|tsx)$/,
      //   exclude: /node_modules/,
      //   enforce: 'pre',
      //   use: [
      //     {
      //       loader: 'tslint-loader',
      //       options: {
      //         emitErrors: true,
      //         failOnHint: true,
      //         typeCheck: true
      //       }
      //     }
      //   ]
      // },
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    //   {
    //     test: /\.(woff(2)?|ttf|eot|svg)$/,
    //     use: [
    //       {
    //         loader: 'file-loader',
    //         options: {
    //           name: '[name].[ext]',
    //           outputPath: (url, resourcePath, context) => {
    //             return getFontPath(resourcePath, url, brandsToDeploy);
    //           },
    //           publicPath: (url, resourcePath, context) => {
    //             return getFontPath(resourcePath, url, brandsToDeploy);
    //           }
    //         }
    //       }
    //     ]
    //   },
      //url-loader allowes parsing urls in font-face and url properties.
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        loader: 'url-loader?limit=1000'
      }
    ]
  },
  resolve: {
    //Ommit the following extensions from imports.
    extensions: ['.js', '.ts', '.tsx', '.css', '.scss']
  }
}