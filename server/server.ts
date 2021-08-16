import fallback from 'express-history-api-fallback';
import express from 'express';
import path from 'path';

import serverConfig from '%/server.config';

const app = express();
const root = path.resolve(__dirname, '../build');

// proxies

app.use(express.static(root));
// app.use(express.static(fonts));
app.use(fallback('index.html', { root: root }));

app.listen(serverConfig.client.port, serverConfig.client.host, () => {
  console.log(
    `listening at http://${serverConfig.client.host}:${serverConfig.client.port}`
  );
});
