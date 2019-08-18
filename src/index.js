import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollToTop from './utils/ScrollToTop';

import App from './app';
import configureStore from './redux/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider onUpdate={() => window.scrollTo(0, 0)} store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
