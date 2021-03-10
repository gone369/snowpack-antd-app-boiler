import React from 'react';
import ReactDOM from 'react-dom';
import './style/global.less';

import Routes from './routes';

const App = () => {
  return <Routes />;
};

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(<App />, root);
} else {
  console.warn('need a div with id="root"');
}

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
