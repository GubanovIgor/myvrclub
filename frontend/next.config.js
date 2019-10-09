// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');
//
// module.exports = withCSS(withSass({cssModules: true}));

const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
require('dotenv').config();

const config = {
  target: 'serverless',
  env: {
    firebase: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      // databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: 'process.env.FIREBASE_PROJECT_ID',
      // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      // appId: process.env.FIREBASE_APP_ID,
    },
  },
};

module.exports = withPlugins([
  [
    withCss,
    {
      webpack: function (config) {
        config.module.rules.push({
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]',
            },
          },
        });
        return config;
      },
    },
  ],
  [
    withSass,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
      },
    },
  ],
], config);
