import { hot } from 'react-hot-loader/root';
import React from 'react';
import { render } from 'react-dom';

import App from './App';
import './index.scss';

if (module.hot) {
  module.hot.accept();
}

const Root = hot(App);
render(<Root />, document.getElementById('root'));
