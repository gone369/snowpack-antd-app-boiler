import serverConfig from '%/server.config';

export default {
  proxyConfig: {
    target: `${serverConfig.server.protocol}://${serverConfig.server.host}:${serverConfig.server.port}`,
    ws: true,
    changeOrigin: true,
    // pathRewrite: {
    //   '^/api' : '/api'
    // }
  },
};
