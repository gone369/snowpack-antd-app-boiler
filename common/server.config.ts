const createUrlObj = ({ host, port = '', path = '', protocol = 'http' }) => {
  return {
    host,
    port,
    path,
    protocol,
    url: `${protocol}://${host}${port.length > 0 ? `:${port}` : ''}${path}`,
  };
};

const getHost = () => {
  if (typeof window === 'undefined') {
    return '127.0.0.1';
  } else {
    return window.location.hostname;
  }
};

const server = {
  development: createUrlObj({
    host: '127.0.0.1',
    port: '3001',
    path: '',
  }),
  production: createUrlObj({
    protocol: 'https',
    host: getHost(),
    path: '/api',
  }),
};

export default {
  createUrlObj,
  client: createUrlObj({
    host: '127.0.0.1',
    port: '3000',
  }),
  server,
};
