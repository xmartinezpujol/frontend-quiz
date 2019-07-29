import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollToTop from './utils/ScrollToTop';

import App from './app';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider onUpdate={() => window.scrollTo(0, 0)} store={store}>
    <HashRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </HashRouter>
  </Provider>,
  document.getElementById('app'),
);
