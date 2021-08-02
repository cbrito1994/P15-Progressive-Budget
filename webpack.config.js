const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
    entry: {
      index: './public/index.js',
      db: './public/indexeddb.js'
    },
    output: {
      path: __dirname + '/public/dist',
      filename: '[name].bundle.js',
    },
    mode: 'production',
    plugins: [
      new WebpackPwaManifest({
        filename: "manifest.json",
        inject: false,
        fingerprints: false,

        name: 'Budget Tracker app',
        short_name: 'Budget App',
        background_color: '#01579b',
        theme_color: '#ffffff',
        start_url: '/',
        display: "standalone",
        icons: [
          {
            src: path.resolve(__dirname, 'public/icons/icon-512x512.png'),
            sizes: [72, 96, 128, 152, 192, 256, 384, 512],
            destination: '/',
          },
        ],
      }),
    ],
};
  
module.exports = config;
  