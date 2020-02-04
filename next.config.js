require('dotenv').config();

module.exports = {
  webpack(config, {dev}) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    if (dev) {
      config.module.rules.push({
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      });
    }

    return config;
  },

  env: {
    APP_API: process.env.APP_API,
  },
};