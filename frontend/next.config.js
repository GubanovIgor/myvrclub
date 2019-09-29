// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');
//
// module.exports = withCSS(withSass({cssModules: true}));

const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const dev = process.env.NODE_ENV !== 'production';

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
]);
