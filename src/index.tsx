import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/stylesheets/index.scss';
import MainPage from 'pages';
import * as serviceWorker from 'serviceWorker';
import store from 'redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <MainPage />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
