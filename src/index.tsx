import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

import App from './components/app/app';

import { store } from './store';
import { fetchOrders } from './store/order-slice/order-slice';

import './global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

store.dispatch(fetchOrders());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
