declare module 'react-router-dom'; // no typings for react-router v6 yet

declare module '*.less';

declare module '*.module.less' {
  const resource: { [key: string]: string };
  export = resource;
}

declare module '*.css';

declare module '*.module.css' {
  const resource: { [key: string]: string };
  export = resource;
}

// declare global {
// interface Window {}
// }
