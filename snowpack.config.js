// const path = require('path');
// const webpackExtendConfig = require('./webpack.extend.config.js');
// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  mount: {
    src: '/dist',
    public: { url: '/', static: true },
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      'snowpack-plugin-less',
      {
        modifyVars: {},
        javascriptEnabled: true,
      },
    ],
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-typescript',
    // [
    //   '@snowpack/plugin-webpack',
    //   {
    //     sourceMap: true,
    //     htmlMinifierPlugin: false,
    //     extendConfig: webpackExtendConfig,
    //   },
    // ],
  ],
  exclude: ['**/node_modules/**/*'],
  devOptions: {
    /* ... */
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
    splitting: true,
    treeshake: true,
  },
  buildOptions: {
    sourcemap: true,
    /* ... */
  },
  // packageOptions: {
  //   namedExports: ['antd'],
  // },
  alias: {
    '@': './src',
  },
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
};
