const path = require('path')

module.exports = {
  entry: './src/index.js',
  target: 'node', // this means that the `main` field will be used
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'esm-meilisearch-js-test.js',
  },
  resolve: {
    extensions: ['.js'], // resolve all the modules other than index.ts
  },
}
