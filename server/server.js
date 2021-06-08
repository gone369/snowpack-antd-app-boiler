const fallback = require('express-history-api-fallback');
const express = require('express');
const path = require('path');

const app = express();
const root = path.resolve(__dirname, '../build');
const serverConfig = require('./server.config.js');

// proxies

// const { createProxyMiddleware } = require('http-proxy-middleware');
// const { proxyConfig } = require('./proxy');

app.use(express.static(root));
// app.use(express.static(fonts));
app.use(fallback('index.html', { root: root }));

// https://www.npmjs.com/package/http-proxy-middleware

//app.use('/api', createProxyMiddleware(proxyConfig));

app.listen(serverConfig.client.port, serverConfig.client.host, () => {
  console.log(
    `listening at http://${serverConfig.client.host}:${serverConfig.client.port}`
  );
});
