const createUrlObj = ({ host, port = '80', path = '', protocol = 'http' }) => {
  return {
    host,
    port,
    path,
    protocol,
    url: `${protocol}://${host}:${port}${path}`,
  };
};

module.exports = {
  createUrlObj,
  client: createUrlObj({
    host: '127.0.0.1',
    port: '3000',
  }),
  server: createUrlObj({
    host: '127.0.0.1',
    port: '3001',
  }),
  auth: {
    client: createUrlObj({
      host: '127.0.0.1',
      port: '3002',
    }),
    server: createUrlObj({
      host: '127.0.0.1',
      port: '3003',
    }),
  },
};
