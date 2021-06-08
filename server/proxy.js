const serverConfig = require('./server.config.js');

module.exports = {
  proxyConfig: {
    target: `${serverConfig.server.protocol}://${serverConfig.server.host}:${serverConfig.server.port}`,
    ws: true,
    changeOrigin: true,
    // pathRewrite: {
    //   '^/api' : '/api'
    // }
  },
};
