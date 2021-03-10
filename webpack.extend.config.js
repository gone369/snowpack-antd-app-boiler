module.exports = function (config) {
  // delete config.optimization.runtimeChunk;
  // delete config.optimization.splitChunks;
  config.output.path = path.resolve(__dirname, 'build/webpack');
  console.log(`=====[ webpack config start ]=====`);
  console.log(config);
  console.log(`=====[ webpack config end ]=====`);
  return config;
};
