const path = require('path');

const PUBLIC = path.join(__dirname, 'public');
const CLIENT = path.join(__dirname, 'client');


module.exports = {
  entry: `${CLIENT}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUBLIC,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
