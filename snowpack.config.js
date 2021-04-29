// const path = require('path');
// const webpackExtendConfig = require('./webpack.extend.config.js');
// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */

//const httpProxy = require('http-proxy');
//const proxy = httpProxy.createServer({ target: 'http://127.0.0.1:8081' });

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
   packageOptions: {
     //namedExports: ['antd'],
     //rollup: {
      //plugins: [
        //require('rollup-plugin-less')({
          //insert: true,
          //exclude: [],
        //}),
      //],
    //},
   },
  alias: {
    '@': './src',
  },
  routes: [
    { match: 'routes', src: '.*', dest: '/index.html' },
    //{
      //match: 'all',
      //src: '/api/.*',
      //dest: (req, res) => {
        //req.url = req.url.replace(/^\/api/, '');
        //proxy.web(req, res);
      //},
    //},
  ],
};
